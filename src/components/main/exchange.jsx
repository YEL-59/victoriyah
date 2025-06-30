import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import addImage from "@/assets/icons/add-image.svg";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import SuccessModal from "../successModal";
import { useExchangeProduct } from "@/hook/home.hook";
import { useGetCategoryid } from "@/hook/postitem.hook";

function Exchange({ isOpen, onClose, id: requestedProductId }) {
  const { form, mutate, isPending } = useExchangeProduct();
  const { categoryid } = useGetCategoryid();
  console.log({ categoryid });
  const { register, handleSubmit, control, reset, setValue } = form;

  const [images, setImages] = useState([]);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImages((prev) => [...prev, file]);
    }
  };

  const onSubmit = (data) => {
    const payload = {
      ...data,
      requested_product_id: requestedProductId,
      images,
    };
    mutate(payload, {
      onSuccess: () => {
        setIsSuccessModalOpen(true);
        reset();
        setImages([]); // Clear images after successful submission
      },
    });
  };

  const handleCloseModal = () => {
    setIsSuccessModalOpen(false);
    onClose(); // close parent modal too if needed
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-[1390px]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-semibold">
            Upload Item Details
          </DialogTitle>
          <DialogDescription>
            Fill in the information below to list your item
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid lg:grid-cols-2 gap-4 py-4 text-[#2F2F2F]">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <Label>Item Name *</Label>
                <Input
                  placeholder="Enter item name"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="flex flex-col gap-3">
                <Label>Item Description *</Label>
                <Textarea
                  rows={6}
                  placeholder="Describe your item in detail"
                  {...register("description", { required: true })}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full flex flex-col gap-3">
                  <Label>Category *</Label>
                  <Controller
                    name="product_category_id"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categoryid?.map((cat) => (
                            <SelectItem key={cat.id} value={String(cat.id)}>
                              {cat.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
                <div className="w-full flex flex-col gap-3">
                  <Label>Condition *</Label>
                  <Controller
                    name="condition"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                        <SelectContent>
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
              </div>
            </div>

            {/* Right Column */}
            {/* Right Column */}
            <div className="flex flex-col gap-6">
              {/* Product Images */}
              <div>
                <Label>Product Images *</Label>
                <div className="flex gap-4 flex-wrap mt-2">
                  {images.map((img, idx) => (
                    <img
                      key={idx}
                      src={URL.createObjectURL(img)}
                      alt="Preview"
                      className="w-24 h-24 object-cover rounded"
                    />
                  ))}
                  <label className="w-24 h-24 border-2 border-dashed border-gray-300 flex items-center justify-center rounded cursor-pointer">
                    <img src={addImage} alt="Add" />
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </label>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-3">
                <Label>Message *</Label>
                <Textarea
                  placeholder="Write a message.."
                  {...register("message", { required: true })}
                />
              </div>
            </div>
          </div>

          <DialogFooter className="w-full flex flex-col gap-4 mt-6">
            <Button
              type="button"
              onClick={onClose}
              className="w-full bg-white border text-black rounded-full"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-[#5AA20E] text-white rounded-full"
            >
              {isPending ? "Submitting..." : "Submit Request"}
            </Button>
          </DialogFooter>
        </form>

        <SuccessModal isOpen={isSuccessModalOpen} onClose={handleCloseModal} />
      </DialogContent>
    </Dialog>
  );
}

export default Exchange;
