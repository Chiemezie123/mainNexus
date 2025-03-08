"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import ArrowDiagonal from "@/components/icons/arrowDiagonal";
import FourthCard from "@/components/ui/card/fourthCard";
import { AnimationCards } from "@/constant/data";
import Lenis from "@studio-freight/lenis";

export default function HiringProcess() {
  const elementRef = useRef<HTMLDivElement>(null);
  const container = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={container}
      className="sticky w-full top-[0px] mx-auto flex flex-col self-stretch bg-lemon isolate"
    >
      <div className="top-[0px] z-10 w-full flex flex-col items-center self-stretch   pt-[125px] gap-[504px] h-[511px] sticky ">
        <Image
          src="/svg/backgroundpattern.svg"
          className="absolute -z-1"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
        <div className="flex flex-col z-[1] items-center gap-5 w-[491px] mxs:w-full mxs:max-w-[400px] mxxss:w-full mxxss:max-w-[300px]">
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
            className="tracking-[-2.16px] mxs:max-w-[328px] mxxss:max-w-[300px] mxxss:text-center"
          >
            Your Journey to Nexus
          </Typography>
          <Typography
            variant="p-xxl"
            font="inter"
            fontWeight="regular"
            color="blackOne"
            align="center"
            className="tracking-[-0.8px] mxs:max-w-[300px]"
          >
            Our hiring process is straightforward, transparent, and designed to
            find the best fit for you.
          </Typography>
        </div>
      </div>

      {AnimationCards.map((items, index) => (
        <FourthCard key={index} ref={elementRef} {...items} />
      ))}

      <div className="flex flex-col h-screen sticky  bg-black/50 z-40 top-[0px] w-full justify-end items-center self-stretch pt-[738px] mlg:pt-[600px] gap-[46px]">
        <Button
          children={"Start Your Journey"}
          icon={<ArrowDiagonal />}
          size="lg"
          className="my-6"
        />
      </div>
      <div className="h-[300vh] mxs:h-[300vh]" />
    </div>
  );
}
