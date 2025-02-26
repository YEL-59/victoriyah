import { Button } from '@/components/ui/button'

function StartTrading() {
    return (
        <div className='bg-primary text-foreground py-28'>
            <div className=' w-[60%] mx-auto flex flex-col gap-8'>
                <div className='w-1/2 mx-auto text-center gap-4'>
                    <h1 className='text-center text-[48px] font-bold leading-[132%] tracking-[-0.48px] text-foreground'>Start Trading Now</h1>
                <p className='text-lg leading-[164%] text-center'>Discover a new way to trade! List your items, browse available trades, and connect with others—all without spending a dime. Start trading now!</p>
                </div>
                <div className='flex items-center justify-center z-[5] '><Button className=' cursor-pointer text-lg font-semibold leading-[164%] bg-[#355817] hover:text-[#355817] hover:border-[#355817] hover:border text-[#FFF] rounded-[99px] w-max'>Post Your First Trade</Button></div>
            </div>
        </div>
    )
}

export default StartTrading