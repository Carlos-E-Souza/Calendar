import { api } from "../utils/api"

interface UserData {
    name: string
    email: string
    password: string
}

export const registerUser = async (userData: UserData) => {
    return await api.post("/user/register", userData)
}
