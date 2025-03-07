'use client'
import React, { useState } from "react";
import Facebook from "@/assets/svg/facebook";
import Inbox from "@/assets/svg/inbox";
import Instagram from "@/assets/svg/instagram";
import LinkedIn from "@/assets/svg/linkedIn";
import Location from "@/assets/svg/location";
import Messenger from "@/assets/svg/messenger";
import Nexus from "@/assets/svg/nexus";
import Stroke from "@/assets/svg/stroke";
import Twitter from "@/assets/svg/twitter";
import Up from "@/assets/svg/up";
import Whatsapp from "@/assets/svg/whatsapp";
import Logo from "@/components/logo";
import { Typography } from "@/components/typography";
import Down from "@/assets/svg/down";

export default function Footer() {
  // State to manage visibility of each section
  const [isCompanyVisible, setCompanyVisible] = useState(true);
  const [isResourcesVisible, setResourcesVisible] = useState(true);
  const [isLearnVisible, setLearnVisible] = useState(true);

  // Toggle functions for each section
  const toggleCompany = () => setCompanyVisible(!isCompanyVisible);
  const toggleResources = () => setResourcesVisible(!isResourcesVisible);
  const toggleLearn = () => setLearnVisible(!isLearnVisible);

  return (
    <div className="mx-auto flex flex-col items-center border max-w-[1440px] pb-[75.45px]">
      <div
        className="max-w-[1440px] mx-auto pt-[131.81px] pb-[42.81px]"
        style={{
          opacity: 0.2,
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), url(<path-to-image>) lightgray 0% 0% / 25px 25px repeat`,
          mixBlendMode: "luminosity",
          backdropFilter: "blur(16px)",
        }}
      >
        <Nexus />
      </div>

      <div className="flex flex-col items-start gap-16 mlg:px-[20px]">
        <div className="flex items-start justify-between self-stretch mxs:flex-col mxs:gap-[32px]">
          <div className="flex flex-col items-start gap-[23px] w-[426px] mmd:w-full">
            <Logo />
            <div className="w-full">
              <Typography
                variant="h-lm"
                font="instrument"
                fontWeight="regular"
                color="whiteOne"
                className="italic tracking-[-1.2px]"
              >
                We build cutting-edge solutions that empower developers,
                businesses, and communities worldwide.
              </Typography>
            </div>
          </div>
          <div className="flex items-start gap-12 w-[541px] mmd:w-full mxs:flex-col mxs:gap-0">
            {/* Company Section */}
            <div className="flex flex-col items-start gap-5 flex-1 mxs:w-full  mxs:border-t mxs:border-b mxs:border-[#1A1A1A] mxs:pt-[20px] mxs:pb-[20px]">
              <div
                className="mxs:flex mxs:items-center mxs:justify-between mxs:w-full cursor-pointer"
                 // Toggle visibility on click
              >
                <Typography
                  variant="h-c"
                  font="inter"
                  fontWeight="medium"
                  color="greyOne"
                >
                  Company
                </Typography>
                <div className="mxxl:hidden mxs:block" onClick={toggleCompany}>
                {  isCompanyVisible ?<Up/> : <Down/>}
                </div>
              </div>
              {isCompanyVisible && ( // Conditionally render content
                <div className="flex flex-col items-start gap-[1rem]">
                  <Typography
                    variant="p-xl"
                    font="inter"
                    fontWeight="regular"
                    color="whiteOne"
                  >
                    About
                  </Typography>
                  <div className="flex items-center gap-[8px]">
                    <Typography
                      variant="p-xl"
                      font="inter"
                      fontWeight="regular"
                      color="whiteOne"
                    >
                      Careers
                    </Typography>
                    <div className="flex items-center justify-center p-[2px] gap-[10px] rounded-2xl border border-black bg-[rgba(200,239,125,0.10)]">
                      <Typography
                        color="lemon"
                        fontWeight="medium"
                        className="text-[12px] leading-[18px]"
                      >
                        We’re hiring
                      </Typography>
                    </div>
                  </div>
                  <Typography
                    variant="p-xl"
                    font="inter"
                    fontWeight="regular"
                    color="whiteOne"
                  >
                    Press & Media
                  </Typography>
                </div>
              )}
            </div>

            {/* Resources Section */}
            <div className="flex flex-col items-start gap-5 flex-1 mxs:w-full  mxs:border-t mxs:border-b mxs:border-[#1A1A1A] mxs:pt-[20px] mxs:pb-[20px]">
              <div
                className="mxs:flex mxs:items-center mxs:justify-between mxs:w-full cursor-pointer"
                // Toggle visibility on click
              >
                <Typography
                  variant="h-c"
                  font="inter"
                  fontWeight="medium"
                  color="greyOne"
                >
                  Resources
                </Typography>
                <div className="mxxl:hidden mxs:block"  onClick={toggleResources}>
                {  isResourcesVisible ?<Up/> : <Down/>}
                </div>
              </div>
              {isResourcesVisible && ( // Conditionally render content
                <div className="flex flex-col items-start gap-[1rem]">
                  <Typography
                    variant="p-xl"
                    font="inter"
                    fontWeight="regular"
                    color="whiteOne"
                  >
                    Pricing
                  </Typography>
                  <Typography
                    variant="p-xl"
                    font="inter"
                    fontWeight="regular"
                    color="whiteOne"
                  >
                    Support
                  </Typography>
                  <Typography
                    variant="p-xl"
                    font="inter"
                    fontWeight="regular"
                    color="whiteOne"
                  >
                    Sales
                  </Typography>
                  <Typography
                    variant="p-xl"
                    font="inter"
                    fontWeight="regular"
                    color="whiteOne"
                  >
                    Community
                  </Typography>
                  <Typography
                    variant="p-xl"
                    font="inter"
                    fontWeight="regular"
                    color="whiteOne"
                  >
                    Security
                  </Typography>
                </div>
              )}
            </div>

            {/* Learn Section */}
            <div className="flex flex-col items-start gap-5 flex-1 mxs:w-full mxs:border-t mxs:border-b mxs:border-[#1A1A1A] mxs:pt-[20px] mxs:pb-[20px]">
              <div
                className="mxs:flex mxs:items-center mxs:justify-between mxs:w-full cursor-pointer"
               
              >
                <Typography
                  variant="h-c"
                  font="inter"
                  fontWeight="medium"
                  color="greyOne"
                >
                  Learn
                </Typography>
                <div className="mxxl:hidden mxs:block"  onClick={toggleLearn} >
                {  isLearnVisible ? <Up/> : <Down/>}
                </div>
              </div>
              {isLearnVisible && ( // Conditionally render content
                <div className="flex flex-col items-start gap-[1rem]">
                  <Typography
                    variant="p-xl"
                    font="inter"
                    fontWeight="regular"
                    color="whiteOne"
                  >
                    Blog
                  </Typography>
                  <Typography
                    variant="p-xl"
                    font="inter"
                    fontWeight="regular"
                    color="whiteOne"
                  >
                    FAQ’s
                  </Typography>
                  <Typography
                    variant="p-xl"
                    font="inter"
                    fontWeight="regular"
                    color="whiteOne"
                  >
                    How-Tos
                  </Typography>
                  <Typography
                    variant="p-xl"
                    font="inter"
                    fontWeight="regular"
                    color="whiteOne"
                  >
                    Testimonials
                  </Typography>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Rest of the footer content */}
        <div className="flex flex-col items-start gap-[1.5rem]">
          <div className="w-full mxs:hidden">
            <Stroke />
          </div>
          <div className="w-full flex items-center justify-between mxs:flex-col mxs:gap-[32px] mxs:items-start">
            <div className="flex flex-col items-start gap-[8px]">
              <div className="flex items-center gap-[12px]">
                <Location />
                <Typography
                  variant="p-xl"
                  font="inter"
                  fontWeight="medium"
                  color="whiteOne"
                >
                  San Francisco, CA - 🌍 Remote-friendly
                </Typography>
              </div>
              <div className="flex items-center gap-[12px]">
                <Inbox />
                <Typography
                  variant="p-xl"
                  font="inter"
                  fontWeight="medium"
                  color="whiteOne"
                >
                  careers@nexustech.com
                </Typography>
              </div>
            </div>
            <div className="flex items-end gap-[6.332px]">
              <Twitter />
              <Facebook />
              <LinkedIn />
              <Instagram />
              <Whatsapp />
              <Messenger />
            </div>
          </div>
          <div className="w-full mxs:hidden">
            <Stroke />
          </div>
        </div>

        <div className="flex items-start justify-between w-full mxs:flex-col mxs:gap-[32px]">
          <Typography
            variant="p-xl"
            font="inter"
            fontWeight="regular"
            color="whiteOne"
            className="tracking-[-0.64px]"
          >
            © 2025 Nexus Technologies. All rights reserved.
          </Typography>
          <Typography
            variant="p-xl"
            font="inter"
            fontWeight="regular"
            color="whiteOne"
            className="tracking-[-0.64px]"
          >
            Privacy Policy | Terms of Service
          </Typography>
        </div>
        <div className="w-[998px] mmd:w-full flex flex-col gap-[1rem]">
          <Typography
            font="inter"
            fontWeight="regular"
            color="greyOne"
            variant="p-xl"
            className="tracking-[-0.64px]"
          >
            1 This 5X efficiency factor is based on data from the industry’s
            most comprehensive performance analysis—Nexus Tech State of
            Engineering 2024, highlighting that traditional development cycles
            take an average of 150 days to ship features, while Nexus’ AI-driven
            workflow delivers 85% of releases in under 30 days, making it at
            least 5X faster.
          </Typography>
          <Typography
            font="inter"
            fontWeight="regular"
            color="greyOne"
            variant="p-xl"
            className="tracking-[-0.64px]"
          >
            2 The Productivity Impact Study of Nexus Engineering Suite, a
            commissioned study conducted by Innovate Research, 2023. Findings
            are based on a composite organization derived from real customer
            interviews.
          </Typography>
          <Typography
            font="inter"
            fontWeight="regular"
            color="greyOne"
            variant="p-xl"
            className="tracking-[-0.64px]"
          >
            3 Nexus Technologies now powers over 500,000 developers worldwide.
            Read the blog post
          </Typography>
        </div>
      </div>
    </div>
  );
}