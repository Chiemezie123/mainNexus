import React from "react";
import Logo from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import ArrowDiagonal from "@/components/icons/arrowDiagonal";
import { Typography } from "@/components/ui/typography";
import Hamburger from "@/components/icons/hamburger";

export default function NavBar() {

  return (
    <div className="relative flex justify-between items-center max-w-[1218px] h-[46px] mx-auto mxl:px-[50px] mxs:px-[20px]">
      <div>
        <Logo />
      </div>
      <div className="mxs:block mxxl:hidden 2xl:hidden">
        <Hamburger />
      </div>
      <div className="flex items-center gap-[47px] mxs:hidden">
        <div className="flex items-center gap-[38px]">
          <Typography
            color="whiteOne"
            variant="p-xl"
            font="inter"
            fontWeight="regular"
            className="leading-normal"
          >
            Mission
          </Typography>
          <Typography
            color="whiteOne"
            variant="p-xl"
            font="inter"
            fontWeight="regular"
            className="leading-normal"
          >
            Careers
          </Typography>
          <Typography
            color="whiteOne"
            variant="p-xl"
            font="inter"
            fontWeight="regular"
            className="leading-normal"
          >
            Contact
          </Typography>
        </div>
        <div className="w-full">
          <Button children={"Join the waitlist"} icon={<ArrowDiagonal/>} />
        </div>
      </div>
    </div>
  );
}
