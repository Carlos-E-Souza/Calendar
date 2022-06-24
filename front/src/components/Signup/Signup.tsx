import { ChangeEvent, FC, useState } from "react"
import { Button, Form } from "react-bootstrap"
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

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const property = e.target.name
        setNewUser({ ...newUser, [property]: e.target.value })
    }

    const handleSignupSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()

        console.log(newUser)
    }

    return (
        <div className="form-container w-50">
            <h1 className="form-title">Create an Account</h1>
            <span className="text-muted mb-3 d-block">
                Please enter your details
            </span>
            <Form className="d-flex flex-wrap justify-content-between">
                <Form.Group className="mb-2 form-group" controlId="signupName">
                    <Form.Label className="text-muted">Full Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Your Name"
                        className="input"
                        name="name"
                        value={newUser.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-2 form-group" controlId="signupEmail">
                    <Form.Label className="text-muted">
                        Email Address
                    </Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        className="input"
                        name="email"
                        value={newUser.email}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group
                    className="mb-3 form-group"
                    controlId="signupPassword">
                    <Form.Label className="text-muted">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        className="input"
                        name="password"
                        value={newUser.password}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group
                    className="mb-3 form-group"
                    controlId="confirmPassword">
                    <Form.Label className="text-muted">
                        Confirm Password
                    </Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        className="input"
                        name="confirmPassword"
                        value={newUser.confirmPassword}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                    className="w-100"
                    onClick={(e) => handleSignupSubmit(e)}>
                    Sign-up
                </Button>
            </Form>
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
