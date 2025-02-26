import locationIcon from '@/assets/icons/location.svg';
import searchIcon from '@/assets/icons/search.svg';
import { Button } from '@/components/ui/button';

function Filter() {
  return (
    <div className='rounded-lg border-2 border-white bg-gradient-to-b from-white/50 to-white shadow-[0px_4px_48px_0px_rgba(0,0,0,0.10)] backdrop-blur-[16px] p-4'>
        <div className='flex items-center gap-5'>
            <div className='bg-[#FFF] px-4 py-3 rounded-[8px] flex items-center gap-2'>
                <img src={searchIcon} alt="icon" />
                <input type="text" placeholder='Search here...' className='outline-none'/>
            </div>
            <div className='bg-[#FFF] px-4 py-3 rounded-[8px] flex items-center gap-2'>
                <img src={locationIcon} alt="icon" />
                <input type="text" placeholder='Location' className='outline-none'/>
            </div>
            <Button className='text-foreground bg-primary px-8 py-6 rounded-[8px]'>Search</Button>
        </div>
    </div>
  )
}

export default Filter