import {cva, VariantProps} from "class-variance-authority";
import React from "react";
import seven from "../assets/badges/seven.jpg"
import thirty from "../assets/badges/Thirty.png"
import ninety from "../assets/badges/ninety.png"
import first from "../assets/badges/first.png"

const goalCardVariant = cva([], {
    variants:{
        variant:{
            sevenS:[],
            thirtyS:[],
            ninetyS:[],
            firstWorkout:[]
        }
    },
    defaultVariants:{
        variant:'firstWorkout'
    }
})

export interface BadgesProps extends VariantProps<typeof goalCardVariant>{
    badgeName: 'sevenS' | 'thirtyS' | 'ninetyS' | 'firstWorkout';
}

const Badge = ({variant, ...rest}:BadgesProps) => {
    return (
        <>
          {variant === "sevenS" ? (
            <img src={seven}></img>
          ): variant === 'thirtyS' ? (
            <img src={thirty}></img>
          ) : variant === "ninetyS" ? (
            <img src={ninety}></img>
          ) : variant === "firstWorkout" ? (
            <img src={first}></img>
          ) : (
            <img src={seven}></img>
          )
          }  
        </>
    )
}

export default Badge