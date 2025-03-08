import { Typography } from "@/components/ui/typography";
import React from "react";
import { roleCardArray } from "@/constant/data";
import ThirdCard from "@/components/ui/card/thirdCard";

export default function OpenPositions() {
  return (
    <div className="w-full mlg:px-[20px] mxs:px-0">
      <div className="mx-auto max-w-[1400px] h-[982px] mxs:h-full flex justify-end items-center pt-[85px] mlg:pt-[40px] pr-[124px] mlg:pr-[62px] pb-[57px] pl-[164px] mlg:pl-[62px] bg-[#0D0F0E] rounded-[20px]  mxs:rounded-none mxs:py-[80px] mxs:px-[20px]">
        <div className="w-full h-full flex flex-col mxxl:gap-[82px] mlg:gap-[62px] mxs:gap-[38px] 3xl:gap-[82px]">
          <div className="flex flex-col mxxl:gap-[13px] mlg:gap-[10px] items-start">
            <div className="w-full">
              <Typography
                variant="p-l"
                font="inter"
                fontWeight="regular"
                color="whiteOne"
                className="tracking-[0.42px] uppercase"
              >
                Open Positions
              </Typography>
            </div>
            <div className="flex items-center justify-between mxs:flex-col">
              <div className="w-full">
                <Typography
                  variant="h-xl"
                  font="instrument"
                  fontWeight="regular"
                  color="whiteOne"
                  className="italic tracking-[-2.16px]"
                >
                  Find Your Perfect Role
                </Typography>
              </div>
              <div className=" h-[64px]">
                <Typography
                  variant="p-xxl"
                  font="inter"
                  fontWeight="regular"
                  color="greyOne"
                  className="tracking-[-0.8px]"
                >
                  We’re looking for passionate minds to shape the future. Browse
                  our current openings:
                </Typography>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col">
            {roleCardArray.map((role, index) => (
              <ThirdCard
                key={index}
                jobTitle={role.jobTitle}
                icon={role.icon}
                location={role.location}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
