import React from "react";
import { Typography } from "../typography";
import { thirdCardProps } from "./index.types";
export default function ThirdCard(props: thirdCardProps) {
  return (
    <div className="mxs:flex mxs:items-center mxs:justify-between py-[40px] mxs:py-[20px] border-t border-b border-[#222]">
      <div className="flex justify-between items-center self-stretch mxs:items-start mxs:flex-col">
        <Typography
          variant="h-l"
          font="inter"
          fontWeight="regular"
          color="whiteOne"
          className="tracking-[-0.64px]"
        >
          {props.jobTitle}
        </Typography>
        <div className="flex justify-between items-center w-[359px] mxs:w-full">
          <Typography
            variant="p-xxl"
            font="inter"
            fontWeight="regular"
            color="greyOne"
            className="tracking-[-0.4px]"
          >
            {props.location}
          </Typography>
          <div className="mxs:hidden mlg:block">{props.icon}</div>
        </div>
      </div>
      <div className="mxs:block mxxl:hidden 2xl:hidden 3xl:hidden">{props.icon}</div>
    </div>
  );
}
