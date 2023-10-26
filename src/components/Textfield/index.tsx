import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";


const textfieldVariant = cva(['w-full sm:w-fit','rounded-lg '],{
    variants:{
        variant:{
            outlined:[
                'bg-white text-primary-500 border border-primary-500',
                'hover:bg-primary-300',
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
    return <div><p> Label </p> <input className={textfieldVariant({size, variant})} {...rest} />
    </div>
}



export default Textfield