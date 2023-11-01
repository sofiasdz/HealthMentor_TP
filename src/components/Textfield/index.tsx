import {cva, VariantProps} from "class-variance-authority";
import React from "react";

const textfieldVariant = cva([], {
    variants:{
        variant:{
            normal:[],
            error:[],
            disabled:[],
        }
    },
    defaultVariants:{
        variant:'normal'
    }
})

export interface TextfieldProps extends VariantProps<typeof textfieldVariant>{
}

const Textfield = ({variant, ...rest}:TextfieldProps) => {
    return (
        <>
           {variant === "normal" ? (
            <div className="flex h-[44px] items-start  pr-0 py-0 relative bg-secondary-400 rounded-[10px]">
                <div className="flex items-start pl-0 pr-[16px] py-[11px] relative flex-1 self-stretch grow">
                    <div className="relative w-[100px]  font-regular-subtitle-1 font-[number:var(--regular-subtitle-1-font-weigth)] text-secondary-600 text-[17px] tracking-[var(--regular-subtitle-1-letter-spacing)] leading-[var(--regular-subtitle-1-line-height)] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--regular-subtitle-1-font-style)]">
                        Name
                    </div>
                    <div className="relative flex-1 text-[#3c3c434c] font-regular-subtitle-1 font-[number:var(--regular-subtitle-1-font-weight)] text-labelstertiary text-[17px] tracking-[var(--regular-subtitle-1-letter-spacing)] leading-[var(--regular-subtitle-1-line-height)] [font-style:var(--regular-subtitle-1-font-style)]">
                        Value
                    </div>
                </div>
            </div>
           ) : variant === "error" ? (
            <div>e</div>
           ) : (
            <div>i</div>
           )
           }
        </>
    )
}

export default Textfield