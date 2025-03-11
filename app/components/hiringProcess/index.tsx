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
      <div className="top-[0px] z-10 w-full flex flex-col items-center self-stretch pt-[125px] mxs:pt-[100px] gap-[504px] h-[511px]  sticky"
        // style={{
        //   backgroundImage: "url('/svg/backgroundpattern.svg')",
        //   backgroundSize: "cover", // Ensures the image covers the container
        //   backgroundPosition: "center", // Centers the image
        //   backgroundRepeat: "no-repeat", // Prevents the image from repeating
        //   backgroundColor:"#b7d8b4"
        // }}
      >
      <img
    src="/images/Backgroundpattern2.png"
    alt="background"
    className="absolute inset-0 w-full h-full object-cover z-100 "
  />
          {/* <div className="relative inset-0 w-full h-full bg-red-500">
          <Image
            src="/svg/backgroundpattern.svg"
            className="absolute z-0"
            alt="background"
            layout="fill"
            objectFit="cover"
          />
          </div> */}
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

<div
  className="flex flex-col h-screen sticky  z-40 top-[0px] w-full justify-end items-center self-stretch pt-[700px] mlg:pt-[600px] mxs:pt-[500px] gap-[46px]"
  style={{background:"linear-gradient(180deg, rgba(200, 239, 125, 0.00) 0%, #C8EF7D 70%)",}}
>
  <Button
    children={"Start Your Journey"}
    icon={<ArrowDiagonal />}
    size="lg"
    className="my-6"
  />
</div>
      <div className="h-[300vh] mxs:h-[500vh] mxxs:h-[400vh] 3xl:[50vh]  mxxxs:h-[500vh]" />
    </div>
  );
}
