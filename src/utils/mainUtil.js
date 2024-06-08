import { differenceInDays, differenceInHours, differenceInMinutes } from "date-fns";

export const dataConverter = (name, value) => {
    const data = {
        target: {
            name: name,
            value: value,
        },
    }
    return data;
}

export const calculateDuration = (pickUpDate, returnDate) => {
    if (pickUpDate && returnDate) {
        const daysDifference = differenceInDays(returnDate, pickUpDate);
        const weeks = Math.floor(daysDifference / 7);
        const remainingDays = daysDifference % 7;

        if (weeks === 0 && remainingDays === 0) {
            const hoursDifference = differenceInHours(returnDate, pickUpDate);
            const minutesDifference = differenceInMinutes(returnDate, pickUpDate);
            const hours = Math.floor(hoursDifference);
            const minutes = Math.floor((minutesDifference % 60));
            return `${hours > 0 ? `${hours} hour ` : ""}${minutes > 0 ? `${minutes} minutes` : ""}`
        } else {
            const duration = `${weeks > 0 ? `${weeks} Week ` : ""}${remainingDays > 0 ? `${remainingDays} Day` : ""}`;
            return duration;
        }
    }
};
