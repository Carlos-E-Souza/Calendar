import { NextFunction, Request, Response } from "express"
import { JwtPayload } from "jsonwebtoken"
import { EventService } from "../services/eventService"

declare global {
    namespace Express {
        interface Request {
            user: JwtPayload | string | any
        }
    }
}

const eventService = new EventService()

export class EventController {
    getUserEvents = async (req: Request, res: Response): Promise<Response> => {
        const userEvents = await eventService.getUserEventsDB(req.user._id)
        return res.json(userEvents)
    }

    getEvent = async (req: Request, res: Response): Promise<Response> => {
        const event = await eventService.getEventDB(req.params.id)
        return res.json(event)
    }

    createEvent = async (req: Request, res: Response): Promise<Response> => {
        return await eventService
            .createEventDB(req.user._id, req.body)
            .then((createdEvent) => {
                return res.json(createdEvent)
            })
            .catch((err) => {
                return res.status(400).json(err.message)
            })
    }

    updateEvent = async (req: Request, res: Response): Promise<Response> => {
        return await eventService
            .updateEventDB(req.params.id, req.body)
            .then((updatedService) => {
                return res.json(updatedService)
            })
            .catch((err) => {
                return res.status(400).json(err.message)
            })
    }

    deleteEvent = async (req: Request, res: Response): Promise<Response> => {
        return await eventService
            .deleteEventDB(req.params.id)
            .then((deletedEvent) => {
                return res.json(deletedEvent)
            })
            .catch((err) => {
                return res.status(400).json(err.message)
            })
    }
}
