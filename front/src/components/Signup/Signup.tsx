import { ChangeEvent, FC, useState } from "react"
import { registerUser } from "../../services/registerUser"
import { AlertError } from "../Common/ErrorAlert"
import { Input } from "../Common/Input"
import { UserInterface } from "../Login/Login"

import "./Signup.css"

interface SignupProps {
    goToLogin: Function
}

interface newUserInterface extends UserInterface {
    name: string
    confirmPassword: string
}

export const Signup: FC<SignupProps> = ({ goToLogin }) => {
    const [newUser, setNewUser] = useState<newUserInterface>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [isAlertVisible, setIsAlertVisible] = useState(false)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const property = e.target.name
        setNewUser({ ...newUser, [property]: e.target.value })
    }

    const handleSignupSubmit = async (
        e: React.FormEvent<HTMLButtonElement>
    ) => {
        e.preventDefault()

        const { name, email, password, confirmPassword } = newUser

        if (password !== confirmPassword) return setIsAlertVisible(true)

        const registered = await registerUser({
            name,
            email,
            password,
        })
    }

    const inputs = [
        {
            key: 1,
            id: "signupName",
            label: "Full Name",
            type: "text",
            name: "name",
            placeholder: "Your Name",
            value: newUser.name,
            onChange: handleInputChange,
        },
        {
            key: 2,
            id: "signupEmail",
            label: "Email Address",
            type: "email",
            name: "email",
            placeholder: "Enter Email",
            value: newUser.email,
            onChange: handleInputChange,
        },
        {
            key: 3,
            id: "signupPassword",
            label: "Password",
            type: "password",
            name: "password",
            placeholder: "Password",
            value: newUser.password,
            onChange: handleInputChange,
        },
        {
            key: 4,
            id: "confirmPassword",
            label: "Confirm Password",
            type: "password",
            name: "confirmPassword",
            placeholder: "Password",
            value: newUser.confirmPassword,
            onChange: handleInputChange,
        },
    ]

    return (
        <div className="form-container w-50">
            {isAlertVisible && (
                <AlertError onClick={() => setIsAlertVisible(false)} />
            )}
            <h1 className="form-title">Create an Account</h1>
            <span className="text-muted mb-3 d-block">
                Please enter your details
            </span>
            <form className="form d-flex flex-wrap justify-content-between">
                {inputs.map((inp) => {
                    return (
                        <div
                            key={inp.id}
                            className="group-form form-group mb-3">
                            <Input {...inp} />
                        </div>
                    )
                })}

                <button
                    type="submit"
                    className="btn btn-primary w-100"
                    onClick={(e) => handleSignupSubmit(e)}>
                    Sign-Up
                </button>
            </form>
            <span className="text-muted text-center mt-3">
                Already have an account?
                <span
                    className="text-primary text-decoration-none change-form-link"
                    onClick={() => goToLogin()}>
                    Login
                </span>
            </span>
        </div>
    )
}
