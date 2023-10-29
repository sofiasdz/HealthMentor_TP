import React from "react";

export interface DayButtonProps {
    day: string;
    active: boolean;
    width: number;
    height: number;
    top: number;
    left: number;
}

export const DayButton = (props : DayButtonProps) => {

    const {day, active, width, height, top, left} = props

    return (
        <>
            {active ? (
                <div className={`absolute w-[${width}px] h-[${height}px] top-[${top}px] left-[${left}px]`}>
                    <div className="relative w-[52px] h-[51px] left-px">
                        <div className="absolute w-[51px] h-[51px] top-0 left-px bg-secondary-500 rounded-[25.5px]" />
                        <div className={`absolute w-[${width}px] h-[${height}px] top-[${top}px] left-[${left}px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#a0a0a0] text-[20px] text-center tracking-[0] leading-[normal]  whitespace-nowrap`}>
                            {day}
                        </div>
                    </div>
                </div>
            ) : (
                <div className={` w-[${width}px] h-[${height}px]  [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#a0a0a0] text-[20px] text-center tracking-[0] leading-[normal]  whitespace-nowrap`}>
                    {day}
                </div>
            )}
        </>

    )
}