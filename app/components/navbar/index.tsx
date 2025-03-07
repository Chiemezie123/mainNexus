import React from 'react'
import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import ArrowDiagonal from '@/assets/svg/arrowDiagonal'
import { Typography } from '@/components/typography'
import Hamburger from '@/assets/svg/hamburger'

export default function NavBar() {
  return (
    <div className='relative flex justify-between items-center max-w-[1218px] h-[46px] mx-auto mxl:px-[50px] mxs:px-[20px]'>
      <div>
        <Logo />
      </div>
      <div className='mxs:block mxxl:hidden' >
        <Hamburger/>
      </div>
      <div className='flex items-center gap-[47px] mxs:hidden'>
        <div className='flex items-center gap-[38px]'>
        <Typography color="whiteOne" variant="p-xl" font="inter" fontWeight="regular" className='leading-normal'>
            Mission
        </Typography>
        <Typography color="whiteOne" variant="p-xl" font="inter" fontWeight="regular" className='leading-normal'>
             Careers
        </Typography>
        <Typography  color="whiteOne" variant="p-xl" font="inter" fontWeight="regular" className='leading-normal'>
              Contact
        </Typography>
        </div>
        <div>
          <Button  children={"Join the waitlist"} icon={<ArrowDiagonal/>} />
        </div>
      </div>
    </div>
  )
}
