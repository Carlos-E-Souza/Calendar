import { Schema, model } from "mongoose"

export const eventSchema = new Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true, minlength: 5 },
    description: { type: String },
    initDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
})

export const Event = model("event", eventSchema)
