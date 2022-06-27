import React, { ChangeEvent, FC, useState } from "react"
import { useNavigate } from "react-router-dom"
import { authUser } from "../../services/authUser"
import { Input } from "../Common/Input"

import "./Login.css"

interface LoginProps {
    goToSingup: Function
}

export interface UserInterface {
    email: string
    password: string
}

export const Login: FC<LoginProps> = (props) => {
    const [user, setUser] = useState<UserInterface>({ email: "", password: "" })
    const navigate = useNavigate()

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const property = e.target.name
        setUser({ ...user, [property]: e.target.value })
    }

    const handleLoginSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()

        const userToken = await authUser(user)
        localStorage.setItem("token", userToken)

        navigate("/calendar")
    }

    const inputs = [
        {
            key: 1,
            id: "loginEmail",
            label: "Email Address",
            type: "text",
            name: "email",
            placeholder: "Enter Email",
            value: user.email,
            onChange: handleInputChange,
        },
        {
            key: 2,
            id: "loginPassword",
            label: "Password",
            type: "password",
            name: "password",
            placeholder: "Password",
            value: user.password,
            onChange: handleInputChange,
        },
    ]

    return (
        <div className="form-container">
            <h1 className="form-title">Welcome Back</h1>
            <span className="text-muted mb-3 d-block">
                Please enter your details
            </span>

            <form className="form">
                {inputs.map((inp) => {
                    return <Input {...inp} />
                })}

                <button
                    className="btn btn-primary w-100 mt-2"
                    type="submit"
                    onClick={(e) => handleLoginSubmit(e)}>
                    Login
                </button>
            </form>

            <span className="text-muted text-center mt-3">
                Don't have an account?
                <span
                    className="text-primary text-decoration-none change-form-link"
                    onClick={() => props.goToSingup()}>
                    Sign-up
                </span>
            </span>
        </div>
    )
}
