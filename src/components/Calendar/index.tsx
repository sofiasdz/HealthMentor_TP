import {cva, VariantProps} from "class-variance-authority";
import React from "react";
import {MonthTab} from "../MonthTab";
import {CalendarWeek, Days} from "../CalendarWeek";

const calendarVariant = cva([], {
    variants:{

    } , defaultVariants:{

    }
})


export interface CalendarProps extends VariantProps<typeof calendarVariant>{
days: Days[];
pickedDay : number;
selectedMonth: string;
}

export const Calendar = ({ selectedMonth, pickedDay , days, ...rest}:CalendarProps) => {

    const divideDays = (index : number) => {
        let list = []
        for (let i = index*6; i < index*6+6 ; i++) {
            list.push(days[i])
        }
        return list
    }


    return (
        <div className={"w-[393px] h-[744px] bg-grey-100 flex flex-col items-center rounded-b-[10px] shadow-[0px_2px_1px_0px_rgba(208, 210, 202, 0.50)]"}>
            <div className={"mb-[123px]"}></div>
            <div className={"w-fit h-[45px] mb-[16px] overflow-hidden"}>
                <MonthTab selectedMonth={selectedMonth}></MonthTab>
            </div>
            <div className={"space-y-4"}>
                <CalendarWeek days={divideDays(0)} pickedDate={pickedDay} ></CalendarWeek>
                <CalendarWeek days={divideDays(1)} pickedDate={pickedDay}></CalendarWeek>
                <CalendarWeek days={divideDays(2)} pickedDate={pickedDay}></CalendarWeek>
                <CalendarWeek days={divideDays(3)} pickedDate={pickedDay}></CalendarWeek>
                <CalendarWeek days={divideDays(4)} pickedDate={pickedDay}></CalendarWeek>
                <CalendarWeek days={divideDays(5)} pickedDate={pickedDay}></CalendarWeek>
            </div>
            <div className={"w-[89px] h-[9px] flex-shrink-0 rounded bg-[#D9D9D9] mt-[32px]"}></div>
        </div>
    )
}