import Advantage from "@/components/main/home/advantage";
import Hero from "@/components/main/home/hero";
import HowItWorks from "@/components/main/home/how-it-works";
import StartTrading from "@/components/main/home/start-trading";
import ellipse from "@/assets/icons/home-ellipse.svg";

import Featuredcard from "@/components/main/home/featuredcard";
import radio from "../../../assets/radio.png";
import game from "../../../assets/game.png";
import camera2 from "../../../assets/camera2.png";
import player from "../../../assets/player.png";
import img1 from "@/assets/featuredimg1.png";
import { Button } from "@/components/ui/button";
import Downarrowicon from "@/assets/icons/downarrow-icon";
const Home = () => {
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
      image: radio,
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
      image: game,
      condition: "Like New",
      name: "Horse Riding Boots",
      price: "$120.00",
      location: "New York, USA",
      time: "2 hours ago",
      badgeText: "For Trade",
      isFavorited: true,
    },
    {
      id: 5,
      image: player,
      condition: "New",
      name: "Equestrian Helmet",
      price: "$150.00",
      location: "New York, USA",
      time: "3 hours ago",
      badgeText: "For Sale",
      isFavorited: false,
    },
    {
      id: 6,
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
      id: 7,
      image: radio,
      condition: "Used",
      name: "Leather Bridle",
      price: "$89.99",
      location: "New York, USA",
      time: "1 hour ago",
      badgeText: "Swap or Sell",
      isFavorited: false,
    },
    {
      id: 8,
      image: game,
      condition: "Like New",
      name: "Horse Riding Boots",
      price: "$120.00",
      location: "New York, USA",
      time: "2 hours ago",
      badgeText: "For Trade",
      isFavorited: true,
    },
    {
      id: 9,
      image: player,
      condition: "New",
      name: "Equestrian Helmet",
      price: "$150.00",
      location: "New York, USA",
      time: "3 hours ago",
      badgeText: "For Sale",
      isFavorited: false,
    },
    {
      id: 10,
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
      id: 11,
      image: radio,
      condition: "Used",
      name: "Leather Bridle",
      price: "$89.99",
      location: "New York, USA",
      time: "1 hour ago",
      badgeText: "Swap or Sell",
      isFavorited: false,
    },
    {
      id: 12,
      image: game,
      condition: "Like New",
      name: "Horse Riding Boots",
      price: "$120.00",
      location: "New York, USA",
      time: "2 hours ago",
      badgeText: "For Trade",
      isFavorited: true,
    },
    {
      id: 13,
      image: player,
      condition: "New",
      name: "Equestrian Helmet",
      price: "$150.00",
      location: "New York, USA",
      time: "3 hours ago",
      badgeText: "For Sale",
      isFavorited: false,
    },
  ];

  return (
    <>
      <Hero />
      <div className="pt-20 pb-20 px-4">
        <div className="container mx-auto flex justify-between items-center py-6 ">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground">
            Featured Items
          </h1>
          <p className="bg-transparent border-b-2  text-foreground py-2 px-4 sm:px-6 text-sm sm:text-base lg:text-lg font-normal">
            Browse all items
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureddata.map((item) => (
            <Featuredcard key={item.id} {...item} />
          ))}
        </div>
        <div className="container mx-auto flex justify-center items-center">
          <div className="mx-auto mt-8 border  rounded-full p-2">
            <Downarrowicon />
          </div>
        </div>
      </div>
      <Advantage />
      <HowItWorks />
      <div className="relative overflow-hidden shrink-0">
        <StartTrading />
        <img
          src={ellipse}
          alt="ellipse"
          className="absolute bottom-[-5%] z-[2] shrink-0 w-full"
        />
      </div>
    </>
  );
};

export default Home;
