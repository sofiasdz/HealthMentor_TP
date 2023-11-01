import {cva, VariantProps} from "class-variance-authority";
import React from "react";
import {CalendarWeek, Days} from "../CalendarWeek";
import {MonthTab} from "../MonthTab";


const miniCalendarVariant = cva([], {
    variants:{

    },
    defaultVariants:{

    }
})

export interface MiniCalendarProps extends VariantProps<typeof miniCalendarVariant>{
    pickedDate: number;
    days: Days[];
}

export const MiniCalendar = ({ days, pickedDate,...rest}:MiniCalendarProps) => {


    return (
        <div className={"w-[393px] h-[282px] bg-grey-100 flex flex-col items-center rounded-b-[10px] shadow-[0px_2px_1px_0px_rgba(208, 210, 202, 0.50)]"}>
            <div className={"my-[60px]"}></div>
            <div className={"w-fit h-[45px] my-[7.5px] overflow-hidden "}>
                <MonthTab></MonthTab>
            </div>
            <CalendarWeek pickedDate={pickedDate} days={days}></CalendarWeek>
            <div className={"w-[89px] h-[9px] flex-shrink-0 rounded bg-[#D9D9D9] mt-[15px]"}></div>
        </div>
    )
}