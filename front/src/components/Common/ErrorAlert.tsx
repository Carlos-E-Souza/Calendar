import { FC, MouseEventHandler } from "react"

interface AlertError {
    onClick: MouseEventHandler<HTMLDivElement>
}

export const AlertError: FC<AlertError> = (props) => {
    return <span>error</span>
}
