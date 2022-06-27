import { FC, MouseEventHandler } from "react"
import { Alert } from "react-bootstrap"

interface AlertError {
    onClick: MouseEventHandler<HTMLDivElement>
}

export const AlertError: FC<AlertError> = (props) => {
    return (
        <Alert variant="danger" onClick={props.onClick} dismissible>
            <Alert.Heading>Password doesn't match</Alert.Heading>
        </Alert>
    )
}
