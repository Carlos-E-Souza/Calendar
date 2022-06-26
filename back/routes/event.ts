import { Router } from "express"
import { EventController } from "../controllers/eventController"

export const eventRoute = Router()

const eventController = new EventController()

eventRoute.get("/:userId", eventController.getUserEvents)

eventRoute.get("/:id", eventController.getEvent)

eventRoute.post("/create", eventController.createEvent)

eventRoute.put("/update/:id", eventController.updateEvent)

eventRoute.delete("/delete/:id", eventController.deleteEvent)
