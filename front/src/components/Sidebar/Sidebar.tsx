import { FC, useState } from "react"
import { Event } from "../../pages/Events"
import { ModalForm } from "../EventForm/ModalForm"
import "./Sidebar.css"

interface SidebarProps {
    events: Event[] | undefined
}

export const Sidebar: FC<SidebarProps> = ({ events }) => {
    const [isModalVisible, setIsModalVisible] = useState(false)

    return (
        <div className="sidebar d-flex flex-column h-100">
            <header className="d-flex justify-content-between align-items-center mb-2">
                <h1 className="sidebar-title">Schedule</h1>
                <button
                    className="add-task-btn btn"
                    onClick={() => setIsModalVisible(true)}>
                    +
                </button>
            </header>

            <div className="d-flex flex-column">
                {events?.map((event) => {
                    return (
                        <button key={event._id} className="sidebar-card">
                            <span className="text-sm text-muted">
                                {event.initDate.toString()}
                            </span>
                            <span className="text-lg text-white">
                                {event.title}
                            </span>
                            <span className="text-sm text-muted">{`${event.initDate.toString()} - ${event.endDate.toString()}`}</span>
                        </button>
                    )
                })}
            </div>
            {isModalVisible ? (
                <ModalForm closeModal={() => setIsModalVisible(false)} />
            ) : null}
        </div>
    )
}
