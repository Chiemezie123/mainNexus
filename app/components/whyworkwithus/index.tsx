import { Typography } from "@/components/ui/typography";
import React from "react";
import SecondCard from "@/components/ui/card/secondCard";
import { secondCardArray, firstCardArray } from "@/constant/data";
import FirstCard from "@/components/ui/card/firstCard";

export default function WhyWorKItUs() {

  return (
    <div className="flex max-w-[1114px] flex-col items-start gap-[143px] mxs:gap-[80px] mx-auto">
      <div className="w-full flex flex-col items-start gap-4 pt-[151px] mxs:pt-[80px] self-stretch mlg:px-[20px]">
        <div className="w-full">
          <Typography
            variant="p-l"
            font="inter"
            fontWeight="regular"
            color="blackOne"
            className="mxs:text-center"
          >
            Why work with us?
          </Typography>
        </div>
        <div className="w-full flex items-start gap-[29px] mlg:gap-[18px] self-stretch mxs:flex-col">
          <div className="flex flex-col items-start gap-4 w-[800px] mlg:w-[400px] mmd:w-[300px] mxs:w-full mxs:text-center">
            <Typography
              variant="h-xl"
              font="instrument"
              fontWeight="regular"
              color="blackOriginal"
              className="italic tracking-[-2.16px] mxs:text-center"
            >
              A workplace that works for you
            </Typography>
            <div className="w-[387px] mmd:w-[300px] mxs:w-full">
              <Typography
                color="blackOne"
                variant="p-xxl"
                font="inter"
                fontWeight="regular"
                className="mxs:text-center"
              >
                At Nexus Technologies, we foster a culture of innovation,
                collaboration, and growth. Here’s why you’ll love being part of
                our team
              </Typography>
            </div>
          </div>
          <div className="flex gap-[30px] mlg:gap-[10px] mxs:gap-[1rem] flex-wrap">
            {firstCardArray.map((item, index) => (
              <FirstCard
                key={item.id}
                firstText={item.icon}
                secondText={item.header}
                thirdText={item.description}
                backgroundColor={item.bgColor}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[70px] mlg:gap-[40px] pb-[190px] mxs:pb-[80px] self-stretch mlg:px-[20px] mxs:w-full">
        <div className="flex flex-col items-start gap-4 w-[429px] mxs:w-full">
          <div>
            <Typography
              variant="p-l"
              font="inter"
              fontWeight="regular"
              color="blackOne"
            >
              Benefits
            </Typography>
          </div>
          <div>
            <Typography
              variant="h-xl"
              font="instrument"
              fontWeight="regular"
              className="italic"
              color="blackOriginal"
            >
              Values we live by
            </Typography>
          </div>
        </div>
        <div className="w-full  grid grid-cols-3 gap-y-[64px] gap-x-[70px] mlg:gap-y-[40px] mlg:gap-x-[40px] mxs:flex mxs:flex-col mxs:gap-[1.5rem]">
          <SecondCard data={secondCardArray} />
        </div>
      </div>
    </div>
  );
}
