"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import ArrowDiagonal from "@/assets/svg/arrowDiagonal";
import FourthCard from "@/components/card/fourthCard";
import { AnimationCards } from "@/constant/data";
// import "./fifthSection.module.css";

export default function FifthSection() {
  const elementRef = useRef<HTMLDivElement>(null);
  const [distanceFromTop, setDistanceFromTop] = useState(0);
  const [addClassName, setAddClassName] = useState<"fixed" | "relative">(
    "relative"
  ); // Explicitly type the state

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        setDistanceFromTop(rect.top);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative mx-auto flex flex-col self-stretch">
      <div className="absolute top-0 w-full flex flex-col items-center self-stretch pt-[125px] gap-[504px] h-[511px] border">
        <Image
          src="/images/Background pattern.svg"
          className="absolute z-1"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
        <div className="flex flex-col items-center gap-5 w-[491px]">
          <Typography
            variant="p-l"
            font="inter"
            fontWeight="regular"
            color="blackOne"
            className="tracking-[0.42px] uppercase"
          >
            hiring process
          </Typography>
          <Typography
            variant="h-xl"
            font="instrument"
            fontWeight="regular"
            color="blackOriginal"
            className="tracking-[-2.16px]"
          >
            Your Journey to Nexus
          </Typography>
          <Typography
            variant="p-xxl"
            font="inter"
            fontWeight="regular"
            color="blackOne"
            align="center"
            className="tracking-[-0.8px]"
          >
            Our hiring process is straightforward, transparent, and designed to
            find the best fit for you.
          </Typography>
        </div>
      </div>
      <div className=" border flex justify-center items-center flex-col">
        {AnimationCards.map((items, index) => (
          <div
            key={index}
            className="flex flex-col  pt-[352.945px] justify-end items-center gap-[118.061px] self-stretch"
          >
            <FourthCard ref={elementRef} {...items} />
          </div>
        ))}
        <div className="flex flex-col justify-end items-center self-stretch pt-[738px] gap-[46px]">
          <Button
            children={"Start Your Journey"}
            icon={<ArrowDiagonal />}
            size="lg"
          />
        </div>
      </div>
    </div>
  );
}


//   className="flex flex-col pt-[352.945px] justify-end items-center gap-[118.061px] self-stretch"