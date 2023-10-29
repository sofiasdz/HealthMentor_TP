import {cva, VariantProps} from "class-variance-authority";
import React from "react";
import {TypeClock} from "./Icon/TypeClock";
import {TypeTickClicked} from "./Icon/TypeTickClicked";

const cardButtonVariant = cva(['w-full sm:w-fit','rounded-lg '],{
    variants:{
        variant:{
            clicked:[
                "w-10 h-10 left-0 top-0 absolute bg-green-300 rounded-lg"
            ],
            clickeable:[
                'border-4 border-solid border-greyscale-300'
            ],
            passedTime:[
                "bg-primary-500 relative"
            ]
        }
    },
    defaultVariants:{
        variant:'clickeable'
    }
})

export interface CardButtonProps extends  VariantProps<typeof cardButtonVariant>{

}


const CardButton = ({variant, ...rest}:CardButtonProps) => {
    return (
        <>
        {variant === "clicked" ? (
            <TypeTickClicked className="!absolute !w-[40px] !h-[40px] !top-0 !left-0" />
            )
        :
            variant === "clickeable" ? (
                <div className={`w-[40px] h-[40px] rounded-[10px] border-4 border-solid border-greyscale-300`}/>

                )
                : (
                <div className={`w-[40px] h-[40px] rounded-[10px] bg-primary-500 relative`}>
                    <TypeClock className="!absolute !w-[34px] !h-[34px] !top-[3px] !left-[3px]" color="white"/>
                </div>
                )}
        </>
    )
}

export default CardButton
