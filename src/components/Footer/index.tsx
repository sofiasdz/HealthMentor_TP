import React, {useState} from "react";
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

    const [goals, setGoals] = useState<"on" | "off">("off");
    const [home, setHome] = useState<"on" | "off">("off");
    const [medication, setMedication] = useState<"on" | "off">("off");

    const changeVariant = (variant : string) => {
        if (variant === "goals") {
            setGoals("on")
            setHome("off")
            setMedication("off")
        } else if (variant === "home") {
            setGoals("off")
            setHome("on")
            setMedication("off")
        } else {
            setGoals("off")
            setHome("off")
            setMedication("on")
        }
    }

    return (
        <div className={" w-full flex flex-col justify-center items-center bg-grey-100 border-t border-grey-400"}>
            <div className={"flex p-2 px-[16px] justify-between items-start self-stretch w-full"}>
                <div className={"cursor-pointer"} onClick={() => changeVariant("goals")}>
                <NavItem name={"Goals"} variant={"goals"} turnOn={goals} ></NavItem>
                </div>

                <div className={"cursor-pointer"} onClick={() => changeVariant("home")}>
                <NavItem name={"Home"} variant={"home"} turnOn={home}></NavItem>
                </div>
                <div className={"cursor-pointer"} onClick={() => changeVariant("medication")}>
                <NavItem name={"Medication"} variant={"medication"} turnOn={medication}></NavItem>
                </div>
            </div>


            <div className={"h-[34px] items-center justify-end"}>
                <div className={"w-[134px] h-[5px] rounded-[100px] bg-black mb-[8px] mt-[21px]"}>

                </div>
            </div>
        </div>
    )
}