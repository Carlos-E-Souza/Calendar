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
}

export const Input: FC<InputProps> = (props) => {
    const today = new Date()
    return (
        <>
            <label htmlFor={props.id} className={`mb-1 ${props.label_class}`}>
                {props.label}
            </label>
            <input
                {...props}
                min={`${today.getFullYear()}-0${
                    today.getMonth() + 1
                }-${today.getDate()}`}
                className={`input ${props.input_class}`}
                onChange={(e) => props.onChange(e)}
            />
        </>
    )
}
