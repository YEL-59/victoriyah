import React from 'react'
import fairTrading from '@/assets/icons/trade-evaluation.svg';
import secureTrading from '@/assets/icons/secure-trading.svg';
import easyCommunication from '@/assets/icons/easy-communication.svg';

function Advantage() {
  return (
    <div className='bg-primary text-foreground py-28'>
        <div className='w-[60%] mx-auto flex items-center justify-center gap-8'>
          <div className='flex flex-col items-center gap-4'>
            <img src={fairTrading} alt="icon" className='w-16 h-16'/>
            <div className='flex flex-col gap-3 items-center'>
                <h2 className='text-3xl font-semibold leading-[132%] tracking-[-0.48px]'>Fair Trade Evaluation</h2>
                <p className='text-lg leading-[164%] text-center'>Get accurate item valuations and fair trade
                suggestions</p>
            </div>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <img src={secureTrading} alt="icon" className='w-16 h-16'/>
            <div className='flex flex-col gap-3 items-center'>
                <h2 className='text-3xl font-semibold leading-[132%] tracking-[-0.48px]'>Fair Trade Evaluation</h2>
                <p className='text-lg leading-[164%] text-center'>Get accurate item valuations and fair trade
                suggestions</p>
            </div>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <img src={easyCommunication} alt="icon" className='w-16 h-16'/>
            <div className='flex flex-col gap-3 items-center'>
                <h2 className='text-3xl font-semibold leading-[132%] tracking-[-0.48px]'>Fair Trade Evaluation</h2>
                <p className='text-lg leading-[164%] text-center'>Get accurate item valuations and fair trade
                suggestions</p>
            </div>
          </div> 
        </div>
    </div>
  )
}

export default Advantage