import productImage from "@/assets/product-image.png";
import profile from "@/assets/profile.png";
import phone from "@/assets/icons/phone.svg";
import mail from "@/assets/icons/mail.svg";
import facebook from "@/assets/icons/facebook-icon.svg";
import twitch from "@/assets/icons/twitch-icon.svg";
import copy from "@/assets/icons/copy-icon.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import FeaturedCard from "@/components/main/home/featuredcard";
import img1 from "@/assets/featuredimg1.png";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import Exchange from "@/components/main/exchange";
import { useState } from "react";

const Productdetails = () => {
  const featureddata = [
    {
      id: 1,
      image: img1,
      condition: "New",
      name: "Premium Saddle",
      price: "$399.99",
      location: "New York, USA",
      time: "5 minutes ago",
      badgeText: "For Sale",
      isFavorited: true,
    },
    {
      id: 2,
      image: img1,
      condition: "Used",
      name: "Leather Bridle",
      price: "$89.99",
      location: "New York, USA",
      time: "1 hour ago",
      badgeText: "Swap or Sell",
      isFavorited: false,
    },
    {
      id: 3,
      image: img1,
      condition: "Like New",
      name: "Horse Riding Boots",
      price: "$120.00",
      location: "New York, USA",
      time: "2 hours ago",
      badgeText: "For Trade",
      isFavorited: true,
    },
    {
      id: 4,
      image: img1,
      condition: "New",
      name: "Equestrian Helmet",
      price: "$150.00",
      location: "New York, USA",
      time: "3 hours ago",
      badgeText: "For Sale",
      isFavorited: false,
    },
    {
      id: 5,
      image: img1,
      condition: "Used",
      name: "Western Saddle Pad",
      price: "$75.50",
      location: "New York, USA",
      time: "4 hours ago",
      badgeText: "Swap",
      isFavorited: false,
    },
    {
      id: 2,
      image: img1,
      condition: "Used",
      name: "Leather Bridle",
      price: "$89.99",
      location: "New York, USA",
      time: "1 hour ago",
      badgeText: "Swap or Sell",
      isFavorited: false,
    },
    {
      id: 3,
      image: img1,
      condition: "Like New",
      name: "Horse Riding Boots",
      price: "$120.00",
      location: "New York, USA",
      time: "2 hours ago",
      badgeText: "For Trade",
      isFavorited: true,
    },
    {
      id: 4,
      image: img1,
      condition: "New",
      name: "Equestrian Helmet",
      price: "$150.00",
      location: "New York, USA",
      time: "3 hours ago",
      badgeText: "For Sale",
      isFavorited: false,
    },
  ];
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleNavigate = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    console.log("close modal");
  };
  return (
    <>
      <div className="container mx-auto bg-background py-20">
        <div className="flex flex-col gap-4">
          <h5 className="text-sm sm:text-base">
            Home / Cars, Vehicles & Parts / Nissan / Nissan
          </h5>
          <div className="flex justify-between mb-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl leading-[132%] font-semibold tracking-[-0.48px]">
              2010 Nissan, QASHQAI, diesel. DAMAGED REPAIRABLE
            </h2>
            {/* <h2 className="text-lg sm:text-xl lg:text-2xl leading-[132%] font-semibold tracking-[-0.48px]">
              $ 299.99
            </h2> */}
          </div>
          <div className="xl:grid xl:grid-cols-[70%_30%] flex flex-col justify-between gap-6">
            <div className="bg-[#FFF] border border-[#E8E8E8] rounded-[32px] py-8 sm:py-12 lg:py-12 px-8 sm:px-12 lg:px-16 ">
              <Carousel className="w-full">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <img
                          src={productImage}
                          alt="product"
                          className="w-full h-full shrink-0"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <div className="bg-[#FFF] border border-[#E8E8E8] rounded-[32px] p-4 sm:p-6 lg:p-8 ">
              <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img src={profile} alt="" />
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-[132%] tracking-[-0.48px]">
                        Iva Ryan
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg leading-[164%]">
                        Posted 2 hours ago
                      </p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg leading-[164%] font-semibold">
                    See all
                  </p>
                </div>
                <div className="bg-[#F3FFE5] border border-[#E8E8E8] p-6 flex flex-col gap-6 rounded-[24px]">
                  <div className=" flex items-center gap-6">
                    <div className="bg-[#96E437] p-[10px] rounded-[99px] w-fit">
                      <img src={phone} alt="icon" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-[132%] tracking-[-0.48px]">
                        Contact
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg leading-[164%]">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>
                  <div className=" flex items-center gap-6">
                    <div className="bg-[#96E437] p-[10px] rounded-[99px] w-fit">
                      <img src={mail} alt="icon" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-[132%] tracking-[-0.48px]">
                        Email
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg leading-[164%]">
                        iva.ryan@example.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#FFF] border-[#E8E8E8] border p-4 sm:p-6 rounded-[24px]">
                  <p>
                    Hey Iva, I came across your listing and I'm interested! Is
                    it still available? Looking forward to your reply. Thanks!
                  </p>
                </div>
                <div className="w-full flex flex-col gap-4">
                  <Button className="bg-[#96E437] text-foreground px-6 sm:px-8 py-2 rounded-[24px]">
                    Send message
                  </Button>
                  <Button
                    onClick={handleNavigate}
                    className="bg-[#FFF] text-foreground px-6 sm:px-8 py-2 rounded-[24px]"
                  >
                    Exchange
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-between flex-col lg:flex-row w-full my-4 gap-6">
            <div className="flex flex-col gap-4 text-[#2F2F2F]">
              <h2 className="text-xl sm:text-2xl lg:text-3xl leading-[132%] font-semibold tracking-[-0.48px]">
                Description
              </h2>
              <div className="flex flex-col gap-1 text-[#2F2F2F]">
                <p className="text-sm sm:text-base lg:text-lg leading-[132%] tracking-[-0.36px]">
                  Damaged Repairable Qashqai
                </p>
                <ul className="text-sm sm:text-base leading-[132%] tracking-[-0.36px] list-disc pl-6 sm:pl-8">
                  <li>
                    Front-end damage affecting the front bumper and driver’s
                    alloy.
                  </li>
                  <li>
                    Requires a front bumper and one headlight; the wing can be
                    repaired.
                  </li>
                  <li>No structural/jigging work needed.</li>
                  <li>
                    Still runs and can be driven away, though recovery is
                    recommended.
                  </li>
                  <li>Comes with 10 months MOT and service history.</li>
                  <li>
                    V5C green slip provided; you will need to apply for the
                    logbook (free).
                  </li>
                  <li>
                    Serious inquiries only – no time wasters or canvassers.
                  </li>
                  <li>Easy repair, based in Tipton.</li>
                </ul>
                <p className="text-lg font-semibold leading-[132%] tracking-[-0.36px] mt-3">
                  Ad ID: 1492896143
                </p>
              </div>
            </div>
            <div className="bg-[#FFF] rounded-[24px] border border-[#E8E8E8] max-w-[80%] sm:max-w-[50%]">
              <div className="flex items-center justify-between gap-8  p-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl leading-[132%] font-semibold tracking-[-0.48px]">
                  Share:
                </h2>
                <div className="flex gap-5 items-center">
                  <div className="p-[10px] rounded-[99px] border bg-[#96E437]">
                    <img src={facebook} alt="icon" className="shrink-0 " />
                  </div>
                  <div className="p-[10px] rounded-[99px] border bg-[#96E437]">
                    <img src={twitch} alt="icon" className="shrink-0" />
                  </div>
                  <div className="p-[10px] rounded-[99px] border bg-[#96E437]">
                    <img src={copy} alt="icon" className="shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 lg:mt-6 xl:mt-8 mb-4 w-full">
            <h1 className="text-2xl sm:text-3xl lg:text-[28px] xl:text-[32px] leading-[164%] tracking-[-0.32px] font-semibold mb-6">
              You may also like...
            </h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {featureddata.map((item) => (
                <FeaturedCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
        {/* exchange modal open */}
        <Exchange isOpen={isOpenModal} onClose={handleCloseModal} />
      </div>
    </>
  );
};

export default Productdetails;
