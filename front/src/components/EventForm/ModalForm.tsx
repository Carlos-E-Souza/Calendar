import { ChangeEventHandler, FC, MouseEventHandler, useState } from "react"

import "./ModalForm.css"

interface ModalFormProps {
    closeModal: MouseEventHandler<HTMLButtonElement>
}

interface FormData {
    title: string
    description: string
    initDate: string
    endDate: string
    initTime: string
    endTime: string
}

export const ModalForm: FC<ModalFormProps> = ({ closeModal }) => {
    const [formData, setFormData] = useState<FormData>({
        title: "",
        description: "",
        initDate: "",
        endDate: "",
        initTime: "",
        endTime: "",
    })

    const handleFormChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const property = e.target.name
        setFormData({ ...formData, [property]: e.target.value })
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
    }

    const inputs = [
        {
            id: "0",
            label: "Title",
            type: "text",
            name: "title",
            placeholder: "Event Title",
            value: formData.title,
            onChange: handleFormChange,
            className: "",
        },
    ]
    return (
        <div className="modal d-flex">
            <div className="modal-dialog">
                <div className="modal-content text-dark">
                    <div className="modal-header">
                        <h5 className="modal-title">Add Event</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label
                                    htmlFor="event-title"
                                    className="col-form-label">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="event-title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="event-description"
                                    className="col-form-label">
                                    Description:
                                </label>
                                <textarea
                                    className="form-control"
                                    id="event-description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleFormChange}></textarea>
                            </div>
                            <div className="mb-3">
                                <label
                                    className="col-form-label"
                                    htmlFor="init-date">
                                    Event Start Date:
                                </label>
                                <input
                                    type="date"
                                    name="initDate"
                                    id="init-date"
                                    value={formData.initDate}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    className="col-form-label"
                                    htmlFor="init-time">
                                    Event Start Time:
                                </label>
                                <input
                                    type="time"
                                    name="initTime"
                                    id="init-time"
                                    value={formData.initTime}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    className="col-form-label"
                                    htmlFor="end-date">
                                    Event End Date:
                                </label>
                                <input
                                    type="date"
                                    name="endDate"
                                    id="end-date"
                                    value={formData.endDate}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    className="col-form-label"
                                    htmlFor="end-time">
                                    Event End Time:
                                </label>
                                <input
                                    type="time"
                                    name="endTime"
                                    id="end-time"
                                    value={formData.endTime}
                                    onChange={handleFormChange}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={closeModal}>
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleFormSubmit}>
                            Add Event
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
