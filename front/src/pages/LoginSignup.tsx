import { FC, useState } from "react"
import { Login } from "../components/Login/Login"
import { Signup } from "../components/Signup/Signup"

import "./Pages.css"

interface LoginPageProps {}

export const LoginPage: FC<LoginPageProps> = () => {
    const [isLoginPage, setIsLoginPage] = useState<boolean>(true)

    return (
        <div className="page-container">
            {isLoginPage ? (
                <Login goToSingup={() => setIsLoginPage(false)} />
            ) : (
                <Signup goToLogin={() => setIsLoginPage(true)} />
            )}
        </div>
    )
}
