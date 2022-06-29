import { api } from "../utils/api"
import { FormData } from "../components/Modal/CreateEvent"
import { Event } from "../pages/Events"

export class EventService {
    getUserEvents = async (token: string) => {
        const res = await api.get(`/event/user`, {
            headers: { "x-auth-token": token },
        })
        return res.data
    }

    sendEvent = async (token: string, eventData: FormData) => {
        const res = await api.post("/event/create", {
            headers: { "x-auth-token": token },
            data: eventData,
        })
        return res.data
    }

    updateEvent = async (token: string, eventData: Event) => {
        const res = await api.put(`/event/update/${eventData._id}`, {
            headers: { "x-auth-token": token },
            data: eventData,
        })
        return res.data
    }
}
