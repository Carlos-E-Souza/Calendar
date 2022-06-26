import { isObjectIdOrHexString } from "mongoose"
import { Event } from "../models/eventModel"
import { getUserById } from "./userService"

export interface EventInterface {
    userId: string
    title: string
    description: string
    initDate: String
    endDate: String
}

export class EventService {
    getUserEventsDB = async (userId: string) => {
        return await Event.find({ userId })
    }

    getEventDB = async (id: string) => {
        return await Event.findById(id)
    }

    createEventDB = async (eventData: EventInterface) => {
        if (!isObjectIdOrHexString(eventData.userId))
            throw new Error("Invalid userId")

        if (!(await getUserById(eventData.userId)))
            throw new Error("User Not Found")

        const event = new Event({ ...eventData })

        const newEvent = await event
            .save()
            .then((res) => {
                return res
            })
            .catch((err) => {
                throw err
            })

        return newEvent
    }

    updateEventDB = async (
        id: string,
        { userId, title, description, initDate, endDate }: EventInterface
    ) => {
        const eventUpdated = await Event.findByIdAndUpdate(
            id,
            { userId, title, description, initDate, endDate },
            { new: true }
        )
            .then((res) => {
                return res
            })
            .catch((err) => {
                throw err
            })

        return eventUpdated
    }

    deleteEventDB = async (id: string) => {
        const deletedEvent = await Event.findByIdAndDelete(id)
            .then((res) => {
                return res
            })
            .catch((err) => {
                throw err
            })

        return deletedEvent
    }
}
