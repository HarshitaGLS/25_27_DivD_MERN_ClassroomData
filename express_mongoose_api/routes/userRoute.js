import express from "express"
import { getData, getDataById, postData } from "../controller/userController.js"
const router =  express.Router()

//http://localhost:3000/api
router.post("/",postData)
router.get("/",getData)
router.get("/:id",getDataById)


export default router