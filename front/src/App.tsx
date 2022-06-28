import { useState } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { LoginPage } from "./pages/LoginSignup"

import "./App.css"
//import "bootstrap/dist/css/bootstrap.min.css"
import { Events } from "./pages/Events"

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
