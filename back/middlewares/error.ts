import { Request, Response, NextFunction } from "express"
import { Error } from "mongoose"
import { error } from "winston"

export const handleErrorMW = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    error(err.message, err)

    return res.status(500).json("Something went wrong")
}
