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
            label_class: "text-gray6",
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
            label_class: "text-gray6",
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
            label_class: "text-gray6",
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
            label_class: "text-gray6",
        },
    ]

    return (
        <div className="form-container">
            {isAlertVisible && (
                <AlertError onClick={() => setIsAlertVisible(false)} />
            )}
            <h1 className="form-title">Create an Account</h1>
            <span className="form-desc">Please enter your details</span>
            <form className="signup-form">
                {inputs.map((inp) => {
                    return (
                        <div key={inp.id} className="w-5/12 mb-4">
                            <Input {...inp} />
                        </div>
                    )
                })}

                <button
                    type="submit"
                    className="submit-btn"
                    onClick={(e) => handleSignupSubmit(e)}>
                    Sign-Up
                </button>
            </form>
            <span className="text-muted text-center mt-3">
                Already have an account?
                <span
                    className="text-blue-700 hover:cursor-pointer"
                    onClick={() => goToLogin()}>
                    Login
                </span>
            </span>
        </div>
    )
}
