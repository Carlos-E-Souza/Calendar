import { api } from "../utils/api"

export class EventService {
    getUserEvents = async (userId: string | undefined) => {
        const res = await api.get(`/event/user/${userId}`)
        return res.data
    }
}
