import { Request, Response, NextFunction } from "express"
import { JwtPayload, verify } from "jsonwebtoken"
import config from "config"

declare global {
    namespace Express {
        interface Request {
            user: JwtPayload | string | any
        }
    }
}

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.header("x-auth-token")
    if (!token) return res.status(401).json("Acess denied. No token provided.")

    try {
        const decodeData = verify(token, config.get("jwtPrivateKey"))
        req.user = decodeData
        next()
    } catch (err) {
        return res.status(400).json("Invalid token.")
    }
}
