import { ChangeEventHandler, FC } from "react"

import "./Input.css"

interface InputProps {
    id?: string
    label?: string
    type?: string
    name?: string
    placeholder?: string
    value?: string
    onChange: ChangeEventHandler<HTMLInputElement>
    label_class?: string
    input_class?: string
    min?: string
}

export const Input: FC<InputProps> = (props) => {
    return (
        <>
            <label htmlFor={props.id} className={`mb-1 ${props.label_class}`}>
                {props.label}
            </label>
            <input
                {...props}
                className={`input ${props.input_class}`}
                onChange={(e) => props.onChange(e)}
            />
        </>
    )
}
