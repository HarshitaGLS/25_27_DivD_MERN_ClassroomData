import express from "express"
import {
  createIssue,
  getIssues,
  getProjectIssues,
  getIssueById,
  updateIssue,
  deleteIssue,
  assignIssue,
  updateIssueStatus,
  updateIssuePriority
} from "../controllers/issueController.js"

import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

// CREATE ISSUE => // POST /api/issues

router.post("/",protect,createIssue)

// GET ALL ISSUES + SEARCH + FILTER => GET /api/issues
router.get( "/", protect, getIssues)

// GET ISSUES OF A PROJECT =>  GET /api/issues/project/:projectId
router.get( "/project/:projectId", protect,getProjectIssues)

// GET SINGLE ISSUE => GET /api/issues/:id

router.get("/:id",protect,getIssueById)


// UPDATE ISSUE => PUT /api/issues/:id
router.put("/:id",protect,updateIssue)

// DELETE ISSUE => DELETE /api/issues/:id
router.delete("/:id",protect,deleteIssue)


// ASSIGN ISSUE => PUT /api/issues/:id/assign
router.put( "/:id/assign",protect, assignIssue)

// CHANGE STATUS => PUT /api/issues/:id/status
router.put("/:id/status",protect,updateIssueStatus)

// CHANGE PRIORITY => PUT /api/issues/:id/priority
router.put( "/:id/priority",protect,updateIssuePriority)

export default router