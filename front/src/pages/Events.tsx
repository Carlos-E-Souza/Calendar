import { Data } from "../components/Calendar/Calendar"
import { Sidebar } from "../components/Sidebar/Sidebar"

import "./Events.css"

export const Events = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 vw-100">
            <div className="d-flex w-75 h-75 justify-content-start align-items-center event-container">
                <Data />
                <Sidebar />
            </div>
        </div>
    )
}
