import productImage from '@/assets/product-image.png';
import profile from '@/assets/profile.png';
import phone from '@/assets/icons/phone.svg';
import mail from '@/assets/icons/mail.svg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';


const Productdetails = () => {
  return (
    <>
      <div className="container mx-auto bg-background py-20">
        <div className="flex flex-col gap-4">
          <h5 className="text-base">Home / Cars, Vehicles & Parts /  Nissan / Nissan</h5>
          <div className="flex justify-between mb-6">
            <h2 className="text-3xl leading-[132%] font-semibold tracking-[-0.48px]">2010 Nissan, QASHQAI, diesel. DAMAGED REPAIRABLE</h2>
            <h2 className="text-2xl leading-[132%] font-semibold tracking-[-0.48px]">$ 299.99</h2>
          </div>
          <div className="grid grid-cols-[70%_30%] justify-between gap-6">
            <div className="bg-[#FFF] border border-[#E8E8E8] rounded-[32px] py-12 px-16 ">
              <Carousel className="w-full">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <img src={productImage} alt="product" className='w-full h-full shrink-0' />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <div className="bg-[#FFF] border border-[#E8E8E8] rounded-[32px] p-8 ">
              <div className='flex flex-col gap-12'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-4'>
                    <img src={profile} alt="" />
                    <div>
                      <h3 className='text-3xl font-semibold leading-[132%] tracking-[-0.48px]'>Iva Ryan</h3>
                      <p className='text-lg leading-[164%]'>Posted 2 hours ago</p>
                    </div>
                  </div>
                  <p className='text-lg leading-[164%] font-semibold'>See all</p>
                </div>
                <div className='bg-[#F3FFE5] border border-[#E8E8E8] p-6 flex flex-col gap-6 rounded-[24px]'>
                  <div className=' flex items-center gap-6'>
                    <div className='bg-[#96E437] p-[10px] rounded-[99px] w-fit'><img src={phone} alt="icon" /></div>
                    <div className='flex flex-col gap-2'>
                      <h3 className='text-3xl font-semibold leading-[132%] tracking-[-0.48px]'>Contact</h3>
                      <p className='text-lg leading-[164%]'>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className=' flex items-center gap-6'>
                    <div className='bg-[#96E437] p-[10px] rounded-[99px] w-fit'><img src={mail} alt="icon" /></div>
                    <div className='flex flex-col gap-2'>
                      <h3 className='text-3xl font-semibold leading-[132%] tracking-[-0.48px]'>Email</h3>
                      <p className='text-lg leading-[164%]'>iva.ryan@example.com</p>
                    </div>
                  </div>
                </div>
                <div className='bg-[#FFF] border-[#E8E8E8] border p-6 rounded-[24px]'>
                  <p>Hey Iva,
                    I came across your listing and I'm interested! Is it still available?
                    Looking forward to your reply. Thanks!</p>
                </div>
                <div className='w-full flex flex-col gap-4'>
                  <Button className='bg-[#96E437] text-foreground px-8 py-2 rounded-[24px]'>Send message</Button>
                  <Button className='bg-[#FFF] text-foreground px-8 py-2 rounded-[24px]'>Exchange</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productdetails;
