const winston = require("winston")
const config = require("config")
const { combine, colorize, printf } = winston.format

const customFormat = combine(
    colorize({ level: true }),
    printf((data: { level: any; message: any }) => {
        return `Level:${data.level}\nMessage:${data.message}\n`
    })
)

const logConsole =
    config.get("NODE_ENV") === "development" ? winston.transports.Console : null

export const logging = () => {
    const logger = winston.createLogger({
        format: customFormat,
        transports: [new logConsole()],
        exceptionHandlers: [new logConsole()],
        rejectionHandlers: [new logConsole()],
    })

    winston.add(logger)
    winston.exitOnError = true
}
