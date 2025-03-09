"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import NavBar from "../../../components/features/navbar";
import { Button } from "@/components/ui/button";
import ArrowDiagonal from "@/components/icons/arrowDiagonal";
import Queue from "@/components/icons/queue";
import BoltLogo from "@/components/icons/boltLogo";
import Boltshift from "@/components/icons/boltshift";
import LightLogo from "@/components/icons/lightLogo";
import LightBox from "@/components/icons/lightBox";
import SpheruleLogo from "@/components/icons/spheruleLogo";
import Sphrule from "@/components/icons/sphrule";
import GlobalLogo from "@/components/icons/globalLogo";
import GlobalBank from "@/components/icons/globalBank";
import NietzcheLogo from "@/components/icons/nietzcheLogo";
import Nietzche from "@/components/icons/nietzche";
import styles from "./hero.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imagePathArray } from "@/constant/data";
import { motion } from "framer-motion";

export default function HeroSection() {
  
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollerInnerRef = useRef<HTMLDivElement>(null);
  const companyScrollerRef = useRef<HTMLDivElement>(null);
  const companyScrollerInnerRef = useRef<HTMLDivElement>(null);

  const setupInfiniteScroll = (
    scrollerRef: React.RefObject<HTMLElement>,
    scrollerInnerRef: React.RefObject<HTMLElement>
  ) => {
    if (scrollerRef.current && scrollerInnerRef.current) {
      const scrollContent = Array.from(scrollerInnerRef.current.children);
      scrollContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerInnerRef.current?.appendChild(duplicatedItem);
      });
      scrollerRef.current.setAttribute("data-animated", "true");
    }
  };

  useEffect(() => {
    setupInfiniteScroll(scrollerRef, scrollerInnerRef);

    setupInfiniteScroll(companyScrollerRef, companyScrollerInnerRef);
  }, []);
  return (
    <div className="mx-auto max-w-[1400px] gap-[62px] flex flex-col items-center mxl:px-[20px] mxs:px-[0px]">
      <div className="relative h-[868px] w-full bg-[#000] rounded-[20px] mxs:rounded-none overflow-hidden">
        
        <Image
          src="/svg/backgroundpattern.svg"
          className="absolute"
          alt="background"
          layout="fill"
          objectFit="cover"
        />

        
        <div className="mmd:hidden">
          
          <motion.div
            className="absolute top-[150px] mlg:top-[120px] left-[50px] overflow-hidden w-[229px] h-[227px] mxl:left-[0px] mlg:w-[200px] mlg:h-[200px] mlg:left-[10px]"
            initial={{ x: -300, y: -300 }}
            animate={{ x: 50, y: 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src="/images/blackman1.png"
              alt="blackMan"
              width={229}
              height={227}
            />
          </motion.div>

          
          <motion.div
            className="absolute top-[150px] mlg:top-[120px] left-[1100px] overflow-hidden w-[229px] h-[227px] mlg:w-[200px] mlg:h-[200px] mxl:left-[950px] mlg:left-[750px] "
            initial={{ x: 500, y: -100 }}
            animate={{ x: 10, y: 50 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <Image
              src="/images/blackwoman.png"
              alt="blackwoman"
              width={229}
              height={227}
            />
          </motion.div>
          
          <motion.div
            className="absolute top-[400px] left-[150px] overflow-hidden w-[193.3px] h-[193.3px] mlg:w-[180px] mlg:h-[180px] mxl:left-[80px] mlg:left-[50px] mmd:left-[70px]"
            initial={{ x: -400, y: -50 }}
            animate={{ x: 50, y: 50 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <Image
              src="/images/shinningteethwoman.png"
              alt="mexicoWoman"
              width={193.3}
              height={193.3}
            />
          </motion.div>
         
          <motion.div
            className="absolute top-[600px] left-[1170px] overflow-hidden w-[229px] h-[227px]  mlg:w-[200px] mlg:h-[200px] mxl:left-[1000px] mlg:left-[800px] mmd:left-[640px]"
            initial={{ x: 300, y: 300 }}
            animate={{ x: 50, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <Image
              src="/images/indianMan.png"
              alt="indianMan"
              width={229}
              height={227}
            />
          </motion.div>

          
          <motion.div
            className="absolute top-[650px] left-[-100px] overflow-hidden w-[193.3px] h-[193.3px]"
            initial={{ x: -200, y: -200 }}
            animate={{ x: 20, y: 20 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <Image
              src="/images/asiaMan.png"
              alt="koreaMan"
              width={193.3}
              height={193.3}
            />
          </motion.div>

          <motion.div
            className="absolute top-[750px] left-[600px] overflow-hidden w-[229px] h-[227px] mlxg:left-[530px] mlg:w-[200px] mlg:h-[200px] mlg:left-[400px] mmd:left-[270px]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <Image
              src="/images/spanishwoman.png"
              alt="spainishWoman"
              width={229}
              height={227}
            />
          </motion.div>
        </div>
       
        <div className="relative w-full pt-[50px]">
          <NavBar />
        </div>
       
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          
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

        
          <div className="mt-[10px]">
            <Button
              size="lg"
              children={"Explore Open Roles"}
              icon={<ArrowDiagonal />}
            />
          </div>
        </div>

        
        <div className="absolute bottom-0 w-full mxxl:hidden mmd:block 2xl:hidden 3xl:hidden">
          <div className={styles.scroller} ref={scrollerRef}>
            <div className={styles.innerScroller} ref={scrollerInnerRef}>
              {imagePathArray.map((items) => (
                <Image
                  key={items.id}
                  src={items.path}
                  alt={items.name}
                  width={127}
                  height={113}
                  className={styles.scrollerItem}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

     
      <div className="w-full flex items-center justify-between px-[30px] mxl:px-0 mlg:flex-col mxl:gap-[10px] mmd:block">
        <div className="w-[291px] mxl:text-center mmd:mx-auto">
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
        <div className={styles.scroller} ref={companyScrollerRef}>
          <div className={styles.innerScroller} ref={companyScrollerInnerRef}>
            {[
              { logo: <BoltLogo />, name: <Boltshift /> },
              { logo: <LightLogo />, name: <LightBox /> },
              { logo: <SpheruleLogo />, name: <Sphrule /> },
              { logo: <GlobalLogo />, name: <GlobalBank /> },
              { logo: <NietzcheLogo />, name: <Nietzche /> },
            ].map((company, index) => (
              <div key={index} className={styles.companyItem}>
                <div className="flex items-center gap-[9.416px]">
                  {company.logo}
                  {company.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
