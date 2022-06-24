import React, { useCallback, useState } from "react"
import Calendar, { CalendarTileProperties } from "react-calendar"
import { isSameDay } from "../../utils/SameDay"

import "./Calendar.css"
//import "react-calendar/dist/Calendar.css"

interface titleProps {
    date: string
    view: string
}

export const Data = () => {
    const [value, setValue] = useState(new Date())
    const [markedDays, setMarkedDays] = useState([new Date()])

    /* const tileClassName = useCallback(() => {return ({ date, view }:CalendarTileProperties) => {
        // Add class to tiles in month view only
        if (view === 'month') {
            // Check if a date React-Calendar wants to check is on the list of dates to add class to
            if (markedDays?.find(dDate => isSameDay(dDate, date))) {
                return 'day marked';
            }
        }
        return "day normal"
    }}, [markedDays]) */

    const tileClassName = ({ date, view }: CalendarTileProperties) => {
        // Add class to tiles in month view only
        if (view === "month") {
            // Check if a date React-Calendar wants to check is on the list of dates to add class to
            if (markedDays?.find((dDate) => isSameDay(dDate, date))) {
                return "day marked"
            }
        }
        return "day normal"
    }

    const tileContent = ({ date, view }: CalendarTileProperties) => {
        // Add class to tiles in month view only
        if (view === "month") {
            // Check if a date React-Calendar wants to check is on the list of dates to add class to
            if (markedDays.find((dDate) => isSameDay(dDate, date))) {
                return <span>foi</span>
            }
        }
        return null
    }

    return (
        <Calendar
            className="events-calendar"
            value={value}
            tileClassName={tileClassName}
            tileContent={tileContent}
            minDetail="decade"
            showFixedNumberOfWeeks={false}
        />
    )
}
