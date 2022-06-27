import { Schema, model } from "mongoose"

export const eventSchema = new Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true, minlength: 5 },
    description: { type: String },
    initDate: { type: String, required: true },
    initTime: { type: String, required: true },
    endDate: { type: String, required: true },
    endTime: { type: String, required: true },
})

export const Event = model("event", eventSchema)
