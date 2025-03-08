"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ArrowDiagonal from "@/components/icons/arrowDiagonal";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Stroke from "@/components/icons/stroke";
import { descriptionSwiper } from "@/constant/data";

export default function LifeAtNexus() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % descriptionSwiper.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto flex flex-col items-start gap-10 max-w-[1113px] py-[177px] mxs:py-[80px] mlg:px-[20px] h-full">
      <div className="flex flex-col items-start gap-4 w-[457px] mxs:w-full">
        <Typography
          variant="p-l"
          font="inter"
          fontWeight="regular"
          color="blackOne"
          className="tracking-[0.42px] uppercase"
        >
          life at nexus
        </Typography>
        <Typography
          variant="h-xl"
          font="instrument"
          fontWeight="regular"
          color="blackOriginal"
          className="tracking-[-2.16px]"
        >
          Work. Play. Thrive
        </Typography>
        <Typography
          variant="p-xxl"
          font="inter"
          fontWeight="regular"
          color="blackOne"
          className="tracking-[-0.8px]"
        >
          More than a job, Nexus is a community of thinkers, builders, and
          dreamers. Here’s what our team says:
        </Typography>
      </div>
      <div className="w-full">
        <Stroke />
      </div>
      <div className="w-full overflow-hidden relative h-[216px] mxs:h-[400px]">
        {descriptionSwiper.map((items, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full ${
              index === currentIndex
                ? "animate-enter-from-left"
                : "animate-exit-to-right"
            }`}
          >
            <div className="w-full h-[216px] flex flex-col gap-[30px] items-start">
              <Typography
                variant="h-ls"
                font="instrument"
                fontWeight="regular"
                color="blackOriginal"
                className="tracking-[-1.08px]"
              >
                {items.description}
              </Typography>
              <div className="flex justify-between items-center self-stretch">
                <div className="flex items-center gap-[23px]">
                  <div>
                    <Image
                      src={items.photo}
                      alt="engineer"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <Typography
                      variant="h-s"
                      font="inter"
                      fontWeight="semibold"
                      color="blackOriginal"
                      className="tracking-[-0.48px] mxs:font-bold"
                    >
                      {items.name}
                    </Typography>
                    <Typography
                      variant="p-xxl"
                      font="inter"
                      fontWeight="regular"
                      color="blackOriginal"
                      className="tracking-[-0.4px]"
                    >
                      {items.title}
                    </Typography>
                  </div>
                </div>
                <div className="mxs:hidden">
                  <Button
                    children={"Join the waitlist"}
                    icon={<ArrowDiagonal />}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
