import { Event } from "../pages/Events"

export const validateDateTime = (event: Event, events: Event[]) => {
    if (event.endTime < event.initTime)
        throw new Error("End time is ealier than start time")

    for (let index = 0; index < events.length; index++) {
        const element = events[index]

        if (element.initDate === event.initDate) {
        }
    }
}
