import { ChangeEventHandler, FC } from "react"

interface InputProps {
    id: string
    label: string
    type: string
    name: string
    placeholder: string
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
    className?: string
}

export const Input: FC<InputProps> = (props) => {
    return (
        <div className={"form-group mb-3 " + props.className}>
            <label htmlFor={props.id} className="form-label text-muted">
                {props.label}
            </label>
            <input
                {...props}
                className="form-control input"
                onChange={(e) => props.onChange(e)}
            />
        </div>
    )
}
