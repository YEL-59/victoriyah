import React from 'react'
import leftArrow from '@/assets/icons/left-arrow.svg';
import rightArrow from '@/assets/icons/right-arrow.svg';
import cardImage from '@/assets/how-it-work.png';
import dotLine from '@/assets/Line.png'

function HowItWorks() {
    return (
        <div className='py-28 '>
            <div className='w-[60%] h-full mx-auto flex flex-col gap-10'>
                <h1 className='text-center text-[48px] font-bold leading-[132%] tracking-[-0.48px] text-foreground'>How It Works</h1>
                <div className='flex justify-between gap-6'>
                    <div className='flex flex-col gap-2 w-1/2'>
                        <h4 className='text-lg leading-[170%] tracking-[-0.4px] text-[#457B10]'>Amplifying Voices, Building Trust.</h4>
                        <h1 className='w-full text-[48px] font-bold leading-[132%] tracking-[-0.48px] text-foreground'>Building success, one step at a time</h1>
                    </div>
                    <div className='flex items-end gap-4'>
                        <div className='cursor-pointer p-3 border border-[#457B10] bg-[#FFF] rounded-[10px]'><img src={leftArrow} alt="icon" /></div>
                        <div className='cursor-pointer p-3 border bg-[#B5F169] border-[#FFF] rounded-[10px]'><img src={rightArrow} alt="icon" /></div>
                    </div>
                </div>
                <div className='flex justify-between gap-20 w-full'>
                    <div className='bg-gradient-to-t from-[#ACE267] via-[#ACE267] to-[rgba(255,255,255,0.01)] blur-0 h-[595px] aspect-[624/595] w-full rotate-180 rounded-[24px] relative'>
                        <img src={cardImage} alt="how it works" className='rounded-[24px] absolute top-[10%] left-[10%] w-[80%] h-[80%] z-10 rotate-180' />
                    </div>
                    <div className='w-full'>
                        <div className='flex flex-col w-full h-full justify-center items-center gap-24 relative'>
                            <div className='flex gap-6'>
                                <div className='bg-[#B5F169] text-foreground flex items-center justify-center py-4 px-5 rounded-full h-fit'><p className='text-[28px font-bold leading-[130%] tracking-[-0.8px]]'>1</p></div>
                                <div>
                                    <h1 className='text-[40px] font-medium leading-[130%] tracking-[-2px]'>Post Your Item</h1>
                                    <p>Our team conducts comprehensive research to outline a customized strategy.</p>
                                </div>
                            </div>
                            <div className='flex gap-6'>
                                <div className='bg-[#B5F169] text-foreground flex items-center justify-center py-4 px-5 rounded-full h-fit'><p className='text-[28px font-bold leading-[130%] tracking-[-0.8px]]'>2</p></div>
                                <div>
                                    <h1 className='text-[40px] font-medium leading-[130%] tracking-[-2px]'>Find a Trade</h1>
                                    <p>We create user-centric, scalable solutions using cutting-edge technology.</p>
                                </div>
                            </div>
                            <div className='flex gap-6'>
                                <div className='bg-[#B5F169] text-foreground flex items-center justify-center py-4 px-5 rounded-full h-fit'><p className='text-[28px font-bold leading-[130%] tracking-[-0.8px]]'>3</p></div>
                                <div>
                                    <h1 className='text-[40px] font-medium leading-[130%] tracking-[-2px]'>Make the Exchange</h1>
                                    <p>We gather feedback and make continuous improvements to ensure sustained success.</p>
                                </div>
                            </div>
                            <div className='absolute z-[-1] left-[6%] top-[10%] mb-2'><img src={dotLine} alt="line" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks