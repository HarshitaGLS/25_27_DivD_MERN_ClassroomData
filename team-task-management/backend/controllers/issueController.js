import Issue from "../models/Issue.js"
import Project from "../models/Project.js"
import User from "../models/User.js"


// CREATE ISSUE => POST /api/issues
const createIssue = async (req, res) => {
  try {
    const {
      project, title,
      description,
      type,
      priority,
      assignee,
      labels,
      dueDate
    } = req.body;

    // Validate required fields
    if (!project || !title) {
      return res.status(400).json({
        message: "Project and title are required"
      });
    }

    // Find project
    const projectData = await Project.findById(project);

    if (!projectData) {
      return res.status(404).json({
        message: "Project not found"
      });
    }

    // Check whether logged-in user is a project member
    const isMember = projectData.members.some(
      (memberId) =>
        memberId.toString() === req.user._id.toString()
    );

    if (!isMember) {
      return res.status(403).json({
        message: "You are not a member of this project"
      });
    }

    // Check assignee
    if (assignee) {
      const assigneeUser = await User.findById(assignee);

      if (!assigneeUser) {
        return res.status(404).json({
          message: "Assignee not found"
        });
      }

      const assigneeIsMember = projectData.members.some(
        (memberId) =>
          memberId.toString() === assignee.toString()
      );

      if (!assigneeIsMember) {
        return res.status(400).json({
          message: "Assignee must be a member of the project"
        });
      }
    }

    // Find last issue of this project
    const lastIssue = await Issue.findOne({
      project: projectData._id
    }).sort({ createdAt: -1 });

    let issueNumber = 1;

    if (lastIssue) {
      const parts = lastIssue.issueKey.split("-");

      if (parts.length === 2) {
        const lastNumber = parseInt(parts[1]);

        if (!isNaN(lastNumber)) {
          issueNumber = lastNumber + 1;
        }
      }
    }

    // Generate issue key
    const issueKey = `${projectData.key}-${String(
      issueNumber
    ).padStart(3, "0")}`;

    // Create issue
    const issue = await Issue.create({
      issueKey,
      project: projectData._id,
      title,
      description,
      type: type || "Task",
      priority: priority || "Medium",
      status: "To Do",
      reporter: req.user._id,
      assignee: assignee || null,
      labels: labels || [],
      dueDate
    });

    // Populate references
    const populatedIssue = await Issue.findById(issue._id)
      .populate("project", "name key")
      .populate("reporter", "name email role")
      .populate("assignee", "name email role");

    res.status(201).json({
      message: "Issue created successfully",
      issue: populatedIssue
    });

  } catch (error) {
    console.error("Create Issue Error:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

// GET ALL ISSUES => GET /api/issues

const getIssues = async (req, res) => {
  try {
    const {
      project,
      status,
      priority,
      type,
      assignee,
      search
    } = req.query;

    const filter = {};

    // Filter by project
    if (project) {
      filter.project = project;
    }

    // Filter by status
    if (status) {
      filter.status = status;
    }

    // Filter by priority
    if (priority) {
      filter.priority = priority;
    }

    // Filter by issue type
    if (type) {
      filter.type = type;
    }

    // Filter by assignee
    if (assignee) {
      filter.assignee = assignee;
    }

    // Search by title or issue key
    if (search) {
      filter.$or = [
        {
          title: {
            $regex: search,
            $options: "i"
          }
        },
        {
          issueKey: {
            $regex: search,
            $options: "i"
          }
        }
      ];
    }

    const issues = await Issue.find(filter)
      .populate("project", "name key")
      .populate("reporter", "name email role")
      .populate("assignee", "name email role")
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: issues.length,
      issues
    });

  } catch (error) {
    console.error("Get Issues Error:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};


// GET PROJECT ISSUES => GET /api/issues/project/:projectId

const getProjectIssues = async (req, res) => {
  try {
    const { projectId } = req.params;

    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({
        message: "Project not found"
      });
    }

    const issues = await Issue.find({
      project: projectId
    })
      .populate("project", "name key")
      .populate("reporter", "name email role")
      .populate("assignee", "name email role")
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: issues.length,
      issues
    });

  } catch (error) {
    console.error("Get Project Issues Error:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

// GET SINGLE ISSUE => GET /api/issues/:id

const getIssueById = async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id)
      .populate("project", "name key")
      .populate("reporter", "name email role")
      .populate("assignee", "name email role");

    if (!issue) {
      return res.status(404).json({
        message: "Issue not found"
      });
    }

    res.status(200).json({
      issue
    });

  } catch (error) {
    console.error("Get Issue Error:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};


// UPDATE ISSUE => PUT /api/issues/:id

const updateIssue = async (req, res) => {
  try {
    const {
      title,
      description,
      type,
      priority,
      status,
      assignee,
      labels,
      dueDate
    } = req.body;

    const issue = await Issue.findById(req.params.id);

    if (!issue) {
      return res.status(404).json({
        message: "Issue not found"
      });
    }

    const project = await Project.findById(issue.project);

    if (!project) {
      return res.status(404).json({
        message: "Project not found"
      });
    }

    // Check project membership
    const isMember = project.members.some(
      (memberId) =>
        memberId.toString() === req.user._id.toString()
    );

    if (!isMember) {
      return res.status(403).json({
        message: "You are not a member of this project"
      });
    }

    // Validate assignee
    if (assignee !== undefined && assignee !== null) {
      const assigneeUser = await User.findById(assignee);

      if (!assigneeUser) {
        return res.status(404).json({
          message: "Assignee not found"
        });
      }

      const assigneeIsMember = project.members.some(
        (memberId) =>
          memberId.toString() === assignee.toString()
      );

      if (!assigneeIsMember) {
        return res.status(400).json({
          message: "Assignee must be a project member"
        });
      }
    }

    // Update fields
    if (title !== undefined) {
      issue.title = title;
    }

    if (description !== undefined) {
      issue.description = description;
    }

    if (type !== undefined) {
      issue.type = type;
    }

    if (priority !== undefined) {
      issue.priority = priority;
    }

    if (status !== undefined) {
      issue.status = status;
    }

    if (assignee !== undefined) {
      issue.assignee = assignee;
    }

    if (labels !== undefined) {
      issue.labels = labels;
    }

    if (dueDate !== undefined) {
      issue.dueDate = dueDate;
    }

    await issue.save();

    const updatedIssue = await Issue.findById(issue._id)
      .populate("project", "name key")
      .populate("reporter", "name email role")
      .populate("assignee", "name email role");

    res.status(200).json({
      message: "Issue updated successfully",
      issue: updatedIssue
    });

  } catch (error) {
    console.error("Update Issue Error:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};


// DELETE ISSUE => DELETE /api/issues/:id

const deleteIssue = async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);

    if (!issue) {
      return res.status(404).json({
        message: "Issue not found"
      });
    }

    const project = await Project.findById(issue.project);

    if (!project) {
      return res.status(404).json({
        message: "Project not found"
      });
    }

    // Only project owner can delete
    if (
      project.owner.toString() !==
      req.user._id.toString()
    ) {
      return res.status(403).json({
        message: "Only the project owner can delete issues"
      });
    }

    await issue.deleteOne();

    res.status(200).json({
      message: "Issue deleted successfully"
    });

  } catch (error) {
    console.error("Delete Issue Error:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

// ASSIGN ISSUE => PUT /api/issues/:id/assign

const assignIssue = async (req, res) => {
  try {
    const { assignee } = req.body;

    if (!assignee) {
      return res.status(400).json({
        message: "Assignee ID is required"
      });
    }

    const issue = await Issue.findById(req.params.id);

    if (!issue) {
      return res.status(404).json({
        message: "Issue not found"
      });
    }

    const project = await Project.findById(issue.project);

    if (!project) {
      return res.status(404).json({
        message: "Project not found"
      });
    }

    // Only project owner can assign
    if (
      project.owner.toString() !==
      req.user._id.toString()
    ) {
      return res.status(403).json({
        message: "Only the project owner can assign issues"
      });
    }

    const user = await User.findById(assignee);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // Check project membership
    const isMember = project.members.some(
      (memberId) =>
        memberId.toString() === assignee.toString()
    );

    if (!isMember) {
      return res.status(400).json({
        message: "User is not a member of this project"
      });
    }

    issue.assignee = assignee;

    await issue.save();

    const updatedIssue = await Issue.findById(issue._id)
      .populate("project", "name key")
      .populate("reporter", "name email role")
      .populate("assignee", "name email role");

    res.status(200).json({
      message: "Issue assigned successfully",
      issue: updatedIssue
    });

  } catch (error) {
    console.error("Assign Issue Error:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};


// CHANGE ISSUE STATUS => PUT /api/issues/:id/status

const updateIssueStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = [
      "To Do",
      "In Progress",
      "Done"
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        message: "Invalid status"
      });
    }

    const issue = await Issue.findById(req.params.id);

    if (!issue) {
      return res.status(404).json({
        message: "Issue not found"
      });
    }

    const project = await Project.findById(issue.project);

    if (!project) {
      return res.status(404).json({
        message: "Project not found"
      });
    }

    // Check project membership
    const isMember = project.members.some(
      (memberId) =>
        memberId.toString() === req.user._id.toString()
    );

    if (!isMember) {
      return res.status(403).json({
        message: "You are not a member of this project"
      });
    }

    issue.status = status;

    await issue.save();

    const updatedIssue = await Issue.findById(issue._id)
      .populate("project", "name key")
      .populate("reporter", "name email role")
      .populate("assignee", "name email role");

    res.status(200).json({
      message: "Issue status updated successfully",
      issue: updatedIssue
    });

  } catch (error) {
    console.error("Update Status Error:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};


// CHANGE ISSUE PRIORITY => PUT /api/issues/:id/priority

const updateIssuePriority = async (req, res) => {
  try {
    const { priority } = req.body;

    const allowedPriorities = [
      "Low",
      "Medium",
      "High",
      "Critical"
    ];

    if (!allowedPriorities.includes(priority)) {
      return res.status(400).json({
        message: "Invalid priority"
      });
    }

    const issue = await Issue.findById(req.params.id);

    if (!issue) {
      return res.status(404).json({
        message: "Issue not found"
      });
    }

    const project = await Project.findById(issue.project);

    if (!project) {
      return res.status(404).json({
        message: "Project not found"
      });
    }

    // Check project membership
    const isMember = project.members.some(
      (memberId) =>
        memberId.toString() === req.user._id.toString()
    );

    if (!isMember) {
      return res.status(403).json({
        message: "You are not a member of this project"
      });
    }

    issue.priority = priority;

    await issue.save();

    const updatedIssue = await Issue.findById(issue._id)
      .populate("project", "name key")
      .populate("reporter", "name email role")
      .populate("assignee", "name email role");

    res.status(200).json({
      message: "Issue priority updated successfully",
      issue: updatedIssue
    });

  } catch (error) {
    console.error("Update Priority Error:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

export {
  createIssue,
  getIssues,
  getProjectIssues,
  getIssueById,
  updateIssue,
  deleteIssue,
  assignIssue,
  updateIssueStatus,
  updateIssuePriority
}