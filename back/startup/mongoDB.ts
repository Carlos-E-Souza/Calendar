import config from "config"
import mongo from "mongoose"
import { info } from "winston"

export const connectDB = () => {
    mongo
        .connect(config.get("DATABASE_URL"))
        .then(() => info("Connected to MongoDB..."))

    mongo.Promise = global.Promise
}
