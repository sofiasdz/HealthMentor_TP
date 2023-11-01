import {cva, VariantProps} from "class-variance-authority";
import React from "react";
import {CardButton} from "../ButtonCards";

const cardsVariants = cva([], {
    variants: {
        variant: {
            single: [],
            multiple: []
        }
    }
})


export interface CardsProps extends VariantProps<typeof cardsVariants> {
medication: string;
dose: string;
buttonVariant: "clicked" | "clickeable" | "passedTime" | "unable"
}

export const Cards = ({buttonVariant, medication, dose, variant, ...rest}: CardsProps) => {

    return(
        <div className={"relative"}>
            <div className="w-[272px] h-[136px] rounded-[10px] border border-grey-300 z-[99] bg-grey-0">
                <div className={"w-full flex flex-row"}>
                    <div className={"w-[42px] h-[105px] rounded-[10px] border border-grey-300 bg-[#EEEFEB] flex justify-center  mt-[16px] ml-[15px]"}>
                        <div className={"mt-[8px]"}>
                            <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0973 10.3485L18.2256 4.34069L15.2709 1.43431C13.3608 -0.438261 10.8637 -0.477273 9.02326 1.31727C7.19274 3.10207 7.22259 5.56957 9.14264 7.45189L12.0973 10.3485ZM13.4304 11.6652L16.3951 14.5716C18.3151 16.4441 20.8023 16.4831 22.6527 14.6886C24.4832 12.9038 24.4533 10.4363 22.5333 8.55397L19.5686 5.64759L13.4304 11.6652ZM0 13.9669H10.6349C10.2171 11.4799 7.99857 9.56828 5.32243 9.56828C2.63634 9.56828 0.417836 11.4799 0 13.9669ZM0 15.7419C0.417836 18.2484 2.6264 20.16 5.32243 20.16C7.99857 20.16 10.2071 18.2387 10.6349 15.7419H0Z" fill="#8FB8A0"/>
                            </svg>
                        </div>
                    </div>
                    <div className={"w-full flex-col flex"}>
                        <div className={"w-full flex flex-row"}>
                            <div className={"w-full flex flex-col mt-[20px] ml-[17px]"}>
                                <div className={`[font-family:'SF_Pro-Regular',Helvetica] text-[16px] text-grey-600"}`}>
                                    {medication}
                                </div>
                                <div className={`[font-family:'SF_Pro-Regular',Helvetica] text-[16px] text-grey-600"}`}>
                                    Dose: {dose}
                                </div>
                            </div>

                            {buttonVariant == "unable" ? (<></>) : (
                            <div className={"mr-[17px] mt-[16px]"}>
                                <CardButton variant={buttonVariant}></CardButton>
                            </div>
                            )}

                        </div>

                        {variant == "multiple" &&
                        <div className={" [font-family:'SF_Pro-Regular',Helvetica] w-[146px] rounded-[10px] bg-secondary-600 flex justify-center items-center mt-[32px] ml-[28px]"}>
                            See More
                        </div>
                        }
                </div>
                </div>


            </div>

            {variant == "multiple" ? (
                <div className="absolute top-0 left-0 z-[-2] rounded-[10px] bg-grey-300 border border-grey-300 w-[272px] h-[144px]">
                </div>
            ) : (
                <></>
            )}

            {variant == "multiple" ? (
                <div className="absolute top-0 left-0 z-[-6] rounded-[10px] bg-grey-400 border border-grey-300 w-[272px] h-[152px]">
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}