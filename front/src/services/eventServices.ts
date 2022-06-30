import { api } from "../utils/api"
import { FormData } from "../components/Modal/CreateEvent"
import { Event } from "../pages/Events"

export class EventService {
    getUserEvents = async (token: string) => {
        const res = await api.get(`/event/user`, {
            headers: { "x-auth-token": token },
        })
        return res
    }

    sendEvent = async (token: string, eventData: FormData) => {
        const res = await api.post("/event/create", eventData, {
            headers: { "x-auth-token": token },
        })
        return res
    }

    updateEvent = async (token: string, eventData: Event) => {
        const res = await api.put(`/event/update/${eventData._id}`, eventData, {
            headers: { "x-auth-token": token },
        })
        return res
    }

    deleteEvent = async (token: string, eventId: string) => {
        const res = await api.delete(`/event/delete/${eventId}`, {
            headers: { "x-auth-token": token },
        })

        return res
    }
}
