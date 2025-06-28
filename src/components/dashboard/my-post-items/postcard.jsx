import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Locationicon from "@/assets/icons/location-icon";
import Hearticon from "@/assets/icons/heart-icon";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useLocation } from "react-router";
import Deleteicon from "@/assets/icons/delete-icon";
import Editicon from "@/assets/icons/edit-icon";
import UpdateDetails from "../shared/update-details";
import { useState } from "react";
import ProductDelete from "../shared/product-delete";

const Postcard = ({
  image,
  condition = "New",
  name = "Item Name",

  location = "Unknown",
  time = "Just now",
  badgeText = "Swap or Sell",
  isFavorited = false,
  onCardClick,
  onEditClick,
}) => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    console.log("click edit icon");
  };
  const handleClose = () => {
    setIsOpen(false);
    setIsDelete(false);
  };
  const handleOpenDeleteModal = () => {
    setIsDelete(true);
    console.log("click delete icon");
  };

  return (
    <>
      <Card className="max-w-lg mx-auto pb-2" onClick={onCardClick}>
        <CardHeader className="p-2">
          <img src={image} alt={name} className="w-full h-auto rounded-t-lg" />
          <Button className="bg-white text-[#457B10] border border-primary rounded-md w-[150px] font-normal relative -top-[25px] mx-auto">
            Condition: {condition}
          </Button>
        </CardHeader>

        <div className="flex justify-between flex-wrap gap-2 items-center px-4">
          <CardContent>
            <Link to="/item-details">
              {" "}
              <p className="text-base sm:text-[20px] font-semibold text-foreground">
                {name}
              </p>
            </Link>
          </CardContent>
        </div>

        <div className="flex justify-between flex-wrap gap-2 items-center mt-2 px-4">
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

        {pathname === "/dashboard" && (
          <div className="flex justify-between items-center mt-5">
            <CardFooter>
              <Hearticon
                className={isFavorited ? "text-red-500" : "text-gray-400"}
              />
            </CardFooter>
            <CardFooter
              className="flex gap-2"
              onClick={(e) => stop.propagation(e)}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenDeleteModal();
                }}
              >
                <Deleteicon className="text-gray-400 cursor-pointer" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpen();
                }}
              >
                <Editicon className="text-gray-400 cursor-pointer" />
              </button>
            </CardFooter>
          </div>
        )}
      </Card>
      {isOpen && <UpdateDetails isOpen={isOpen} onClose={handleClose} />}
      {isDelete && <ProductDelete isOpen={isDelete} onClose={handleClose} />}
    </>
  );
};

export default Postcard;
