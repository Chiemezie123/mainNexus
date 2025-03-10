"use client";
import React, { useEffect, useRef, useState } from "react";
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
import { motion, AnimatePresence } from "framer-motion";

const fixedPositions = [
  {
    id: "position1",
    desktop: { top: 150, left: 50, width: 220, height: 220 },
    mlg: { top: 120, left: 10, width: 200, height: 200 },
    mxl: { top: 150, left: 0, width: 229, height: 227 },
    inital: { x: -300, y: -300 },
    animate: { x: 50, y: 50 },
  },
  {
    id: "position2",
    desktop: { top: 150, left: 1100, width: 220, height: 220 },
    mlg: { top: 120, left: 750, width: 200, height: 200 },
    mxl: { top: 150, left: 950, width: 229, height: 227 },
    inital: { x: 500, y: -100 },
    animate: { x: 10, y: 50 },
  },
  {
    id: "position3",
    desktop: { top: 400, left: 150, width: 220, height: 220 },
    mlg: { top: 400, left: 50, width: 180, height: 180 },
    mxl: { top: 400, left: 80, width: 193.3, height: 193.3 },
    inital: { x: -400, y: -50 },
    animate: { x: 50, y: 50 },
  },
  {
    id: "position4",
    desktop: { top: 600, left: 1170, width: 220, height: 220 },
    mlg: { top: 600, left: 800, width: 200, height: 200 },
    mxl: { top: 600, left: 1000, width: 229, height: 227 },
    inital: { x: 300, y: 300 },
    animate: { x: 50, y: 0 },
  },
  {
    id: "position5",
    desktop: { top: 650, left: -100, width: 220, height: 220 },
    mlg: { top: 650, left: -100, width: 180, height: 180 },
    mxl: { top: 650, left: -100, width: 193.3, height: 193.3 },
    inital: { x: -200, y: -200 },
    animate: { x: 20, y: 20 },
  },
  {
    id: "position6",
    desktop: { top: 750, left: 600, width: 220, height: 220 },
    mlg: { top: 750, left: 400, width: 200, height: 200 },
    mxl: { top: 750, left: 530, width: 229, height: 227 },
    inital: { opacity: 0, y: 50, scale: 0.8 },
    animate: { opacity: 1, y: 0, scale: 1 },
  },
];

const images = [
  { id: 1, src: "/images/blackmna5.png", alt: "blackMan" },
  { id: 2, src: "/images/blackwoman4.png", alt: "blackwoman" },
  { id: 3, src: "/images/smilingWoman4.png", alt: "mexicoWoman" },
  { id: 4, src: "/images/indianMan4.png", alt: "indianMan" },
  { id: 5, src: "/images/kungfu4.png", alt: "koreaMan" },
  { id: 6, src: "/images/spanishwoman4.png", alt: "spainishWoman" },
];

export default function HeroSection() {

  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollerInnerRef = useRef<HTMLDivElement>(null);
  const companyScrollerRef = useRef<HTMLDivElement>(null);
  const companyScrollerInnerRef = useRef<HTMLDivElement>(null);

  const [imageAssignments, setImageAssignments] = useState(() => {
    const assignments: { [key: string]: { id: number; src: string; alt: string } } = {};
    fixedPositions.forEach((pos, index) => {
      assignments[pos.id] = images[index % images.length];
    });
    return assignments;
  });

  const swapImages = () => {
    setImageAssignments((prevAssignments) => {
      const newAssignments = { ...prevAssignments };

      const imageIds = Object.values(newAssignments).map((img) => img.id);

      const rotatedImageIds = [...imageIds.slice(1), imageIds[0]];

      fixedPositions.forEach((pos, index) => {
        newAssignments[pos.id] = images.find(
          (img) => img.id === rotatedImageIds[index]
        );
      });

      return newAssignments;
    });
  };

  useEffect(() => {
    const interval = setInterval(swapImages, 4000);
    return () => clearInterval(interval);
  }, []);

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
          <AnimatePresence>
            {fixedPositions.map((pos) => (
              <motion.div
                key={pos.id}
                className="absolute overflow-hidden"
                style={{
                  top: `${pos.desktop.top}px`,
                  left: `${pos.desktop.left}px`,
                  width: `${pos.desktop.width}px`,
                  height: `${pos.desktop.height}px`,
                }}
                initial={pos.inital}
                animate={pos.animate}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              >
                <Image
                  src={imageAssignments[pos.id].src}
                  alt={imageAssignments[pos.id].alt}
                  width={pos.desktop.width}
                  height={pos.desktop.height}
                />
              </motion.div>
            ))}
          </AnimatePresence>
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
