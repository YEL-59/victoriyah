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

const Favouritecard = ({
  image,
  condition = "New",
  name = "Item Name",

  location = "Unknown",
  time = "Just now",
  badgeText = "Swap or Sell",
  isFavorited = false,
}) => {
  return (
    <Card className="max-w-full flex items-stretch flex-col md:flex-row">
      <CardHeader className="p-2 flex-shrink-0 max-w-[245px]">
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
              {/* <p className="text-base sm:text-[20px] font-semibold leading-[132%] tracking-[-0.4px] text-foreground">
                {price}
              </p> */}
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
            <button aria-label="Toggle favourite">
              {isFavorited ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-red-500 transition-all"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
                 4.42 3 7.5 3c1.74 0 3.41 0.81 
                 4.5 2.09C13.09 3.81 14.76 3 
                 16.5 3 19.58 3 22 5.42 22 
                 8.5c0 3.78-3.4 6.86-8.55 
                 11.54L12 21.35z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-400 transition-all"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
                 4.42 3 7.5 3c1.74 0 3.41 0.81 
                 4.5 2.09C13.09 3.81 14.76 3 
                 16.5 3 19.58 3 22 5.42 22 
                 8.5c0 3.78-3.4 6.86-8.55 
                 11.54L12 21.35z"
                  />
                </svg>
              )}
            </button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default Favouritecard;
