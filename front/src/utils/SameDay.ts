import { differenceInCalendarDays } from "date-fns"

export const isSameDay = (a: Date, b: Date) => {
    return differenceInCalendarDays(a, b) === 0
}
