/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  property1: "comida" | "agua" | "ejercicio";
}

export const ChallengeIcons = ({ property1 }: Props): JSX.Element => {
  return (
    <div
      className={`w-[63px] h-[65px] rounded-[17px] relative ${
        property1 === "comida" ? "bg-primary-400" : property1 === "ejercicio" ? "bg-secondary-400" : "bg-tertiary-400"
      }`}
    >
      <img
        className={`absolute ${property1 === "ejercicio" ? "w-[57px]" : "w-[55px]"} ${
          property1 === "ejercicio" ? "left-[3px]" : "left-[4px]"
        } ${property1 === "comida" ? "top-[4px]" : "top-[3px]"} ${property1 === "comida" ? "h-[57px]" : "h-[58px]"}`}
        alt="Isometric stickers"
        src={
          property1 === "comida"
            ? "https://c.animaapp.com/Ja2T6g5I/img/isometric-stickers-salad-6@2x.png"
            : property1 === "ejercicio"
            ? "https://c.animaapp.com/Ja2T6g5I/img/isometric-stickers-weights@2x.png"
            : "https://c.animaapp.com/Ja2T6g5I/img/isometric-stickers-water-and-ice-2@2x.png"
        }
      />
    </div>
  );
};