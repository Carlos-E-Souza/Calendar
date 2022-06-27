import { compare } from "bcrypt"
import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import { getUserDB } from "../services/userService"

interface userAuthInterface {
    email: string
    password: string
}

export class AuthController {
    validateUserAuth = (user: userAuthInterface) => {
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required().min(6),
        })
        return schema.validate(user)
    }

    checkUserInfo = async (receivedUser: userAuthInterface) => {
        const user = await getUserDB(receivedUser.email)

        if (!user) throw new Error("Incorrect email")

        const isPasswordValide = await compare(
            receivedUser.password,
            user.password
        )

        if (!isPasswordValide) throw new Error("Invalid password")

        return user
    }

    authenticateUser = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> => {
        const { error } = this.validateUserAuth(req.body)
        if (error) return res.status(400).json(error.message)

        return await this.checkUserInfo(req.body)
            .then((user) => {
                const userToken = user.generateAuthToken()
                return res.json(userToken)
            })
            .catch((err) => {
                return res.status(404).json(err.message)
            })
    }
}
