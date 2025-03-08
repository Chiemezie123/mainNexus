import React from "react";
import { Typography } from "../typography";
import { fourthCardProps } from "./index.types";

const FourthCard = React.forwardRef<HTMLDivElement, fourthCardProps>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        className="flex sticky z-20  w-full  h-[700px] mxs:h-[500px] top-[180px] justify-center items-center gap-[118.061px] self-stretch"
      >
        <div
          className="flex  flex-col justify-between  items-start p-[26.222px] mxs:p-[18.88px] w-[468.056px] mxs:w-[300.9px] h-[302.86px] mxs:h-[218px] rounded-[26.222px] bg-[#fff] shadow-[0px_14px_73.9px_0px_rgba(0,0,0,0.09)]"
          style={{ transform: `${props.rotation}` }}
        >
          <Typography
            variant="h-lx"
            font="instrument"
            fontWeight="regular"
            color="blackOne"
            className="italic tracking-[-1.709px]"
          >
            {props.step}
          </Typography>
          <div className="flex flex-col items-start gap-[1rem]">
            <Typography
              variant="h-s"
              font="inter"
              fontWeight="semibold"
              className="tracking-[-0.72px]"
            >
              {props.header}
            </Typography>
            <Typography
              variant="p-xxl"
              font="inter"
              fontWeight="regular"
              className="tracking-[-0.8px]"
            >
              {props.description}
            </Typography>
          </div>
        </div>
      </div>
    );
  }
);


FourthCard.displayName = "FourthCard";

export default FourthCard;
