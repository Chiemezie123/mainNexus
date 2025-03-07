'use client'
import React,{useRef} from "react";
import Image from "next/image";
import { Typography } from "@/components/typography";
import NavBar from "../navbar";
import { Button } from "@/components/ui/button";
import ArrowDiagonal from "@/assets/svg/arrowDiagonal";
import Queue from "@/assets/svg/queue";
import BoltLogo from "@/assets/svg/boltLogo";
import Boltshift from "@/assets/svg/boltshift";
import LightLogo from "@/assets/svg/lightLogo";
import LightBox from "@/assets/svg/lightBox";
import SpheruleLogo from "@/assets/svg/spheruleLogo";
import Sphrule from "@/assets/svg/sphrule";
import GlobalLogo from "@/assets/svg/globalLogo";
import GlobalBank from "@/assets/svg/globalBank";
import NietzcheLogo from "@/assets/svg/nietzcheLogo";
import Nietzche from "@/assets/svg/nietzche";
import styles from  './hero.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { imagePathArray } from "@/constant/data";

export default function HeroSection() {
  const swiperContainerRef = useRef(null);

  // Touch event variables
  let startX = 0;
  let scrollLeft = 0;

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
    scrollLeft = swiperContainerRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const x = e.touches[0].clientX;
    const walk = (x - startX) * 2; // Adjust swipe sensitivity
    swiperContainerRef.current.scrollLeft = scrollLeft - walk;
  };
  return (
    <div className="mx-auto max-w-[1400px] gap-[62px] flex flex-col items-center mxl:px-[20px] mxs:px-[0px]">
    <div className="relative h-[868px] w-full bg-[#000] rounded-[20px] mxs:rounded-none overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/Background pattern.svg"
        className="absolute"
        alt="background"
        layout="fill"
        objectFit="cover"
      />

      {/* Images with Overflow Hidden */}
      <div className="mxs:hidden">
        {/* Black Man */}
        <div className="absolute top-[150px] left-[50px] overflow-hidden w-[229px] h-[227px] mlg:w-[200px] mlg:h-[200px] mlg:left-[20px]">
          <Image
            src="/images/blackman1.png"
            alt="blackMan"
            width={229}
            height={227}
            className="animate-slide-in opacity-0"
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        {/* Black Woman */}
        <div className="absolute top-[150px] left-[1100px] overflow-hidden w-[229px] h-[227px] mlg:w-[200px] mlg:h-[200px] mlg:left-[790px] mmd:left-[530px]">
          <Image
            src="/images/blackwoman.png"
            alt="blackwoman"
            width={229}
            height={227}
            className="animate-slide-in opacity-0"
            style={{ animationDelay: "1s" }}
          />
        </div>
        {/* Shinning Teeth Woman */}
        <div className="absolute top-[400px] left-[150px] overflow-hidden w-[193.3px] h-[193.3px] mlg:w-[180px] mlg:h-[180px] mmd:left-[70px]">
          <Image
            src="/images/shinningteethwoman.png"
            alt="mexicoWoman"
            width={193.3}
            height={193.3}
            className="animate-slide-in opacity-0"
            style={{ animationDelay: "1.5s" }}
          />
        </div>
        {/* Indian Man */}
        <div className="absolute top-[600px] left-[1270px] overflow-hidden w-[229px] h-[227px] mxl:left-[1200px] mlxg:left-[1100px] mlg:w-[200px] mlg:h-[200px] mlg:left-[900px] mmd:left-[640px]">
          <Image
            src="/images/indianMan.png"
            alt="indianMan"
            width={229}
            height={227}
            className="animate-slide-in opacity-0"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Asia Man */}
        <div className="absolute top-[650px] left-[-100px] overflow-hidden w-[193.3px] h-[193.3px]">
          <Image
            src="/images/asiaMan.png"
            alt="koreaMan"
            width={193.3}
            height={193.3}
            className="animate-slide-in opacity-0"
            style={{ animationDelay: "2.5s" }}
          />
        </div>

        {/* Spanish Woman */}
        <div className="absolute top-[750px] left-[600px] overflow-hidden w-[229px] h-[227px] mlxg:left-[530px] mlg:w-[200px] mlg:h-[200px] mlg:left-[400px] mmd:left-[270px]">
          <Image
            src="/images/spanishwoman.png"
            alt="spainishWoman"
            width={229}
            height={227}
            className="animate-slide-in opacity-0"
            style={{ animationDelay: "3s" }}
          />
        </div>
      </div>
      {/* NavBar */}
      <div className="relative w-full pt-[50px]">
        <NavBar />
      </div>
      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Heading */}
        <div className="relative w-[674px] mb-[14px] mxs:w-[320px]">
          <div className="absolute inset-0 flex left-0 top-1/2 mxs:hidden">
            <Queue />
          </div>
          <Typography
            variant="h-xxl"
            color="whiteOne"
            font="instrument"
            fontWeight="regular"
            className="italic mxs:tracking-[-1.92px] mxs:text-center"
            align="center"
          >
            Join us in building the future of tech
          </Typography>
        </div>

        {/* Paragraph */}
        <div className="max-w-[550px] h-[64px] mb-[27px] mxs:w-[300px]">
          <Typography
            variant="p-xxl"
            color="greyOne"
            align="center"
            font="inter"
            fontWeight="regular"
            className="mxs:tracking-[-0.64px]"
          >
            We’re on a mission to innovate, disrupt, and redefine what’s
            possible. Ready to take your career to the next level?
          </Typography>
        </div>

        {/* Button */}
        <div className="mt-[10px]">
          <Button
            size="lg"
            children={"Explore Open Roles"}
            icon={<ArrowDiagonal />}
          />
        </div>
      </div>

      {/* Swiper Section */}
      {/* <div
        className={styles.swiperContainer}
        ref={swiperContainerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {imagePathArray.map((item, index) => (
          <div key={index} className={styles.swiperSlide}>
            <Image
              src={item.path}
              alt={item.name}
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
        ))}
      </div> */}
    </div>

    {/* Backed by Companies Section */}
    <div className="w-full flex items-center justify-between px-[30px] mxl:px-0 mlg:flex-col mxl:gap-[10px] mmd:hidden">
      <div className="w-[291px] mxl:text-center">
        <Typography
          variant="p-xxl"
          color="blackOriginal"
          fontWeight="regular"
          font="inter"
          className="leading-[120%] mxl:text-center"
        >
          Backed by the best companies and visionary angels
        </Typography>
      </div>
      <div className="flex items-start gap-[35px] mxl:px-[10px]">
        <div className="flex items-center gap-[9.416px]">
          <BoltLogo />
          <Boltshift />
        </div>
        <div className="flex items-center gap-[9.416px]">
          <LightLogo />
          <LightBox />
        </div>
        <div className="flex items-center gap-[9.416px]">
          <SpheruleLogo />
          <Sphrule />
        </div>
        <div className="flex items-center gap-[9.416px]">
          <GlobalLogo />
          <GlobalBank />
        </div>
        <div className="flex items-center gap-[9.416px]">
          <NietzcheLogo />
          <Nietzche />
        </div>
      </div>
    </div>
  </div>

  );
}