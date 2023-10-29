import React from "react";
import { TypeClock } from "../../ButtonCards/Icon/TypeClock";

interface Props {
    className: any;
    task: string;
}

export const TypeIncomplete = ({ className, task }: Props): JSX.Element => {
    return (
        <div className="mode-card">
          <div className="frame">
            <img src="../assets/ChallengeIcon.png" alt="Challenge Icon"/>
            <div className="header-challeneg">
              <div className="text-wrapper">{task}</div>
            </div>
          </div>
          <div className="button-cards-wrapper">
            <TypeClock className="button-cards-instance" color="orange"/>
          </div>
        </div>
      );
};
