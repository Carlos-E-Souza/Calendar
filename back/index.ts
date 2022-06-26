import express from "express"
import cors from "cors"
import { info } from "winston"

import { connectDB } from "./startup/mongoDB"
import { logging } from "./startup/logging"
import { startEnvVar } from "./startup/envVariables"
import { userRoute } from "./routes/user"
import { authRoute } from "./routes/auth"
import { eventRoute } from "./routes/event"

const app = express()

logging()
connectDB()
startEnvVar()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/user", userRoute)
app.use("/auth", authRoute)
app.use("/event", eventRoute)

const port = process.env.PORT || 9000
app.listen(port, () => {
    info(`Listening on ${port}`)
})
