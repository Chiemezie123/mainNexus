import React from 'react'
import { Typography } from '../typography'
import Dot from '@/assets/svg/dot'

export default function Logo() {
  return (
    <div className='flex flex-col items-start  w-[5.0625rem]'>
        <div>
            <Typography color="whiteOne" font="inter" fontWeight="bold" className='text-[27.423px] leading-normal'>
            Nexus
            </Typography>
        </div>
        <div  className='flex items-center gap-[4px]'>
            <Dot/>
            <Typography  color="lemon" font="inter" fontWeight="semibold" className='text-[10.739px] leading-normal'>
            Technologies
            </Typography>
        </div>
    </div>
  )
}
