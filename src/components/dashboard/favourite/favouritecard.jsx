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
import { Link } from "react-router";

const Favouritecard = ({
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
    <Link to={"/Productdetails"}>
      {" "}
      <Card className="max-w-full flex ">
        <CardHeader className="p-2">
          <img src={image} alt={name} className="w-full h-auto rounded-t-lg" />
        </CardHeader>
        <div className="flex flex-col w-full gap-5 ">
          <div className="flex w-full justify-between items-center px-4 p-5">
            <div>
              <CardContent>
                <p className="text-base sm:text-[20px] font-semibold leading-[132%] tracking-[-0.4px] text-foreground">
                  {name}
                </p>
              </CardContent>
              <CardContent className="flex gap-2 items-center">
                <Locationicon />
                <p className="text-sm sm:text-base font-normal text-secondary-foreground">
                  {location}
                </p>
              </CardContent>
            </div>
            <div>
              <CardContent>
                <p className="text-base sm:text-[20px] font-semibold leading-[132%] tracking-[-0.4px] text-foreground">
                  {price}
                </p>
              </CardContent>
              <CardContent>
                <p className="text-sm sm:text-base font-normal text-secondary-foreground">
                  2 hours ago
                </p>
              </CardContent>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2 px-4">
            <CardContent>
              <Badge className="bg-primary text-foreground  px-5 rounded-full text-sm font-[600px] sm:text-md">
                {badgeText}
              </Badge>
            </CardContent>
            <CardContent>
              <Badge className="bg-primary text-foreground  px-5 rounded-full text-sm font-[600px] sm:text-md">
                {badgeText}
              </Badge>
            </CardContent>
          </div>
          <div className="flex justify-between items-center mt-5 ">
            <CardFooter>
              <Button className="bg-white text-[#457B10] border border-primary rounded-md w-[150px] font-normal  mx-auto">
                Condition: {condition}
              </Button>
            </CardFooter>
            <CardFooter>
              <Hearticon
                className={isFavorited ? "text-red-500" : "text-gray-400"}
              />
            </CardFooter>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default Favouritecard;
