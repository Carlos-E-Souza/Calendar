import { useEffect, useState } from "react"
import { Data } from "../components/Calendar/Calendar"
import { Sidebar } from "../components/Sidebar/Sidebar"
import { EventService } from "../services/eventServices"
import jwtDecode from "jwt-decode"

import "./Events.css"
import { ModalForm } from "../components/EventForm/ModalForm"

const eventService = new EventService()

export interface Event {
    _id: string
    userId: string
    title: string
    description: string
    initDate: Date
    endDate: Date
}

interface User {
    _id: string
    email: string
}

export const Events = () => {
    const [events, setEvents] = useState<Event[]>()
    const [user, setUser] = useState<User>()
    const [isModalVisible, setIsModalVisible] = useState(false)

    useEffect(() => {
        const fun = async () => {
            const jwt = localStorage.getItem("token") || ""
            const user: User = jwtDecode(jwt)
            setUser(user)
            const events = await eventService.getUserEvents(user?._id)
            setEvents(events)
        }
        fun()
    }, [])

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 vw-100">
            {/* {isModalVisible ? (
                <ModalForm closeModal={() => setIsModalVisible(false)} />
            ) : null} */}
            <div className="d-flex w-75 h-75 justify-content-start align-items-center event-container">
                <Data onClick={() => setIsModalVisible(true)} />
                <Sidebar events={events} />
            </div>
        </div>
    )
}
