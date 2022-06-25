import { hash } from "bcrypt"
import { Document } from "mongoose"
import { User } from "../models/userModel"

export interface UserInterface extends Document {
    name: string
    email: string
    password: string
    generateAuthToken: () => string
}

export const createUserDB = async (receivedUser: UserInterface) => {
    const crypted = await hash(receivedUser.password, 10)

    const user = new User({
        ...receivedUser,
        password: crypted,
    })

    const newUser = await user
        .save()
        .then((res) => {
            return res
        })
        .catch((err) => {
            throw err
        })

    return newUser
}

export const getUserDB = async (email: string) => {
    return await User.findOne({ email })
}
