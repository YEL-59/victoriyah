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
const FeaturedCard = ({
  image,
  condition = "New",
  name = "Item Name",
  price = "$0.00",
  location = "Unknown",
  time = "Just now",
  badgeText = "Swap or Sell",
  isFavorited = false,
}) => {
  return (
    <Card className="max-w-lg">
      <CardHeader>
        <img src={image} alt={name} className="w-full h-auto rounded-t-lg" />
        <Button className="bg-white text-[#457B10] border border-primary rounded-md w-[150px] font-thin relative -top-[25px] mx-auto">
          Condition: {condition}
        </Button>
      </CardHeader>

      <div className="flex justify-between items-center px-4">
        <CardContent>
          <p className="text-[20px] font-semibold leading-[132%] tracking-[-0.4px] text-foreground">
            {name}
          </p>
        </CardContent>
        <CardContent>
          <p className="text-[20px] font-semibold leading-[132%] tracking-[-0.4px] text-foreground">
            {price}
          </p>
        </CardContent>
      </div>

      <div className="flex justify-between items-center px-4">
        <CardContent className="flex gap-2 items-center">
          <Locationicon />
          <p className="text-[16px] font-normal text-secondary-foreground">
            {location}
          </p>
        </CardContent>
        <CardContent>
          <p className="text-[16px] font-normal text-secondary-foreground">
            {time}
          </p>
        </CardContent>
      </div>

      <div className="flex justify-between items-center px-4">
        <CardFooter>
          <Badge className="bg-primary text-foreground py-2 px-5 rounded-full text-md">
            {badgeText}
          </Badge>
        </CardFooter>
        <CardFooter>
          <Hearticon
            className={isFavorited ? "text-red-500" : "text-gray-400"}
          />
        </CardFooter>
      </div>
    </Card>
  );
};

export default FeaturedCard;
