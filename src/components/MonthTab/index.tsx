import React from "react";
import {cva, VariantProps} from "class-variance-authority";

const monthTabVariant = cva(['w-full sm:w-fit','rounded-lg '],{
    variants:{

    }
})

export interface MonthTabProps extends  VariantProps<typeof monthTabVariant>{
selectedMonth: string;
}

export const MonthTab = ({selectedMonth, ...rest}:MonthTabProps) => {

    const get7MonthsInBetweenSelected = () : string[] => {
        let months : string[] = []
        let selectedMonthIndex = 0
        const monthsInOrder = ["January","February","March","April","May","June","July","August","September","October","November","December"]
        for (let i = 0; i < monthsInOrder.length; i++) {
            if (monthsInOrder[i] === selectedMonth){
                selectedMonthIndex = i
            }
        }

        if (selectedMonthIndex < 3){
            for (let i = 0; i < 5; i++) {
                months.push(monthsInOrder[ i])
            }
            return months
        }

        for (let i = selectedMonthIndex; i < (selectedMonthIndex+6) ; i++) {
            months.push(monthsInOrder[ i - 3])
        }
        return months
    }

    return (
        <div className="w-[393px] h-[45px] items-center flex justify-center space-x-5">
        {get7MonthsInBetweenSelected().map((month, index) => (
            <div className={`self-center my-auto [font-family:'SF_Pro-Regular',Helvetica] ${month === selectedMonth ? "text-grey-0 bg-secondary-500 px-3 py-2.5 rounded-xl whitespace-nowrap" : index == 0 || index == 5  ? "text-grey-300 text-sm blur-[1px]" : "text-grey-600"} `} >
                {month}
            </div>
        ))}
        </div>
        // <div className="w-[393px] h-[45px] items-center flex justify-center space-x-5">
        //     <div className="text-grey-300 text-sm blur-[1px] self-center my-auto [font-family:'SF_Pro-Regular',Helvetica]" >
        //         February
        //     </div>
        //     <div className="text-grey-600 text-sm self-center my-auto [font-family:'SF_Pro-Regular',Helvetica]" >
        //         March
        //     </div>
        //     <div className="text-grey-0 text-center text-sm self-stretch  bg-secondary-500 px-3 py-2.5 rounded-xl whitespace-nowrap ">
        //         April
        //     </div>
        //     <div className="text-grey-600 text-sm self-center my-auto [font-family:'SF_Pro-Regular',Helvetica]" >
        //         May
        //     </div>
        //     <div className="text-grey-600 text-sm self-center my-auto [font-family:'SF_Pro-Regular',Helvetica]" >
        //         June
        //     </div>
        //     <div className="text-grey-600 text-sm self-center my-auto [font-family:'SF_Pro-Regular',Helvetica]" >
        //         July
        //     </div>
        //     <div className="text-grey-300 text-sm blur-[1px] self-center my-auto [font-family:'SF_Pro-Regular',Helvetica]" >
        //         August
        //     </div>
        // </div>
    )
}