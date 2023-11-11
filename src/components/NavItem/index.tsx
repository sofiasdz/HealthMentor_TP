import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";
import {Goals, House, Medicine} from "../assets/Icons";


const navItemVariant = cva(['w-full sm:w-fit' ],{
    variants:{
        variant:{
            home:[],
            goals:[],
            medication:[]

        },
        turnOn: {
            on: [
                'bg-primary-300 ',
                'disabled:bg-grey-300 disabled:text-grey-700',
            ],
            off: [
                '',
                'hover:bg-primary-300 text-grey-200',
                'disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-700',
            ],
        },
    },
    defaultVariants:{
        variant:'home',
    }
})

export interface NavItemProps extends  VariantProps<typeof navItemVariant>{
name: string;
}

export const NavItem = ({ name, variant, turnOn ,...rest}:NavItemProps) => {
    return (
        <div className={`min-w-[68px] w-[68px] h-[46px] rounded-[10px] flex flex-col justify-center items-center  ${navItemVariant({turnOn})} truncate`}>
                <div className={`w-[28px] h-[28px] flex flex-col items-center  `} >
                    {variant === 'home' ? <House/> : variant === 'goals' ? <Goals/> : <Medicine/>}
                </div>
            <div className="max-w-[68px] text-primary-500 text-center font-sf-pro text-[11px] font-normal leading-5 [font-family:'SF_Pro-Display',Helvetica] ">
                {name}
            </div>
        </div>
    )
}



