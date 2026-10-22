import express from "express"
import { deleteData, getData, getDataById, postData, updateData } from "../controller/userController.js"
const router =  express.Router()

//http://localhost:3000/api
router.post("/",postData)
router.get("/",getData)
router.get("/:id",getDataById)
router.put("/:id",updateData)
router.delete("/:id",deleteData)

export default router