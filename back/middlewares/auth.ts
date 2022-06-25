import { Request, Response, NextFunction } from "express"
import { JwtPayload, verify } from "jsonwebtoken"
import { get } from "config"

interface newReqInterface extends Request {
    user: JwtPayload | string
}

export const authMiddleware = (
    req: newReqInterface,
    res: Response,
    next: NextFunction
) => {
    const token = req.header("x-auth-token")
    if (!token) return res.status(401).json("Acess denied. No token provided.")

    try {
        const decodeData = verify(token, get("jwtPrivateKey"))
        req.user = decodeData
        next()
    } catch (err) {
        return res.status(400).json("Invalid token.")
    }
}
