import express from "express"
import { getProduct } from "../controller/productController.js"
const router = express.Router()
// http://localhost:3000/
router.get("/",getProduct)
router.post("/",(req,res)=>{})
// router.put("/:id")
// router.delete("/:id")
export default router