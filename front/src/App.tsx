import { Route, Routes } from "react-router-dom"
import { LoginPage } from "./pages/LoginSignup"
import { Events } from "./pages/Events"

import "./App.css"

function App() {
    return (
        <Routes>
            <Route path="calendar" element={<Events />} />
            <Route path="enter" element={<LoginPage />} />
            <Route path="*" element={<LoginPage />} />
        </Routes>
    )
}

export default App
