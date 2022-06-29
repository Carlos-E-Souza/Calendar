import { isObjectIdOrHexString } from "mongoose"
import { Event } from "../models/eventModel"
import { getUserById } from "./userService"

export interface EventInterface {
    title: string
    description: string
    initDate: string
    initTime: string
    endDate: string
    endTime: string
}

export class EventService {
    getUserEventsDB = async (userId: string) => {
        return await Event.find({ userId }).sort("initDate initTime")
    }

    getEventDB = async (id: string) => {
        return await Event.findById(id)
    }

    createEventDB = async (userId: string, eventData: EventInterface) => {
        if (!isObjectIdOrHexString(userId)) throw new Error("Invalid userId")

        if (!(await getUserById(userId))) throw new Error("User Not Found")

        const event = new Event({ ...eventData, userId })

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

    updateEventDB = async (id: string, newData: EventInterface) => {
        const eventUpdated = await Event.findByIdAndUpdate(id, newData, {
            new: true,
        })
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
