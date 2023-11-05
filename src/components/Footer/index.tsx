import React from "react";
import {cva, VariantProps} from "class-variance-authority";
import {NavItem} from "../NavItem";

const footerVariants = cva(['w-full sm:w-fit','rounded-lg '],{
    variants: {
        variant: {

        }
    }
})

interface FooterProps extends VariantProps<typeof footerVariants>{

}

export const Footer = ({...rest}:FooterProps) => {

    return (
        <div className={" w-full flex flex-col justify-center items-center bg-grey-100 border-t border-grey-400"}>
            <div className={"flex p-2 px-16 justify-between items-start self-stretch"}>
                <NavItem name={"Goals"} variant={"goals"}></NavItem>

                <NavItem name={"Home"} variant={"home"}></NavItem>

                <NavItem name={"Medication"} variant={"medication"}></NavItem>
            </div>


            <div className={"h-[34px] items-center justify-end"}>
                <div className={"w-[134px] h-[5px] rounded-[100px] bg-black mb-[8px] mt-[21px]"}>

                </div>
            </div>
        </div>
    )
}