import React from "react";
import { TypeClock } from "../../ButtonCards/Icon/TypeClock";
import { ChallengeIcons } from "./ChallengeIcons";

interface Props {
    className: any;
    task: string;
    icon: "comida" | "agua" | "ejercicio";
    position: "top" | "mid" | "bot" | "def";
}

export const TypeIncomplete = ({ className, task, icon, position }: Props): JSX.Element => {
  return (
    <>
    {position === 'def' ? (
        <div
          className={`flex w-[361px] items-center justify-between p-[8px] relative bg-greyscalewhite rounded-[10px] border-[0.5px] border-solid border-bordergreyscale ${className}`}
        >
          <div className="flex w-[235.5px] items-center gap-[16px] relative">
            <ChallengeIcons property1={icon} />
            <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-regular-body-1 font-[number:var(--regular-body-1-font-weight)] text-greyscale-600 text-[length:var(--regular-body-1-font-size)] tracking-[var(--regular-body-1-letter-spacing)] leading-[var(--regular-body-1-line-height)] whitespace-nowrap [font-style:var(--regular-body-1-font-style)]" style={{ color: "#436560" }}>
                {task}
              </div>
            </div>
          </div>
          <div className="relative w-[40px] h-[40px]">
            <TypeClock className="!absolute !w-[34px] !h-[34px] !top-[3px] !left-[3px]" color="white"/>
          </div>
        </div>
      ) : position === 'top' ? (
        <div
        className={`flex w-[361px] items-center justify-between p-[8px] relative bg-greyscalewhite border-b-[0.5px] [border-bottom-style:solid] border-bordergreyscale ${className}`}
      >
        <div className="flex w-[235.5px] items-center gap-[16px] relative">
          <ChallengeIcons property1={icon} />
          <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-regular-body-1 font-[number:var(--regular-body-1-font-weight)] text-greyscale-600 text-[length:var(--regular-body-1-font-size)] tracking-[var(--regular-body-1-letter-spacing)] leading-[var(--regular-body-1-line-height)] whitespace-nowrap [font-style:var(--regular-body-1-font-style)]" style={{ color: "#436560" }}>
              {task}
            </div>
          </div>
        </div>
        <div className="relative w-[40px] h-[40px]">
            <TypeClock className="!absolute !w-[34px] !h-[34px] !top-[3px] !left-[3px]" color="white"/>
          </div>      
        </div>
      ) : position === 'mid' ? (
        <div
      className={`flex w-[361px] items-center justify-between p-[8px] relative bg-greyscalewhite rounded-[10px_10px_0px_0px] border-b-[0.5px] [border-bottom-style:solid] border-bordergreyscale ${className}`}
    >
      <div className="flex w-[235.5px] items-center gap-[16px] relative">
        <ChallengeIcons property1={icon} />
        <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] font-regular-body-1 font-[number:var(--regular-body-1-font-weight)] text-greyscale-600 text-[length:var(--regular-body-1-font-size)] tracking-[var(--regular-body-1-letter-spacing)] leading-[var(--regular-body-1-line-height)] whitespace-nowrap [font-style:var(--regular-body-1-font-style)]" style={{ color: "#436560" }}>
            {task}
          </div>
        </div>
      </div>
      <div className="relative w-[40px] h-[40px]">
            <TypeClock className="!absolute !w-[34px] !h-[34px] !top-[3px] !left-[3px]" color="white"/>
          </div>
      </div>
      ) : (
        <div
      className={`flex w-[361px] items-center justify-between p-[8px] relative bg-greyscalewhite rounded-[0px_0px_10px_10px] ${className}`}
    >
      <div className="flex w-[235.5px] items-center gap-[16px] relative">
        <ChallengeIcons property1={icon} />
        <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] font-regular-body-1 font-[number:var(--regular-body-1-font-weight)] text-greyscale-600 text-[length:var(--regular-body-1-font-size)] tracking-[var(--regular-body-1-letter-spacing)] leading-[var(--regular-body-1-line-height)] whitespace-nowrap [font-style:var(--regular-body-1-font-style)]" style={{ color: "#436560" }}>
            {task}
          </div>
        </div>
      </div>
      <div className="relative w-[40px] h-[40px]">
            <TypeClock className="!absolute !w-[34px] !h-[34px] !top-[3px] !left-[3px]" color="white"/>
          </div>    
      </div>
      )
    };
  </>
  );
};
