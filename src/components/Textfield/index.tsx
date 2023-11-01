import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";


const textfieldVariant = cva(['w-full sm:w-fit',' rounded-[16px] '],{
    variants:{
        variant:{
            outlined:[
                'bg-grey-100 text-grey-600 input-bg-secondary-300  border-grey-300',
                'hover:bg-secondary-300',
                'disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-700',

            ],

        },
        size:{
            small:['px-4 py-2 text-xs'],
            medium:['px-4 py-3 text-sm'],
        }
    },
    defaultVariants:{
        variant:'outlined',
        size:'medium'
    }
})

export interface TextfieldProps extends  VariantProps<typeof textfieldVariant>{

}

const Textfield = ({variant,size, ...rest}:TextfieldProps) => {
    return (
        <div  className="flex">
            <div className={textfieldVariant({ size, variant })} {...rest}>
            <label  >Label </label>
            <input  className= "bg-grey-100 text-grey-400 hover:bg-secondary-300 bg-grey-000 p-[11px] m-[16px] border-none" />
            </div>
        </div>
    )
}



export default Textfield