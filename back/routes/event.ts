import { Router } from "express"
import { EventController } from "../controllers/eventController"
import { authMiddleware } from "../middlewares/auth"

export const eventRoute = Router()

const eventController = new EventController()

eventRoute.use(authMiddleware)

eventRoute.get("/user", eventController.getUserEvents)

eventRoute.get("/:id", eventController.getEvent)

eventRoute.post("/create", eventController.createEvent)

eventRoute.put("/update/:id", eventController.updateEvent)

eventRoute.delete("/delete/:id", eventController.deleteEvent)
