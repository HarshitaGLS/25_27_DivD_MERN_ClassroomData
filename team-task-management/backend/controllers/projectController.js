import Project from "../models/Project.js"
import User from "../models/User.js"

// CREATE PROJECT => POST /api/projects

const createProject = async (req, res) => {
  try {

    const {
      name,
      key,
      description,
      startDate,
      endDate
    } = req.body;

    // Validate required fields
    if (!name || !key) {
      return res.status(400).json({
        message: "Project name and project key are required"
      });
    }

    // Check if project key already exists
    const existingProject = await Project.findOne({
      key: key.toUpperCase()
    });

    if (existingProject) {
      return res.status(400).json({
        message: "Project key already exists"
      });
    }

    // Create project
    const project = await Project.create({
      name,
      key: key.toUpperCase(),
      description,
      owner: req.user._id,
      members: [req.user._id],
      startDate,
      endDate
    });

    // Populate owner and members
    const populatedProject = await Project.findById(project._id)
      .populate("owner", "name email role")
      .populate("members", "name email role");

    res.status(201).json({
      message: "Project created successfully",
      project: populatedProject
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

// GET ALL PROJECTS => GET /api/projects

const getProjects = async (req, res) => {
  try {

    const projects = await Project.find()
      .populate("owner", "name email role")
      .populate("members", "name email role")
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: projects.length,
      projects
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

// GET SINGLE PROJECT =>  GET /api/projects/:id

const getProjectById = async (req, res) => {
  try {

    const project = await Project.findById(req.params.id)
      .populate("owner", "name email role")
      .populate("members", "name email role");

    if (!project) {
      return res.status(404).json({
        message: "Project not found"
      });
    }

    res.status(200).json({
      project
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};


// UPDATE PROJECT => PUT /api/projects/:id

const updateProject = async (req, res) => {
  try {

    const {
      name,
      description,
      startDate,
      endDate,
      status
    } = req.body;

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        message: "Project not found"
      });
    }

    // Only project owner can update
    if (
      project.owner.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({
        message: "Only the project owner can update this project"
      });
    }

    // Update only provided fields
    if (name !== undefined) {
      project.name = name;
    }

    if (description !== undefined) {
      project.description = description;
    }

    if (startDate !== undefined) {
      project.startDate = startDate;
    }

    if (endDate !== undefined) {
      project.endDate = endDate;
    }

    if (status !== undefined) {
      project.status = status;
    }

    const updatedProject = await project.save();

    const populatedProject = await Project.findById(
      updatedProject._id
    )
      .populate("owner", "name email role")
      .populate("members", "name email role");

    res.status(200).json({
      message: "Project updated successfully",
      project: populatedProject
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

// DELETE PROJECT => DELETE /api/projects/:id

const deleteProject = async (req, res) => {
  try {

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        message: "Project not found"
      });
    }

    // Only owner can delete
    if (
      project.owner.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({
        message: "Only the project owner can delete this project"
      });
    }

    await project.deleteOne();

    res.status(200).json({
      message: "Project deleted successfully"
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

// ADD MEMBER => POST /api/projects/:id/members

const addMember = async (req, res) => {
  try {

    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({
        message: "User ID is required"
      });
    }

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        message: "Project not found"
      });
    }

    // Only owner can add members
    if (
      project.owner.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({
        message: "Only the project owner can add members"
      });
    }

    // Check user exists
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // Check if already a member
    if (project.members.includes(userId)) {
      return res.status(400).json({
        message: "User is already a project member"
      });
    }

    project.members.push(userId);

    await project.save();

    const populatedProject = await Project.findById(
      project._id
    )
      .populate("owner", "name email role")
      .populate("members", "name email role");

    res.status(200).json({
      message: "Member added successfully",
      project: populatedProject
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

// REMOVE MEMBER => DELETE /api/projects/:id/members/:userId

const removeMember = async (req, res) => {
  try {

    const { id, userId } = req.params;

    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({
        message: "Project not found"
      });
    }

    // Only owner can remove members
    if (
      project.owner.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({
        message: "Only the project owner can remove members"
      });
    }

    // Don't allow owner to remove themselves
    if (
      project.owner.toString() === userId
    ) {
      return res.status(400).json({
        message: "Project owner cannot be removed"
      });
    }

    // Check membership
    const isMember = project.members.some(
      memberId => memberId.toString() === userId
    );

    if (!isMember) {
      return res.status(400).json({
        message: "User is not a project member"
      });
    }

    // Remove member
    project.members = project.members.filter(
      memberId => memberId.toString() !== userId
    );

    await project.save();

    const populatedProject = await Project.findById(
      project._id
    )
      .populate("owner", "name email role")
      .populate("members", "name email role");

    res.status(200).json({
      message: "Member removed successfully",
      project: populatedProject
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};


export {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
  addMember,
  removeMember
};

