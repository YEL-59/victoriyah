import React from 'react'
import bgImage from '@/assets/hero-image.png';
import Filter from './filter';

function Hero() {
  return (
    <div className='relative w-full min-h-[600px] bg-cover bg-center flex items-center justify-center' style={{backgroundImage: `url(${bgImage})`}}>
        <div className='w-[90%] sm:w-[90%] lg:w-1/2 mx-auto flex flex-col gap-2 max-[500px]:mb-28'>
            <h1 className='text-[40px] min-[500px]:text-[48px] sm:text-[56px] lg:text-[64px] xl:text-[72px] leading-[132%] tracking-[-0.72px] font-semibold text-[#FFF] text-center'>Trade What You Don't Need, Get What You Want</h1>
            <p className='text-sm sm:text-base lg:text-lg leading-[164%] text-[#FFF] opacity-40 text-center'>Swap what you don’t need for what you want—cash-free trading!</p>
        </div>
        <div className='absolute bottom-[-12%] sm:bottom-[-8%] z-10'>
           <Filter/> 
        </div>
    </div>
  )
}

export default Hero