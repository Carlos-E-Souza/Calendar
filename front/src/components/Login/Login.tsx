import React, { ChangeEvent, FC, MouseEventHandler, useState } from "react"
import { Button, Form, FormControl, FormControlProps } from "react-bootstrap"

import "./Login.css"

interface LoginProps {
    goToSingup: Function
}

export interface UserInterface {
    email: string
    password: string
}

export const Login: FC<LoginProps> = ({ goToSingup }) => {
    const [user, setUser] = useState<UserInterface>({ email: "", password: "" })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const property = e.target.name
        setUser({ ...user, [property]: e.target.value })
    }

    const handleLoginSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()

        console.log(user)
    }

    return (
        <div className="form-container">
            <h1 className="form-title">Welcome Back</h1>
            <span className="text-muted mb-3 d-block">
                Please enter your details
            </span>
            <Form>
                <Form.Group className="mb-2" controlId="loginEmail">
                    <Form.Label className="text-muted">
                        Email address
                    </Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        className="input"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="loginPassword">
                    <Form.Label className="text-muted">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        className="input"
                        name="password"
                        value={user.password}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                    className="w-100"
                    onClick={(e) => handleLoginSubmit(e)}>
                    Login
                </Button>
            </Form>
            <span className="text-muted text-center mt-3">
                Don't have an account?
                <span
                    className="text-primary text-decoration-none change-form-link"
                    onClick={() => goToSingup()}>
                    Sign-up
                </span>
            </span>
        </div>
    )
}
