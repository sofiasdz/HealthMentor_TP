import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";


const buttonVariant = cva(['w-full sm:w-fit','rounded-lg '],{
    variants:{
        variant:{
            default : [],
            disabled : [],
        },
    },
    defaultVariants:{
        variant:'default',

    }
})

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant>{
name : string;
onClick: () => void;
}

const Button = ({variant, name , onClick, ...rest}:ButtonProps) => {

    return (
        <div className={`h-full w-full [font-family:'SF_Pro-Regular',Helvetica] rounded-[10px] text-grey-100 text-[20px] ${variant == "default" ? "bg-primary-500 cursor-pointer hover:bg-primary-700" : "bg-primary-400 "} flex justify-center items-center `}>
            Add Medicine
        </div>
    )
}


// interface ButtonProps {
//     variant?: 'outlined' | 'fulfilled' | 'ghost' | 'white'
//     size?: string
//     children: ReactNode
// }
//
// const disabled = 'disabled:bg-grey-300 disabled:text-grey-700'
//
// const Button = ({variant,size='medium',children}:ButtonProps) => {
// return(<button className={'bg-primary-500 text-grey-700 py-3 px-4 rounded-lg hover:bg-blue-500 disabled:bg-green-300 ' + disabled}>{
//     children
// }</button>)
// }
export default Button
