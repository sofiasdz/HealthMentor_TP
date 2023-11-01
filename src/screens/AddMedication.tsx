import React from "react";
import {Header} from "../components/Header";


export const AddMedication = () => {


    return (
        <div className={"w-[393px] h-[852px] bg-grey-200"}>
            <Header Title={""} ButtonName={"Back"} variant={"buttonRight"}></Header>

            <div className={"[font-family:'SF_Pro-Regular',Helvetica] text-[16px] text-grey-600}"}>
                Add New Medicine
            </div>

            <div></div>

            <div>
                Time
            </div>

            <img src={"./img.png"} alt={""}></img>

        </div>
    )
}