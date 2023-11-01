import {cva, VariantProps} from "class-variance-authority";
import React from "react";
import {CardButton} from "../ButtonCards";

const multipleMedicineCheckVariant = cva([],{
    variants:{
        variant:{
            marked: [

            ],
            unavailable: [

            ],
            available: [

            ]
        }
    },
    defaultVariants:{
        variant: "marked"
    }
})

export interface MultipleMedicineCheckProps extends  VariantProps<typeof multipleMedicineCheckVariant>{
medication: string;
dose: string;
}

export const MultipleMedicineCheck = ({medication, dose, variant, ...rest}:MultipleMedicineCheckProps) => {


    return(
        <div className={"flex flex-row w-[361px] h-[46px]"}>
            <div className={"flex flex-col w-[310px]"}>
                <div className={`[font-family:'SF_Pro-Regular',Helvetica] text-[16px] ${variant ==="marked" ? "line-through text-grey-400" : "text-grey-600"}`}>
                    {medication}
                </div>
                <div className={`[font-family:'SF_Pro-Regular',Helvetica] text-[16px] ${variant ==="marked" ? "line-through text-grey-400" : "text-grey-600"}`}>
                    Dose: {dose}
                </div>
            </div>
            {variant === "marked" ? (
                <CardButton variant={"clicked"}></CardButton>
            ) : variant === "unavailable" ? (
                <CardButton variant={"clickeable"}></CardButton>
            ) :
                <></>
            }
        </div>
    )
}