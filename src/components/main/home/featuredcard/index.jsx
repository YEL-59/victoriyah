/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Locationicon from "@/assets/icons/location-icon";
import Hearticon from "@/assets/icons/heart-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import { useToggleFavourite } from "@/hook/home.hook";
import { Link } from "react-router";

const FeaturedCard = ({
  id,
  image,
  condition = "New",
  name = "Item Name",
  location = "Unknown",
  time = "Just now",
  badgeText = "Swap or Sell",
  isFavorited = false,
}) => {
  const { mutate } = useToggleFavourite();
  const [favourited, setFavourited] = useState(isFavorited);

  const handleToggleFavourite = (e) => {
    e.stopPropagation(); // ✅ Prevent bubbling to card
    e.preventDefault(); // ✅ Prevent link behavior
    setFavourited((prev) => !prev);
    mutate(id, {
      onError: () => setFavourited((prev) => !prev),
    });
  };

  return (
    <Card className="max-w-lg mx-auto relative">
      {/* ✅ Wrap only the navigable part */}
      <Link to={`/productdetails/${id}`} className="block">
        <CardHeader className="p-2">
          <img
            src={image || "https://via.placeholder.com/350x150"}
            alt={name}
            className="w-[350px] h-64 rounded-t-lg"
          />
          <Button className="bg-white text-[#457B10] border border-primary rounded-md w-[150px] font-normal relative -top-[25px] mx-auto">
            Condition: {condition}
          </Button>
        </CardHeader>

        <div className="flex justify-between items-center px-4">
          <CardContent>
            <p className="text-base sm:text-[20px] font-semibold leading-[132%] tracking-[-0.4px] text-foreground">
              {name}
            </p>
          </CardContent>
        </div>

        <div className="flex justify-between items-center mt-2 px-4">
          <CardContent className="flex gap-2 items-center">
            <Locationicon />
            <p className="text-sm sm:text-base font-normal text-secondary-foreground">
              {location}
            </p>
          </CardContent>
          <CardContent>
            <p className="text-sm sm:text-base font-normal text-secondary-foreground">
              {time}
            </p>
          </CardContent>
        </div>
      </Link>

      {/* ✅ This section stays outside of the link */}
      <div className="flex justify-between items-center mt-5 px-4 pb-4">
        <CardFooter>
          <Badge className="bg-primary text-foreground px-5 rounded-full text-sm font-[600px] sm:text-md">
            {badgeText}
          </Badge>
        </CardFooter>

        <CardFooter>
          <button onClick={handleToggleFavourite}>
            <Hearticon
              className={
                favourited
                  ? "text-red-500 transition-colors"
                  : "text-green-400 transition-colors"
              }
            />
          </button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default FeaturedCard;
