import { Router } from "express"
import { UserController } from "../controllers/userController"

export const userRoute = Router()

const userController = new UserController()

userRoute.post("/register", userController.createUser)
