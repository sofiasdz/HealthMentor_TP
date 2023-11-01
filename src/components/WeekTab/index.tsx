import React from "react";
import {cva, VariantProps} from "class-variance-authority";
import {DayButton, DayButtonProps} from "./DayButton/DayButton";

const weekTabVariants = cva(['w-full sm:w-fit','rounded-lg '],{
    variants: {

    }
})


export interface WeekTabProps extends VariantProps<typeof weekTabVariants>{
    activeDay: string;
}



export const WeekTab = ({activeDay, ...rest}:WeekTabProps) => {


    return (
        <div className="relative w-[351px] h-[51px] flex flex-row">
            <div className="mt-[14px] ml-[14.03px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#a0a0a0] text-[18.03px] text-center tracking-[0] leading-[normal]">
                Sun
            </div>
            <div className="mt-[14px] ml-[14.03px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#a0a0a0] text-[18.03px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Mon
            </div>
            <div className="mt-[14px] ml-[14.03px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#a0a0a0] text-[18.03px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Tue
            </div>
            <div className="relative w-[52px] h-[51px] ml-[14.03px] left-px">
                <div className=" w-[51px] h-[51px]  bg-secondary-400 rounded-[25.5px]" />
                <div className="absolute w-[52px] h-[51px] top-[14px] left-0 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-grey-600 text-[18.03px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                    Wed
                </div>
            </div>
            <div className="mt-[14px] ml-[14.03px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#a0a0a0] text-[18.03px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Thu
            </div>
            <div className="mt-[14px] ml-[14.03px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#a0a0a0] text-[18.03px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Fri
            </div>
            <div className="mt-[14px] ml-[14.03px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#a0a0a0] text-[18.03px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Sat
            </div>
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
