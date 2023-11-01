import React from "react";
import {cva, VariantProps} from "class-variance-authority";

const monthTabVariant = cva(['w-full sm:w-fit','rounded-lg '],{
    variants:{

    }
})

export interface MonthTabProps extends  VariantProps<typeof monthTabVariant>{

}

export const MonthTab = ({...rest}:MonthTabProps) => {

    return (
        <div className="w-[393px] h-[45px] items-center flex justify-center space-x-5">
            <time className="text-grey-300 text-sm blur-[1px] self-center my-auto [font-family:'SF_Pro-Regular',Helvetica]" dateTime="2022-01">
                ry
            </time>
            <time className="text-grey-600 text-sm self-center my-auto [font-family:'SF_Pro-Regular',Helvetica]" dateTime="2022-02">
                March
            </time>
            <div className="text-grey-0 text-center text-sm self-stretch  bg-secondary-500 px-3 py-2.5 rounded-xl whitespace-nowrap ">
                April
            </div>
            <time className="text-grey-600 text-sm self-center my-auto [font-family:'SF_Pro-Regular',Helvetica]" dateTime="2022-05">
                May
            </time>
            <time className="text-grey-600 text-sm self-center my-auto [font-family:'SF_Pro-Regular',Helvetica]" dateTime="2022-06">
                June
            </time>
            <time className="text-grey-600 text-sm self-center my-auto [font-family:'SF_Pro-Regular',Helvetica]" dateTime="2022-07">
                July
            </time>
            <time className="text-grey-300 text-sm blur-[1px] self-center my-auto [font-family:'SF_Pro-Regular',Helvetica]" dateTime="2022-08">
                Augus
            </time>
        </div>
    )
}