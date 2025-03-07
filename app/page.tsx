import React from 'react';
import HeroSection from './components/heroSection';
import SecondSection from './components/secondsection';
import ThirdSection from './components/thirdSection';
import FourthSection from './components/fourthSection';
import FifthSection from './components/fifthSection';
import Footer from './components/footer';

export default function Page() {
    return (
      <main className='flex flex-col items-center w-full bg-[#fff] pt-[20px] mxs:pt-0 '>
        <div className='w-full'>
          <HeroSection />
        </div>
        <div className='w-full'>
          <SecondSection/>
        </div>
        <div className='w-full'>
          <ThirdSection/>
        </div>
        <div className='w-full'>
          <FourthSection/>
        </div>
        <div className='relative w-full h-screen bg-lemon '>
          {/* <FifthSection/> */}
        </div>
        <div className='w-full bg-[#000]'>
          <Footer/>
        </div>
      </main>
    )
  }