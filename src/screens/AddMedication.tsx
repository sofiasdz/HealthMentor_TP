import React from "react";
import {Header} from "../components/Header";
import timee from "../components/assets/img.png"
import {WeekTab} from "../components/WeekTab";
import {CardButton} from "../components/ButtonCards";
import TextField from "../components/Textfield";
import {Footer} from "../components/Footer";
import Button from "../components/Button";

export const AddMedication = () => {


    return (
        <div className={"w-[393px] h-[852px] bg-grey-200"}>
            <Header Title={""} ButtonName={"Back"} variant={"buttonLeft"}></Header>

            <div className={"[font-family:'SF_Pro-Medium',Helvetica] text-[32px] text-grey-700 text-left mt-[20px] ml-[21px]"} >
                Add New Medicine
            </div>

            <div className={"w-[361px] ml-[16px] mt-[20px]"}>
                <TextField name={"Name"} placeHolder={"Value"} variant={"Normal"}></TextField>
            </div>

            <div className={"[font-family:'SF_Pro-Regular',Helvetica] text-[16px] text-grey-700 text-left mt-[17px] ml-[21px]"}>
                Time
            </div>

            <img className={"h-[260px] ml-[70px]"} src={timee} alt={"cxcz"}></img>

            <div className={"[font-family:'SF_Pro-Regular',Helvetica] text-[16px] text-grey-700 text-left mt-[17px] ml-[21px]"} >
                Day
            </div>
            <div className={"flex items-center justify-center w-full mt-[10px]"}>
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
                <TextField name={"Dose"} placeHolder={"Value"} variant={"Normal"}></TextField>
            </div>

            <div className={"flex items-center w-full  justify-center"}>
                <div className={"w-[146px] h-[40px] mt-[16px] mb-[16px] justify-center"}>
                    <Button variant={"default"} name={"Add medicine"} onClick={() => {}}/>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}