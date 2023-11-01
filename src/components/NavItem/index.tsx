import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";
import {House} from "../assets/Icons";


const navitemVariant = cva(['w-full sm:w-fit' ],{
    variants:{
        variant:{
            home:[
                'bg-white text-primary-500 w-[68px] h-[46px] flex flex-col items-center p-[6px] m-[4px]',
                'hover:bg-primary-300',
                'disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-700',
            ],
            goals:[],
            medication:[]

        },

    },
    defaultVariants:{
        variant:'home',
    }
})

export interface NavitemProps extends  VariantProps<typeof navitemVariant>{

}

const NavItem = ({variant,...rest}:NavitemProps) => {
    return <div className={navitemVariant({ variant})} {...rest}>
            <div className={` w-[28px] h-[28px] flex flex-col items-center `} >
            <House color="primary-500"></House>
            </div>
        <p className={` w-[42px] h-[13px] "text-primary-500 [font-family:'SF_Pro-Regular',Helvetica] text-[11px] font-normal text-center`}> Home</p>
    </div>
}



export default NavItem