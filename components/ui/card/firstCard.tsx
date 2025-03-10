import React from "react";
import { Typography } from "../typography";
import { firstCardProps } from "./index.types";

export default function FirstCard(props: firstCardProps) {
  return (
    <div
      className={`flex flex-col justify-end items-start p-5 w-[313px] h-[231px] mxs:h-[187px] mlg:w-[280px] mmd:w-[200px] mxs:w-full mmd:p-[10px] mxs:p-[30px] flex-shrink-0 rounded-[20px]`}
      style={{ backgroundColor: props.backgroundColor }}
    >
      <div className="w-full">
        <Typography>{props.firstText}</Typography>
      </div>
      <div className="w-full">
        <Typography
          variant="h-l"
          font="instrument"
          fontWeight="regular"
          color="blackOne"
          className=""
        >
          {props.secondText}
        </Typography>
      </div>
      <div className="w-full">
        <Typography
          variant="p-xl"
          font="inter"
          fontWeight="regular"
          color="blackOne"
        >
          {props.thirdText}
        </Typography>
      </div>
    </div>
  );
}
