import { FC, useState } from "react"
import Calendar, { CalendarTileProperties } from "react-calendar"
import { isSameDay } from "../../utils/SameDay"
import { Event } from "../../pages/Events"

import "./Calendar.css"
import { addHours } from "date-fns"

interface CalendarProps {
    events: Event[]
}

export const ViewCalendar: FC<CalendarProps> = ({ events }) => {
    const [value, setValue] = useState(new Date())

    const tileClassName = ({ date, view }: CalendarTileProperties) => {
        // Add class to tiles in month view only
        if (view === "month") {
            // Check if a date React-Calendar wants to check is on the list of dates to add class to
            if (
                events?.find((dDate) =>
                    isSameDay(addHours(new Date(dDate.initDate), 3), date)
                )
            ) {
                return "day-marked"
            }
        }
        return "day"
    }

    return (
        <Calendar
            className="events-calendar"
            value={value}
            tileClassName={tileClassName}
            minDetail="decade"
            showFixedNumberOfWeeks={false}
        />
    )
}
