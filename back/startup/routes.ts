import { userRoute } from "../routes/user"
import { authRoute } from "../routes/auth"
import { Application } from "express"

export const startRoutes = (app: Application) => {
    app.use(userRoute)
    app.use(authRoute)
}
