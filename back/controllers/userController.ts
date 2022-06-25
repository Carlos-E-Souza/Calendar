import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import { createUserDB, getUserDB, UserInterface } from "../services/userService"

export class UserController {
    validateUser = (user: UserInterface) => {
        const schema = Joi.object({
            name: Joi.string().required().min(5),
            email: Joi.string().email().required(),
            password: Joi.string().required().min(5),
        })
        return schema.validate(user)
    }

    userExists = async (user: UserInterface) => {
        return await getUserDB(user.email)
    }

    createUser = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> => {
        const { error } = this.validateUser(req.body)
        if (error) return res.status(400).json(error.message)

        const userExist = await this.userExists(req.body)

        if (userExist) {
            return res.status(400).json("User already exists")
        }

        const createdUser = await createUserDB(req.body)

        const userToken = createdUser.generateAuthToken()

        const { _id, name, email } = createdUser

        return res.header("x-auth-token", userToken).json({ _id, name, email })
    }
}
