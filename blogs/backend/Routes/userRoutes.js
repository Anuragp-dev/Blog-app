import express from "express";
import { login, register } from "../controllers/userCtrl.js";


const router = express.Router();


router.post("/register",register);
router.post("/login",login);



export  {router as userRouter };