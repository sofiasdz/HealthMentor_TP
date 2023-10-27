import {cva, VariantProps} from "class-variance-authority";
import React from "react";

const cardButtonVariant = cva(['w-full sm:w-fit','rounded-lg '],{
    variants:{
        variant:{
            clicked:[
                "w-10 h-10 left-0 top-0 absolute bg-green-300 rounded-lg"
            ],
            clickeable:[
                'w-10 h-10 left-0 top-0 absolute rounded-lg border-4 border-neutral-400'
            ],
            passedTime:[
                "w-10 h-10 left-0 top-0 absolute bg-red-400 rounded-lg"
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
        <div className={"w-10 h-10 relative"}>
            <div className={cardButtonVariant({variant})} {...rest}/>
        </div>
    )
}

export default CardButton
