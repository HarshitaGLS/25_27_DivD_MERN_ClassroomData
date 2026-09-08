import express from "express"
import { addUser, deleteUser, dummy, getUserById, getUsers, updateUser} from "../controller/indexController.js"
const router =  express.Router()

router.get("/",dummy)
//http://localhost:3000/user - post 
router.post("/user",addUser)
router.get("/users",getUsers)
router.get("/user/:id",getUserById)
router.put("/user/:id",updateUser)
router.delete("/user/:id",deleteUser)

export default router