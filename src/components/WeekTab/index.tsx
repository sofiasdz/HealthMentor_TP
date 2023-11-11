import React, {useEffect, useState} from "react";
import {cva, VariantProps} from "class-variance-authority";
import {DayButton, DayButtonProps} from "./DayButton/DayButton";

const weekTabVariants = cva(['w-full sm:w-fit','rounded-lg '],{
    variants: {

    }
})


export interface WeekTabProps extends VariantProps<typeof weekTabVariants>{
    activeDay: string;
}

interface Day {
    day: string,
    active: boolean,
}

export const WeekTab = ({activeDay, ...rest}:WeekTabProps) => {
    const [days, setDays] = useState<Day[]> ([
        {
         day : "Sun",
         active: false
        },
        {
            day: "Mon",
            active: false
        },
        {
            day: "Tue",
            active: false
        },
        {
            day: "Wed",
            active: true
        },
        {
            day: "Thu",
            active: false
        },
        {
            day: "Fri",
            active: false
        },
        {
            day: "Sat",
            active: false
        }])

    useEffect(() => {
        // Update the active day when the activeDay prop changes
        const updatedDays = days.map((d) => ({
            day: d.day,
            active: d.day === activeDay,
        }));
        setDays(updatedDays);
    }, [activeDay]);

    const handleClick = (day: string): void => {
        const updatedDays = days.map((d) => ({
            day: d.day,
            active: d.day === day,
        }));

        setDays(updatedDays);
    };


    return (
        <div className={"flex flex-row space-x-[12px]"}>
            {days.map((day) => (
                <div className={"cursor-pointer"} onClick={() => handleClick(day.day)}>
                    <DayButton day={day.day} active={day.active}></DayButton>
                </div>
            ))

            }
        </div>
    )



    // const days = [{
    //     day: "Sun",
    //     active: true,
    //     width: 45,
    //     height : 25,
    //     top: 13,
    //     left : 0
    // }, {
    //     day: "Mon",
    //     active: false,
    //     width: 51,
    //     height : 24,
    //     top: 14,
    //     left : 57
    // } , {
    //     day: "Tue",
    //     active: false,
    //     width: 44,
    //     height : 20,
    //     top: 16,
    //     left : 120
    // } , {
    //     day: "Wed",
    //     width: 52,
    //     height : 18,
    //     top: 15,
    //     left : 0
    // } , {
    //     day: "Thu",
    //     width: 45,
    //     height : 20,
    //     top: 13,
    //     left : 241
    // } , {
    //     day: "Fri",
    //     width: 30,
    //     height : 20,
    //     top: 13,
    //     left : 298
    // } , {
    //     day: "Sat",
    //     width: 42,
    //     height : 20,
    //     top: 13,
    //     left : 340
    // }]
    //
    // return (
    //     <div className="row w-[382px] h-[51px]">
    //         {activeDay === "Monday" ? (
    //             days.map((day, index) => {
    //                 return (
    //                     <DayButton day={day.day} active={day.day === "Mon"} width={day.width} height={day.height} top={day.top} left={day.left} />
    //                 )
    //             })
    //
    //         ) : activeDay === "Tuesday" ? (
    //             days.map((day, index) => {
    //                 return (
    //                     <DayButton day={day.day} active={day.day === "Tue"} width={day.width} height={day.height} top={day.top} left={day.left} />
    //                 )
    //             })
    //         ) : activeDay === "Wednesday" ? (
    //             days.map((day, index) => {
    //                 return (
    //                     <DayButton day={day.day} active={day.day === "Wed"} width={day.width} height={day.height} top={day.top} left={day.left} />
    //                 )
    //             })
    //         ) : activeDay === "Thursday" ? (
    //             days.map((day, index) => {
    //                 return (
    //                     <DayButton day={day.day} active={day.day === "Thu"} width={day.width} height={day.height} top={day.top} left={day.left} />
    //                 )
    //             })
    //         ) : activeDay === "Friday" ? (
    //             days.map((day, index) => {
    //                 return (
    //                     <DayButton day={day.day} active={day.day === "Fri"} width={day.width} height={day.height} top={day.top} left={day.left} />
    //                 )
    //             })
    //         ) : activeDay === "Saturday" ? (
    //             days.map((day, index) => {
    //                 return (
    //                     <DayButton day={day.day} active={day.day === "Sat"} width={day.width} height={day.height} top={day.top} left={day.left} />
    //                 )
    //             })
    //         ) : activeDay === "Sunday" ? (
    //             days.map((day, index) => {
    //                 return (
    //                     <DayButton day={day.day} active={day.day === "Sun"} width={day.width} height={day.height} top={day.top} left={day.left} />
    //                 )
    //             })
    //         ) : (
    //             <></>
    //         )}
    //     </div>
    // )
}
