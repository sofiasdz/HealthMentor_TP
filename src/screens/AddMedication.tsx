import React from "react";
import {Header} from "../components/Header";
import timee from "../components/assets/img.png"
import {WeekTab} from "../components/WeekTab";
import {CardButton} from "../components/ButtonCards";
import Textfield from "../components/Textfield";
import {Footer} from "../components/Footer";

export const AddMedication = () => {


    return (
        <div className={"w-[393px] h-[852px] bg-grey-200"}>
            <Header Title={""} ButtonName={"Back"} variant={"buttonLeft"}></Header>

            <div className={"[font-family:'SF_Pro-Medium',Helvetica] text-[32px] text-grey-700 text-left mt-[20px] ml-[22px]"} >
                Add New Medicine
            </div>

            <div className={"w-[361px] ml-[16px] mt-[20px]"}>
                <Textfield name={"Name"} value={"Value"} variant={"normal"}></Textfield>
            </div>

            <div className={"[font-family:'SF_Pro-Regular',Helvetica] text-[16px] text-grey-700 text-left mt-[17px] ml-[21px]"}>
                Time
            </div>

            <img className={"h-[260px] ml-[70px]"} src={timee} alt={"cxcz"}></img>

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

            <div className={"w-[361px] ml-[16px] mt-[20px]"}>
                <Textfield name={"Dose"} value={"Value"} variant={"normal"}></Textfield>
            </div>

            <div className={"flex w-full items-center"}>
                <div className={" [font-family:'SF_Pro-Regular',Helvetica] w-[146px] h-[40px] rounded-[10px] text-[20px] bg-primary-500 flex justify-center items-center mt-[16px] mb-[16px]  mx-auto "}>
                    Add Medicine
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}