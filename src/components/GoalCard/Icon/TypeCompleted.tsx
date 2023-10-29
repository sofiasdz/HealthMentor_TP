import React from "react";
import { TypeTickClicked } from "../../ButtonCards/Icon/TypeTickClicked";

interface Props {
    className: any;
    task: string;
}

export const TypeCompleted = ({ className, task }: Props): JSX.Element => {
    return (
        <div className="mode-card">
          <div className="frame">
            <img src="../assets/ChallengeIcon.png" alt="Challenge Icon"/>
            <div className="header-challeneg">
              <div className="text-wrapper">{task}</div>
            </div>
          </div>
          <div className="button-cards-wrapper">
            <TypeTickClicked className="button-cards-instance" />
          </div>
        </div>
      );
};

