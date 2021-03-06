import { X } from "phosphor-react"
import { FC, MouseEventHandler, useState } from "react"
import { Event } from "../../pages/Events"
import { EventService } from "../../services/eventServices"
import { Input } from "../Common/Input"

import "./ModalForm.css"

interface UpdateEventProps {
    closeModal: MouseEventHandler<SVGSVGElement | HTMLButtonElement>
    event: Event
}

const eventService = new EventService()

export const UpdateEventModal: FC<UpdateEventProps> = ({
    closeModal,
    event,
}) => {
    const [formEvent, setFormEvent] = useState(event)

    const handleFormChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const property = e.target.name
        setFormEvent({ ...formEvent, [property]: e.target.value })
    }

    const handleFormSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const token = localStorage.getItem("token") || ""
        const updatedEvent = await eventService.updateEvent(token, formEvent)
        window.location.reload()
    }

    const inputs = [
        {
            id: "0",
            label: "Title",
            type: "text",
            name: "title",
            placeholder: "Event Title",
            value: formEvent.title,
            onChange: handleFormChange,
        },
        {
            id: "1",
            label: "Description",
            onChange: handleFormChange,
        },
        {
            id: "2",
            label: "Start Date:",
            type: "date",
            name: "initDate",
            value: formEvent.initDate,
            onChange: handleFormChange,
        },
        {
            id: "3",
            label: "Start Time:",
            type: "time",
            name: "initTime",
            value: formEvent.initTime,
            onChange: handleFormChange,
        },
        {
            id: "4",
            label: "End Date:",
            type: "date",
            name: "endDate",
            value: formEvent.endDate,
            onChange: handleFormChange,
        },
        {
            id: "5",
            label: "End Time:",
            type: "time",
            name: "endTime",
            value: formEvent.endTime,
            onChange: handleFormChange,
        },
    ]

    return (
        <div className="modal">
            <div className="modal-container">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Event</h5>
                        <X className="close-icon" onClick={closeModal} />
                    </div>
                    <div className="modal-body">
                        <form>
                            {inputs.map((input) => {
                                if (input.label === "Description")
                                    return (
                                        <div key={input.id} className="mb-3">
                                            <label htmlFor="event-description">
                                                Description:
                                            </label>
                                            <textarea
                                                className="input bg-gray5"
                                                id="event-description"
                                                name="description"
                                                value={formEvent.description}
                                                onChange={
                                                    handleFormChange
                                                }></textarea>
                                        </div>
                                    )

                                return (
                                    <div key={input.id} className="mb-3">
                                        <Input {...input} />
                                    </div>
                                )
                            })}
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="submit-btn w-1/3 text-black"
                            onClick={handleFormSubmit}>
                            Update Event
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
