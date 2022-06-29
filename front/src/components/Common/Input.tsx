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
    labelClass?: string
    inputClass?: string
}

export const Input: FC<InputProps> = (props) => {
    const today = new Date()
    return (
        <>
            <label
                htmlFor={props.id}
                className={
                    (props.labelClass && props.labelClass) || "mb-1 text-muted"
                }>
                {props.label}
            </label>
            <input
                {...props}
                min={`${today.getFullYear()}-0${
                    today.getMonth() + 1
                }-${today.getDate()}`}
                className={(props.inputClass && props.inputClass) || "input"}
                onChange={(e) => props.onChange(e)}
            />
        </>
    )
}
