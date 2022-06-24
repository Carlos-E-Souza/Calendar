import { FC, useState } from "react"
import { Login } from "../components/Login/Login"
import { Signup } from "../components/Signup/Signup"

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
    const [isLoginPage, setIsLoginPage] = useState<boolean>(true)

    return (
        <div className="d-flex justify-content-center align-items-center vw-100 vh-100">
            {isLoginPage ? (
                <Login goToSingup={() => setIsLoginPage(false)} />
            ) : (
                <Signup goToLogin={() => setIsLoginPage(true)} />
            )}
        </div>
    )
}

export default LoginPage
