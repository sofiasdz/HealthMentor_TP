import React from "react";

export interface DayButtonProps {
    day: string;
    active: boolean;
}

export const DayButton = (props : DayButtonProps) => {

    const {day, active} = props

    return (
        <div className={`w-[45px] h-[45px] ${!active ? "" : "bg-secondary-400 rounded-full text-grey-700"}  flex items-center justify-center` }>
            <div className={`${!active ? "text-grey-400" : "text-grey-700"} [font-family:'SF_Pro-Regular',Helvetica]`}>
                {day}
            </div>
        </div>
    )
}