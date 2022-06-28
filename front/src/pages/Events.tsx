import { createContext, useContext, useEffect, useState } from "react"
import { Data } from "../components/Calendar/Calendar"
import { Sidebar } from "../components/Sidebar/Sidebar"
import { EventService } from "../services/eventServices"
import jwtDecode from "jwt-decode"

import "./Pages.css"

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
const some = {
    user: { _id: "", email: "" },
}

export type UserId = {
    copy: string
    setCopy: (c: string) => void
}

export const UserId = createContext<UserId>({
    copy: "",
    setCopy: () => {},
})

export const useUserId = () => useContext(UserId)

export const Events = () => {
    const [events, setEvents] = useState<Event[]>()
    const [user, setUser] = useState<User>({ _id: "", email: "" })
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [copy, setCopy] = useState<string>("")

    useEffect(() => {
        const fun = async () => {
            const jwt = localStorage.getItem("token") || ""
            const user: User = jwtDecode(jwt)
            setUser(user)
            const events = await eventService.getUserEvents(user?._id)
            setEvents(events)
            setCopy(user._id)
        }
        fun()
    }, [])

    return (
        <UserId.Provider value={{ copy, setCopy }}>
            <div className="page-container">
                <div className="event-container">
                    <Data />

                    <Sidebar events={events} user={user} />
                </div>
            </div>
        </UserId.Provider>
    )
}
