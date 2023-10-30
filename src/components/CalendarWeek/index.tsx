import React from "react";
import {cva, VariantProps} from "class-variance-authority";
import {CalendarButton} from "../CalendarButton";

const calendarTabVariant = cva(['w-full sm:w-fit','rounded-lg '],{
    variants: {

    }, defaultVariants: {

    }
})

interface Days {
    day: string;
    number: number;
}

export interface CalendarTabProps extends  VariantProps<typeof calendarTabVariant>{
    pickedDate: number;
    days: Days[];
}


export const CalendarWeek = ({pickedDate, days,...rest}:CalendarTabProps) => {
    const PickedDateValid = (): number  => {
        if (pickedDate > 0 && pickedDate < 32){
            return pickedDate
        } else {
            return 0
        }
    }

    return(
        <div className={"flex flex-row space-x-1.5"}>
            {days.map((day, index) => (
                    <CalendarButton number={day.number.toString()} dayName={day.day} backgroundColor={PickedDateValid() === day.number ? "selected" : "unselected"}  borderColor={PickedDateValid() === day.number ? "selected" : "unselected"}></CalendarButton>
                ))}
        </div>
    )
}