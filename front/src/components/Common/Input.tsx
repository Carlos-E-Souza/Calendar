import { ChangeEventHandler, FC } from "react"

interface InputProps {
    id: string
    label: string
    type: string
    name: string
    placeholder?: string
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
    labelClass?: string
    inputClass?: string
}

export const Input: FC<InputProps> = (props) => {
    return (
        <>
            <label htmlFor={props.id} className="form-label text-muted">
                {props.label}
            </label>
            <input
                {...props}
                className="form-control input"
                onChange={(e) => props.onChange(e)}
            />
        </>
    )
}
