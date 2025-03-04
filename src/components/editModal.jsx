/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import successIcon from "@/assets/icons/success-icon.svg";
import { Button } from "./ui/button";
import { Link } from "react-router";

function EditModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-max flex flex-col gap-6">
        <DialogHeader className="flex flex-col gap-4">
          <img
            src={successIcon}
            alt="Success"
            className="h-20 sm:h-24 w-20 sm:w-24 mx-auto"
          />
          <DialogTitle className="text-center text-3xl font-semibold">
            Exchange request submitted Successfully!
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-5 text-center">
          <p className="text-lg text-gray-600">
            The listing owner has been notified.
          </p>
          <Link to="/">
            <Button className="w-full bg-[#96E437] text-white px-8 py-4 rounded-xl text-lg">
              Go to Home
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default EditModal;
