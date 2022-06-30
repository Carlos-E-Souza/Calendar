import { useEffect, useState } from "react"
import { ViewCalendar } from "../components/Calendar/Calendar"
import { Sidebar } from "../components/Sidebar/Sidebar"
import { EventService } from "../services/eventServices"

import "./Pages.css"

const eventService = new EventService()

export interface Event {
    _id: string
    userId: string
    title: string
    description: string
    initDate: string
    endDate: string
    initTime: string
    endTime: string
}

export const Events = () => {
    const [events, setEvents] = useState<Event[]>([])

    useEffect(() => {
        const fun = async () => {
            const token = localStorage.getItem("token") || ""
            const events = await eventService.getUserEvents(token)
            setEvents(events.data)
        }
        fun()
    }, [])

    return (
        <div className="page-container">
            <div className="event-container">
                <ViewCalendar events={events} />

                <Sidebar events={events} />
            </div>
        </div>
    )
}
