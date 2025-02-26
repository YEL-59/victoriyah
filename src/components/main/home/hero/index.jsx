import React from 'react'
import bgImage from '@/assets/hero-image.png';
import Filter from './filter';

function Hero() {
  return (
    <div className='relative w-full min-h-[600px] bg-cover bg-center flex items-center justify-center' style={{backgroundImage: `url(${bgImage})`}}>
        <div className='w-1/2 mx-auto flex flex-col gap-2'>
            <h1 className='text-[72px] leading-[132%] tracking-[-0.72px] font-semibold text-[#FFF] text-center'>Trade What You Don't Need, Get What You Want</h1>
            <p className='text-lg leading-[164%] text-[#FFF] opacity-40 text-center'>Swap what you don’t need for what you want—cash-free trading!</p>
        </div>
        <div className='absolute bottom-[-8%] z-10'>
           <Filter/> 
        </div>
    </div>
  )
}

export default Hero