import {cva, VariantProps} from "class-variance-authority";
import React from "react";

const goalCardVariant = cva([], {
    variants:{
        variant:{
            green:[],
            blue:[],
            orange:[],
        }
    },
    defaultVariants:{
        variant:'green'
    }
})

export interface MedicationAlertProps extends VariantProps<typeof goalCardVariant>{
    medication: string,
    time: string,
}

const MedicationAlert = ({variant, medication, time, ...rest}:MedicationAlertProps) => {
    return (
        <>
            <div
              className={`border border-solid inline-flex items-center gap-[8px] px-[16px] py-[8px] rounded-[16px] justify-center relative ${
                variant === "blue" ? "border-tertiary-700" : variant === "orange" ? "border-primary-700" : "border-secondary-700"
              } ${
                variant === "blue" ? "bg-tertiary-500" : variant === "orange" ? "bg-primary-500" : "bg-secondary-500"
              } `}
            >
              <div className="inline-flex self-stretch items-center gap-[8px] flex-[0_0_auto] justify-center relative">
                <div className="font-semibold-body-2 w-fit mt-[-1.00px] tracking-[var(--semibold-body-2-letter-spacing)] text-[length:var(--semibold-body-2-font-size)] [font-style:var(--semibold-body-2-font-style)] text-greyscale-000 relative font-[number:var(--semibold-body-2-font-weight)] whitespace-nowrap leading-[var(--semibold-body-2-line-height)]"  style={{ color: '#FAFAFA', fontWeight: 'bold' }}>
                  {medication}
                </div>
                <div className="font-regular-body-2 w-fit mt-[-1.00px] tracking-[var(--regular-body-2-letter-spacing)] text-[length:var(--regular-body-2-font-size)] [font-style:var(--regular-body-2-font-style)] text-greyscale-000 relative font-[number:var(--regular-body-2-font-weight)] whitespace-nowrap leading-[var(--regular-body-2-line-height)]"  style={{ color: '#FAFAFA' }}>
                  {time}
                </div>
              </div>
            </div>        
        </>
    )
}

export default MedicationAlert