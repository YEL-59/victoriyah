import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import addButton from "@/assets/icons/add-button.svg";
import addImage from "@/assets/icons/add-image.svg";

function UpdateDetails({ isOpen, onClose }) {
  const { register, handleSubmit, control, reset } = useForm();
  const [images, setImages] = useState([null, null, null, null, null]);

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newImages = [...images];
      newImages[index] = URL.createObjectURL(file);
      setImages(newImages);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    setIsSuccessModalOpen(true);
    reset();
  };

  const handleCloseModal = () => {
    setIsSuccessModalOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-[1390px]">
        <DialogHeader>
          <DialogTitle className="text-3xl leading-[132%] font-semibold tracking-[-0.48px]">
            Upload Item Details
          </DialogTitle>
          <DialogDescription className="text-base text-[#2F2F2F]">
            Fill in the details about your item
          </DialogDescription>
        </DialogHeader>
        <form action="">
          <div className="flex justify-between flex-col lg:flex-row gap-6">
            <div className="basis-1/2 flex flex-col">
              <div className="w-full flex flex-col gap-3">
                <Label htmlFor="name" className="text-lg leading-[164%]">
                  Item Name *
                </Label>
                <Input
                  id="name"
                  placeholder="Enter item name"
                  className="col-span-3 border border-[#E8E8E8] rounded-[8px] px-4 py-3"
                />
              </div>
              {/* Item Description */}
              <div className="w-full flex flex-col gap-3">
                <Label htmlFor="desc" className="text-lg leading-[164%]">
                  Item Description *
                </Label>
                <Textarea
                  id="desc"
                  placeholder="Describe your item in details"
                  rows={8}
                  className="col-span-3 border border-[#E8E8E8] rounded-[8px] px-4 py-3"
                />
              </div>
            </div>
            <div className="basis-1/2 flex flex-col gap-6">
              <div className=" grid sm:grid-cols-2 gap-4">
                <div className="w-full flex flex-col gap-3">
                  <Label htmlFor="price" className="text-lg leading-[164%]">
                    Price *
                  </Label>
                  <Input
                    id="price"
                    placeholder="Enter your price"
                    className="col-span-3 border border-[#E8E8E8] rounded-[8px] px-4 py-3"
                  />
                </div>
                <div className="w-full flex flex-col gap-3">
                  <Label htmlFor="category" className="text-lg leading-[164%]">
                    Category *
                  </Label>
                  <Controller
                    name="category"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full border border-[#E8E8E8] rounded-[8px] px-4 py-3 h-12 outline-none">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent className="w-full">
                          <SelectItem value="electronics">
                            Electronics
                          </SelectItem>
                          <SelectItem value="fashion">Fashion</SelectItem>
                          <SelectItem value="home">Home & Living</SelectItem>
                          <SelectItem value="beauty">Beauty</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              </div>
              <div className="basis-1/2 sm:grid grid-cols-2 gap-4">
                <div className="w-full flex flex-col gap-3">
                  <Label htmlFor="condition" className="text-lg leading-[164%]">
                    Condition *
                  </Label>
                  <Controller
                    name="condition"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full border border-[#E8E8E8] rounded-[8px] px-4 py-3 h-12 outline-none">
                          <SelectValue placeholder="Select a condition" />
                        </SelectTrigger>
                        <SelectContent className="w-full">
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="used">Used</SelectItem>
                          <SelectItem value="refurbished">
                            Refurbished
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
                <div className="w-full flex flex-col gap-3">
                  <Label htmlFor="phone" className="text-lg leading-[164%]">
                    Phone *
                  </Label>
                  <Input
                    id="phone"
                    placeholder="Enter phone number"
                    className="col-span-3 border border-[#E8E8E8] rounded-[8px] px-4 py-3"
                  />
                </div>
              </div>
              <div className="basis-1/2 sm:grid grid-cols-2 gap-4">
                <div className="w-full flex flex-col gap-3">
                  <Label htmlFor="location" className="text-lg leading-[164%]">
                    Location *
                  </Label>
                  <Input
                    id="location"
                    placeholder="Enter your location "
                    className="col-span-3 border border-[#E8E8E8] rounded-[8px] px-4 py-3"
                  />
                </div>
                <div className="w-full flex flex-col gap-3">
                  <Label htmlFor="trade" className="text-lg leading-[164%]">
                    Trade Preferences *
                  </Label>
                  <Controller
                    name="trade"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full border border-[#E8E8E8] rounded-[8px] px-4 py-3 h-12 outline-none">
                          <SelectValue placeholder="Select Trade Preferences" />
                        </SelectTrigger>
                        <SelectContent className="w-full">
                          <SelectItem value="trade 1">Trade 1</SelectItem>
                          <SelectItem value="trade 2">Trade 2</SelectItem>
                          <SelectItem value="trade 3">Trade 3</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/2 flex flex-col gap-3">
            <Label htmlFor="product-image" className="text-lg leading-[164%]">
              Product Images *
            </Label>
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-4">
                {images.map((image, index) => (
                  <label
                    key={index}
                    className="w-32 h-32 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center rounded-md cursor-pointer hover:border-gray-500 transition relative"
                  >
                    {image ? (
                      <img
                        src={image}
                        alt="Uploaded"
                        className="w-full h-full object-cover rounded-md"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-3 text-gray-400">
                        <img src={addImage} alt="" />
                        <span className="text-sm">Add Image</span>
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload(e, index)}
                    />
                  </label>
                ))}
              </div>
              <p className="text-xs leading-[164%]">
                Upload up to 5 images (Max 5MB each)
              </p>
              <div className="flex items-center gap-3">
                <img src={addButton} alt="" />
                <p className="text-lg text-[#5AA20E] leading-[164%]">
                  Add a Youtube or video link
                </p>
              </div>
            </div>
          </div>
        </form>
        <DialogFooter className="w-full flex flex-col gap-4 mt-6">
          <Button
            type="button"
            onClick={onClose}
            className="w-full bg-[#FFF] text-foreground px-8 py-2 rounded-[24px]"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="w-full bg-[#FFF] text-foreground px-8 py-2 rounded-[24px]"
          >
            Submit Request
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default UpdateDetails;
