import React from "react";
import {Header} from "../components/Header";
import timee from "../components/assets/img.png"
import {WeekTab} from "../components/WeekTab";
import {CardButton} from "../components/ButtonCards";
import Textfield from "../components/Textfield";

export const AddMedication = () => {


    return (
        <div className={"w-[393px] h-[852px] bg-grey-200"}>
            <Header Title={""} ButtonName={"Back"} variant={"buttonLeft"}></Header>

            <div className={"[font-family:'SF_Pro-Medium',Helvetica] text-[32px] text-grey-700 text-left mt-[20px] ml-[22px]"} >
                Add New Medicine
            </div>

            <div >
                <Textfield variant={"normal"}></Textfield>
            </div>

            <div className={"[font-family:'SF_Pro-Regular',Helvetica] text-[16px] text-grey-700 text-left mt-[17px] ml-[21px]"}>
                Time
            </div>

            <img src={timee} alt={"cxcz"}></img>

            <div className={"[font-family:'SF_Pro-Regular',Helvetica] text-[16px] text-grey-700 text-left mt-[17px] ml-[21px]"} >
                Day
                <WeekTab activeDay={"Wednesday"}></WeekTab>
            </div>

            <div className={"flex flex-row items-center mt-[16px]"}>
                <div className={"[font-family:'SF_Pro-Regular',Helvetica] text-[16px] text-grey-700 text-left mt-[17px] ml-[21px] flex-grow"}>
                    Every week?
                </div>
                <div className={"mr-[29px]"}>
                <CardButton variant={"clickeable"}></CardButton>
                </div>
            </div>


        </div>
    )
}