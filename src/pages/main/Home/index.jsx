import Advantage from "@/components/main/home/advantage";
import Hero from "@/components/main/home/hero";
import HowItWorks from "@/components/main/home/how-it-works";
import StartTrading from "@/components/main/home/start-trading";
import ellipse from "@/assets/icons/home-ellipse.svg";

import Featuredcard from "@/components/main/home/featuredcard";
import img1 from "@/assets/featuredimg1.png";
import { Button } from "@/components/ui/button";
import Downarrowicon from "@/assets/icons/downarrow-icon";
const Home = () => {
  return (
    <div>
      <Hero />
      <Advantage />
      <HowItWorks />
      <div className="relative overflow-hidden">
        <StartTrading />
        <img
          src={ellipse}
          alt="ellipse"
          className="absolute bottom-[-5%] z-[2]"
        />
      </div>
    </div>
  );
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

  return (
    <>
      <Hero />

      <div className="pt-20 pb-20">
        <div className="container mx-auto flex justify-between items-center py-6 ">
          <h1 className="text-3xl font-semibold text-foreground">
            Featured Items
          </h1>
          <p className="bg-transparent border-b-2  text-foreground py-2 px-6  text-lg font-normal">
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
    </>
  );
};

export default Home;
