import {cva, VariantProps} from "class-variance-authority";
import React from "react";


const cardButtonVariant = cva(['w-full sm:w-fit','rounded-lg '],{
    variants: {
        borderColor: {
            selected: ["border-secondary-600"],
            unselected: ["border-grey-200"],
            passedMonth: ["border-grey-200"],
            streak: ["border-tertiary-500"],
            failedStreak: ["border-primary-500"]
        },
        backgroundColor: {
            selected: ["bg-secondary-500"],
            unselected: ["border-grey-200"],
            passedMonth: ["bg-[#f6f6f6]"],
            streak: ["bg-tertiary-300"],
            failedStreak: ["border-primary-500"]
        }
    },
    defaultVariants: {
        borderColor: "unselected",
        backgroundColor: "unselected"
    }
})

export interface CardButtonProps extends  VariantProps<typeof cardButtonVariant>{
    number: string;
    dayName: string;
}

export const CalendarButton = ({number, dayName, borderColor, backgroundColor, ...rest}:CardButtonProps) => {
    return (
        <div className={`w-[50px] flex flex-col items-center gap-[7px] h-[72px] overflow-hidden rounded-[10px] relative ${borderColor === "streak" || borderColor === "failedStreak" ? "border border-solid" : "border-[0.25px] border-solid"} ${cardButtonVariant({borderColor: borderColor})} ${borderColor === "unselected" ? "px-[15px] py-[18px]" : "pt-[17px] pb-[18px] px-[15px]"} ${cardButtonVariant({backgroundColor: backgroundColor})}`} >
            <div className={`[font-family:'SF_Pro-Regular',Helvetica] w-[19px] tracking-[0] text-[16px] relative h-[16px] font-normal text-center whitespace-nowrap leading-[normal] ${borderColor === "streak" || borderColor === "failedStreak" ? "mt-[-1.00px]" : "mt-[-0.25px]"} ${backgroundColor === "selected" ? "text-grey-0" : backgroundColor === "streak" ? "text-tertiary-500" : backgroundColor === "failedStreak" ? "text-primary-500" : "text-greyscale-500"}`}>
                {number}
            </div>
            <div className={` tracking-[0] text-[11px] relative h-[11px] [font-family:'SF_Pro-Regular',Helvetica] text-center whitespace-nowrap leading-[normal] ${borderColor === "unselected" ? "w-[25px] mr-[-2.50px] ml-[-2.50px]" : "w-[22px] mr-[-1.00px] ml-[-1.00px]"} ${ borderColor === "selected" ? "text-grey-0" : borderColor === "streak" ? "text-tertiary-500" : borderColor === "failedStreak" ? "text-primary-500" : "text-greyscale-600"}`}>
                {dayName}
            </div>
        </div>
    )
}