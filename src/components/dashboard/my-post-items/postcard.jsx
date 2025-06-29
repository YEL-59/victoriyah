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
import { useDeleteProduct } from "@/hook/home.hook";

const Postcard = ({
  id,
  image,
  condition = "New",
  name = "Item Name",
  address,
  time = "Just now",
  badgeText = "Swap or Sell",
  favourited = false,

  onCardClick,
  onEditClick,
}) => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const { mutate: deleteProduct, isLoading: isDeleting } = useDeleteProduct();

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      deleteProduct(id);
    }
  };

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
              {address}
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
              <button aria-label="Toggle favourite">
                {favourited ? (
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
            <CardFooter
              className="flex gap-2"
              onClick={(e) => e.stopPropagation()}
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
      {isDelete && (
        <ProductDelete
          isOpen={isDelete}
          onClose={handleClose}
          onConfirm={() => {
            deleteProduct(id);
            handleClose();
          }}
        />
      )}
    </>
  );
};

export default Postcard;
