import { Schema, model } from "mongoose"
import { sign } from "jsonwebtoken"
import config from "config"
import { UserInterface } from "../services/userService"

export const userSchema = new Schema<UserInterface>({
    name: { type: String, required: true, minlength: 5 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 5 },
})

userSchema.methods.generateAuthToken = function () {
    const token = sign(
        {
            _id: this._id,
            email: this.email,
        },
        config.get("jwtPrivateKey")
    )
    return token
}

export const User = model("user", userSchema)
