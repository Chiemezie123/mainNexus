import React from "react";
import { Typography } from "../typography";

// Define the type for the secondCardArray items
interface SecondCardItem {
  number: string;
  header: string;
  description: string;
}

// Define the props for the SecondCard component
interface SecondCardProps {
  data: SecondCardItem[];
}

const SecondCard: React.FC<SecondCardProps> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-start gap-4 w-[328px] mlg:w-[280px] mmd:w-[200px] mxs:w-full"
        >
          <div className="flex flex-col items-start gap-4 mxs:gap-[8px] w-full">
            {/* Number and Header */}
            <div className="flex items-center gap-2.5 py-5 self-stretch border-b border-[#828385]">
              <Typography
                variant="h-s"
                color="blackOne"
                fontWeight="regular"
                font="inter"
                className="leading-normal"
              >
                {item.number}
              </Typography>
            </div>
            <div className="w-full">
              <Typography
                variant="h-m"
                fontWeight="semibold"
                color="blackOne"
                font="inter"
                className="leading-normal mxs:font-bold"
              >
                {item.header}
              </Typography>
            </div>
            {/* Description */}
            <div className="w-full">
              <Typography
                variant="p-xl"
                fontWeight="regular"
                color="blackOne"
                font="inter"
              >
                {item.description}
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SecondCard;
