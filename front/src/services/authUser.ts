import { api } from "../utils/api"

interface UserData {
    email: string
    password: string
}

export const authUser = async (userData: UserData) => {
    return await api
        .post("/auth", userData)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            return err
        })
}
