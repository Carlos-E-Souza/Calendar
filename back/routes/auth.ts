import { Router } from "express"
import { AuthController } from "../controllers/authController"

export const authRoute = Router()

const authController = new AuthController()

authRoute.post("/", authController.authenticateUser)
