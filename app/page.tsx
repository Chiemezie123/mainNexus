import React from "react";
import HeroSection from "./components/heroSection";
import WhyWorKItUs from "./components/whyworkwithus";
import OpenPositions from "./components/openpositions";
import LifeAtNexus from "./components/lifeAtNexus";
import HiringProcess from "./components/hiringProcess";
import Footer from "./components/footer";

export default function Page() {
  return (
    <main className="flex flex-col items-center w-full bg-[#fff] pt-[20px] mxs:pt-0 ">
      <div className="w-full">
        <HeroSection />
      </div>
      <div className="w-full">
        <WhyWorKItUs/>
      </div>
      <div className="w-full">
        <OpenPositions/>
      </div>
      <div className="w-full">
        <LifeAtNexus/>
      </div>
      <HiringProcess/>
      <Footer />
    </main>
  );
}
