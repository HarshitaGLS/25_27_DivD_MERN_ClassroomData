import Comment from "../models/Comment.js"
import Issue from "../models/Issue.js"
import Project from "../models/Project.js"


// ADD COMMENT => POST /api/comments
const addComment = async (req, res) => {
  try {
    const { issue, comment } = req.body

    if (!issue || !comment) {
      return res.status(400).json({
        message: "Issue and comment are required"
      })
    }

    // Find issue
    const issueData = await Issue.findById(issue)

    if (!issueData) {
      return res.status(404).json({
        message: "Issue not found"
      })
    }

    // Find project
    const project = await Project.findById(issueData.project)

    if (!project) {
      return res.status(404).json({
        message: "Project not found"
      })
    }

    // Check whether logged-in user is project member
    const isMember = project.members.some(
      (memberId) =>
        memberId.toString() === req.user._id.toString()
    )

    if (!isMember) {
      return res.status(403).json({
        message: "You are not a member of this project"
      })
    }

    // Create comment
    const newComment = await Comment.create({
      issue: issueData._id,
      user: req.user._id,
      comment
    })

    // Populate user details
    const populatedComment = await Comment.findById(
      newComment._id
    ).populate("user", "name email role")

    res.status(201).json({
      message: "Comment added successfully",
      comment: populatedComment
    })
  } catch (error) {
    console.error("Add Comment Error:", error)

    res.status(500).json({
      message: "Server error",
      error: error.message
    })
  }
}

// GET COMMENTS FOR AN ISSUE => GET /api/comments/issue/:issueId
const getIssueComments = async (req, res) => {
  try {
    const { issueId } = req.params

    // Check issue
    const issue = await Issue.findById(issueId)

    if (!issue) {
      return res.status(404).json({
        message: "Issue not found"
      })
    }

    // Check project
    const project = await Project.findById(issue.project)

    if (!project) {
      return res.status(404).json({
        message: "Project not found"
      })
    }

    // Check project membership
    const isMember = project.members.some(
      (memberId) =>
        memberId.toString() === req.user._id.toString()
    )

    if (!isMember) {
      return res.status(403).json({
        message: "You are not a member of this project"
      })
    }

    const comments = await Comment.find({
      issue: issueId
    })
      .populate("user", "name email role")
      .sort({ createdAt: 1 })

    res.status(200).json({
      count: comments.length,
      comments
    })
  } catch (error) {
    console.error("Get Comments Error:", error)

    res.status(500).json({
      message: "Server error",
      error: error.message
    })
  }
}

// UPDATE COMMENT => PUT /api/comments/:id
const updateComment = async (req, res) => {
  try {
    const { comment } = req.body

    if (!comment) {
      return res.status(400).json({
        message: "Comment is required"
      })
    }

    const existingComment = await Comment.findById(
      req.params.id
    )

    if (!existingComment) {
      return res.status(404).json({
        message: "Comment not found"
      })
    }

    // Only comment owner can edit
    if (
      existingComment.user.toString() !==
      req.user._id.toString()
    ) {
      return res.status(403).json({
        message: "You can only edit your own comments"
      })
    }

    existingComment.comment = comment

    await existingComment.save()

    const updatedComment = await Comment.findById(
      existingComment._id
    ).populate("user", "name email role")

    res.status(200).json({
      message: "Comment updated successfully",
      comment: updatedComment
    })
  } catch (error) {
    console.error("Update Comment Error:", error)

    res.status(500).json({
      message: "Server error",
      error: error.message
    })
  }
}

// DELETE COMMENT => DELETE /api/comments/:id
const deleteComment = async (req, res) => {
  try {
    const existingComment = await Comment.findById(
      req.params.id
    )

    if (!existingComment) {
      return res.status(404).json({
        message: "Comment not found"
      })
    }

    // Find issue
    const issue = await Issue.findById(
      existingComment.issue
    )

    if (!issue) {
      return res.status(404).json({
        message: "Issue not found"
      })
    }

    // Find project
    const project = await Project.findById(issue.project)

    if (!project) {
      return res.status(404).json({
        message: "Project not found"
      })
    }

    const isOwner =
      existingComment.user.toString() ===
      req.user._id.toString()

    const isProjectOwner =
      project.owner.toString() ===
      req.user._id.toString()

    // Comment owner OR project owner can delete
    if (!isOwner && !isProjectOwner) {
      return res.status(403).json({
        message:
          "You can only delete your own comments or comments in your project"
      })
    }

    await existingComment.deleteOne()

    res.status(200).json({
      message: "Comment deleted successfully"
    })
  } catch (error) {
    console.error("Delete Comment Error:", error)

    res.status(500).json({
      message: "Server error",
      error: error.message
    })
  }
}

export {
  addComment,
  getIssueComments,
  updateComment,
  deleteComment
}