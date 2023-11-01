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


export const CardButton = ({variant, ...rest}:CardButtonProps) => {
    return (
        <>
        {variant === "clicked" ? (
            <TypeTickClicked className=" !w-[40px] !h-[40px] !top-0 !left-0" />
            )
        :
            variant === "clickeable" ? (
                <div className={`w-[40px] h-[40px] rounded-[10px] border-4 border-solid border-grey-300`}/>

                )
                : (
                <div className={`w-[40px] h-[40px] rounded-[10px] bg-primary-500 relative`}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="10" fill="#F19165"/>
                        <g clip-path="url(#clip0_293_8094)">
                            <path d="M19.9893 30.6155C26.0405 30.6155 31.0352 25.6208 31.0352 19.5802C31.0352 13.5396 26.0299 8.54492 19.9786 8.54492C13.938 8.54492 8.95398 13.5396 8.95398 19.5802C8.95398 25.6208 13.9487 30.6155 19.9893 30.6155ZM14.6104 20.9249C14.1301 20.9249 13.7566 20.5514 13.7566 20.0711C13.7566 19.5909 14.1301 19.2174 14.6104 19.2174H19.1355V13.0914C19.1355 12.6111 19.509 12.2376 19.9786 12.2376C20.4695 12.2376 20.8431 12.6111 20.8431 13.0914V20.0711C20.8431 20.5514 20.4695 20.9249 19.9786 20.9249H14.6104Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_293_8094">
                                <rect width="34" height="34" fill="white" transform="translate(3 3)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                )}
        </>
    )
}

