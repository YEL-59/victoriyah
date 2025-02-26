import Arrowlefticon from "@/assets/icons/arrowleft-icon";
import img1 from "../../../assets/antic.png";
import FeaturedCard from "@/components/main/home/featuredcard";
import img2 from "@/assets/featuredimg1.png";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Browse = () => {
  const categories = [
    {
      id: 1,
      name: "Antiques",
      image: img1,
    },
    {
      id: 2,
      name: "Electronics",
      image: img1,
    },
    {
      id: 3,
      name: "Furniture",
      image: img1,
    },
    {
      id: 4,
      name: "Clothing",
      image: img1,
    },
    {
      id: 5,
      name: "Toys",
      image: img1,
    },
  ];
  const featureddata = [
    {
      id: 1,
      image: img2,
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
      image: img2,
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
      image: img2,
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
      image: img2,
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
      image: img2,
      condition: "Used",
      name: "Western Saddle Pad",
      price: "$75.50",
      location: "New York, USA",
      time: "4 hours ago",
      badgeText: "Swap",
      isFavorited: false,
    },
  ];
  return (
    <>
      <div className="bg-background py-20">
        <div className="container mx-auto flex justify-between items-center py-6 ">
          <div className="flex items-center gap-5">
            {" "}
            <Input
              type="text"
              placeholder="Category Search..."
              className="rounded-full bg-white w-[350px] h-[40px] px-5"
            />
          </div>
          <div className=" flex gap-5 items-center">
            <p className="border-black border-r-2 px-3">36 results</p>
            <p>sort By: </p>
            <Select className="w-[180px] bg-white rounded-full">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-12 gap-6">
          <div className="bg-white p-6 rounded-xl col-span-3">
            <h1 className="text-foreground text-xl font-semibold mb-4">
              Categories
            </h1>
            <div>
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="flex justify-between items-center gap-5 border-b border-foreground/25 p-2 cursor-pointer hover:bg-gray-100 transition"
                >
                  <div className="flex gap-2 items-center">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-8 h-8"
                    />
                    <h3 className="text-foreground text-[18px] font-normal leading-[164%]">
                      {category.name}
                    </h3>
                  </div>
                  <Arrowlefticon />
                </div>
              ))}
            </div>
          </div>

          <div className=" rounded col-span-9">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featureddata.map((item) => (
                <FeaturedCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Browse;
