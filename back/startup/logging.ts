import winston from "winston"
const { combine, colorize, printf } = winston.format

const customFormat = combine(
    colorize({ level: true }),
    printf((data: { level: any; message: any }) => {
        return `Level:${data.level}\nMessage:${data.message}\n`
    })
)

const logConsole = winston.transports.Console

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
