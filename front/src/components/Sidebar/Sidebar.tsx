import { FC, useState } from "react"
import { Event } from "../../pages/Events"
import { CreateEventModal } from "../Modal/CreateEvent"
import { UpdateEventModal } from "../Modal/UpdateEvent"
import { EventService } from "../../services/eventServices"
import { CalendarPlus, XCircle, PencilLine } from "phosphor-react"
import "./Sidebar.css"

interface SidebarProps {
    events: Event[] | undefined
}

const defaultEvent = {
    _id: "",
    userId: "",
    title: "",
    description: "",
    initDate: "",
    endDate: "",
    initTime: "",
    endTime: "",
}

const eventService = new EventService()

export const Sidebar: FC<SidebarProps> = ({ events }) => {
    const [isCreateEventVisible, setIsCreateEventVisible] = useState(false)
    const [isUpdateEventVisible, setIsUpdateEventVisible] = useState(false)
    const [targetEvent, setTargetEvent] = useState(defaultEvent)

    const handleOpenUpdateEvent = (eventId: string) => {
        const event =
            events?.find((event) => event._id === eventId) || defaultEvent
        setTargetEvent(event)
        setIsUpdateEventVisible(true)
    }

    const handleDeleteEvent = (eventId: string) => {
        const token = localStorage.getItem("token") || ""
        const res = eventService.deleteEvent(token, eventId)
        window.location.reload()
    }

    return (
        <div className="sidebar">
            <header className="sidebar-header">
                <h1 className="sidebar-title">Schedule</h1>
                <CalendarPlus
                    className="add-task-btn"
                    onClick={() => setIsCreateEventVisible(true)}>
                    +
                </CalendarPlus>
            </header>

            <div className="flex flex-col overflow-y-auto">
                {events?.map((event) => {
                    return (
                        <button
                            key={event._id}
                            id={event._id}
                            className="sidebar-card">
                            <header className="flex justify-between items-center w-full">
                                <span className="text-sm text-gray6">
                                    {`${event.initDate} • ${event.endDate}`}
                                </span>
                                <XCircle
                                    className="icon"
                                    onClick={() => handleDeleteEvent(event._id)}
                                />
                            </header>
                            <span className="card-title">{event.title}</span>
                            <footer className="flex justify-between items-center w-full">
                                <span className="text-sm text-gray6">{`${event.initTime} • ${event.endTime}`}</span>
                                <PencilLine
                                    className="icon"
                                    onClick={() =>
                                        handleOpenUpdateEvent(event._id)
                                    }
                                />
                            </footer>
                        </button>
                    )
                })}
            </div>
            {isCreateEventVisible ? (
                <CreateEventModal
                    closeModal={() => setIsCreateEventVisible(false)}
                    events={events}
                />
            ) : null}
            {isUpdateEventVisible ? (
                <UpdateEventModal
                    event={targetEvent}
                    closeModal={() => setIsUpdateEventVisible(false)}
                />
            ) : null}
        </div>
    )
}
