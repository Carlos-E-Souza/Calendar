import React, { ChangeEvent, FC, useState } from "react"
import { useNavigate } from "react-router-dom"
import { authUser } from "../../services/authUser"
import { Input } from "../Common/Input"

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

        await authUser(user)
            .then((res) => {
                localStorage.setItem("token", res)
                navigate("/calendar")
            })
            .catch((err) => {
                window.location.reload()
            })
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
            label_class: "text-gray6",
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
            label_class: "text-gray6",
        },
    ]

    return (
        <div className="form-container sm:w-1/3">
            <h1 className="form-title">Welcome Back</h1>
            <span className="text-gray6 mb-3 block">
                Please enter your details
            </span>

            <form>
                {inputs.map((inp) => {
                    return (
                        <div className="mb-3" key={inp.id}>
                            <Input {...inp} />
                        </div>
                    )
                })}

                <button
                    className="submit-btn"
                    type="submit"
                    onClick={(e) => handleLoginSubmit(e)}>
                    Login
                </button>
            </form>

            <span className="text-gray6 text-center mt-3">
                Don't have an account?
                <span
                    className="text-blue-700 hover:cursor-pointer"
                    onClick={() => props.goToSingup()}>
                    Sign-up
                </span>
            </span>
        </div>
    )
}
