import {cva, VariantProps} from "class-variance-authority";
import React from "react";
import { TypeCompleted } from "./Icon/TypeCompleted";
import { TypeIncomplete } from "./Icon/TypeIncomplete";

const goalCardVariant = cva([], {
    variants:{
        variant:{
            completed:[],
            incomplete:[]
        }
    },
    defaultVariants:{
        variant:'incomplete'
    }
})

export interface GoaldCardProps extends VariantProps<typeof goalCardVariant>{
    taskName: string;
    icon: "comida" | "agua" | "ejercicio";
    position: "top" | "mid" | "bot" | "def";
}

const GoalCard = ({variant, taskName, icon, position, ...rest}:GoaldCardProps) => {
    return (
        <>
            {variant === 'completed' ? (
                <TypeCompleted className="!absolute !w-[360px] !h-[80px] !top-0 !left-0" task={taskName} icon={icon} position={position}/>
                )
                :(
                <TypeIncomplete className="!absolute !w-[360px] !h-[80px] !top-0 !left-0" task={taskName} icon={icon} position={position}/>
                )
                
            }
        </>
    )
}

export default GoalCard