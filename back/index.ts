import express from "express"
import cors from "cors"
import { info } from "winston"

import { startRoutes } from "./startup/routes"
import { connectDB } from "./startup/mongoDB"
import { logging } from "./startup/logging"
import { startEnvVar } from "./startup/envVariables"

const app = express()

logging()
connectDB()
startRoutes(app)
startEnvVar()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 9000
app.listen(port, () => {
    info(`Listening on ${port}`)
})
