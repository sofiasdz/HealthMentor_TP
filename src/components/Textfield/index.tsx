import {cva, VariantProps} from "class-variance-authority";
import React from "react";

const textFieldVariant = cva([], {
    variants:{
        variant:{
            Normal:[],
            Error:[],
            Disabled:[],
        }
    },
    defaultVariants:{
        variant:'Normal'
    }
})

export interface TextfieldProps extends VariantProps<typeof textFieldVariant>{
    name : string;
    placeHolder: string
}

const TextField = ({name, placeHolder , variant, ...rest}:TextfieldProps) => {
    const [inputValue, setInputValue] = React.useState<string>("")

    return (
        <div className={`flex h-[44px] pt-[11px] pl-[16px] pr-[16px] pb-[11px] flex-1 flex-row ${variant == "Error" ? " border border-primary-700" : variant == "Disabled" ? "" : "border border-grey-300"} rounded-[10px]`}>
            <div className={"flex items-center w-full"}>
                <div className={`font-sans text-base ${variant == "Error" ? "text-primary-500" : "text-[rgba(60,60,67,0.30)]" } font-normal leading-[120%] mr-[20px] text-[17px]`}>
                    {name}
                </div>
                <div className={`w-full ${variant == "Disabled" ? "" : "text-center"} flex`}>
                    {variant == "Disabled" ? (
                        <div className={"min-w-full   outline-none text-[rgba(60,60,67,0.63)]"}>
                            {placeHolder}
                        </div>
                    ) : (
                        <input className={`min-w-full p-[9px] items-center outline-none ${variant == "Error" ? "text-primary-700" : "text-grey-700" } text-[17px]`} type={"text"} placeholder={placeHolder} value={inputValue} onChange={(e) => setInputValue(e.target.value)}   style={{ background: 'transparent' }}/>
                    )}
                </div>
            </div>
        </div>

    )
}

export default TextField