import express from "express"

import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
  addMember,
  removeMember
} from "../controllers/projectController.js"

import { protect } from "../middleware/authMiddleware.js"
import { authorize } from "../middleware/roleMiddleware.js"

const router = express.Router()

// http://localhost:3000/api/projects
// Create project => Manager only
router.post( "/",protect,authorize("Manager"), createProject)
// Get all projects => Any logged-in user
router.get("/",protect, getProjects)
// Get single project => Any logged-in user
router.get("/:id",protect,getProjectById)
// Update project => Manager only
router.put("/:id",protect, authorize("Manager"), updateProject)
// Delete project => Manager only
router.delete("/:id", protect, authorize("Manager"), deleteProject)
// Add member =>  Manager only
router.post("/:id/members", protect, authorize("Manager"), addMember)
// Remove member =>  Manager only
router.delete( "/:id/members/:userId", protect, authorize("Manager"),removeMember)


export default router

