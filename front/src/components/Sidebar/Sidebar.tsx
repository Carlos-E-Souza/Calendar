import { FC, useState } from "react"
import { Event } from "../../pages/Events"
import { CreateEventModal } from "../Modal/CreateEvent"
import { UpdateEventModal } from "../Modal/UpdateEvent"
import "./Sidebar.css"

interface SidebarProps {
    events: Event[] | undefined
}

export const Sidebar: FC<SidebarProps> = ({ events }) => {
    const [isCreateEventVisible, setIsCreateEventVisible] = useState(false)
    const [isUpdateEventVisible, setIsUpdateEventVisible] = useState(false)

    return (
        <div className="sidebar">
            <header className="sidebar-header">
                <h1 className="sidebar-title">Schedule</h1>
                <button
                    className="add-task-btn"
                    onClick={() => setIsCreateEventVisible(true)}>
                    +
                </button>
            </header>

            <div className="flex flex-col overflow-y-auto">
                {events?.map((event) => {
                    return (
                        <button key={event._id} className="sidebar-card">
                            <span className="text-sm text-muted">
                                {`${event.initDate} • ${event.endDate}`}
                            </span>
                            <span className="card-title">{event.title}</span>
                            <span className="text-sm text-muted">{`${event.initTime} • ${event.endTime}`}</span>
                            {isUpdateEventVisible ? (
                                <UpdateEventModal
                                    event={event}
                                    closeModal={() =>
                                        setIsUpdateEventVisible(false)
                                    }
                                />
                            ) : null}
                        </button>
                    )
                })}
            </div>
            {isCreateEventVisible ? (
                <CreateEventModal
                    closeModal={() => setIsCreateEventVisible(false)}
                />
            ) : null}
        </div>
    )
}
