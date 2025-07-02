import React, { useEffect, useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";

import addImage from "@/assets/icons/add-image.svg";
import { useUpdateProduct } from "@/hook/home.hook";
import { useGetCategoryid } from "@/hook/postitem.hook";

function UpdateDetails({ isOpen, onClose, item }) {
  console.log("Item ID user clicked:", item?.id);
  const { updateProduct, isUpdating } = useUpdateProduct();
  const { register, control, handleSubmit, reset, formState } = useForm();
  const { categoryid: productCategories = [] } = useGetCategoryid();

  const [images, setImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]); // strings (URLs)
  const [newImages, setNewImages] = useState([]); // files

  useEffect(() => {
    if (item) {
      reset({
        name: item.name,
        description: item.description,
        category: String(item.product_category_id),
        condition: item.condition,
        phone: item.phone,
        location: item.address,
        trade: item.trade_preferences,
      });

      setExistingImages(item.images || []); // ✅ images from API
      setNewImages([]); // clear any previously added files
    }
  }, [item, reset]);

  useEffect(() => {
    console.log("Form errors:", formState.errors);
  }, [formState.errors]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImages((prev) => [...prev, file]);
    }
  };

  const onSubmit = (data) => {
    console.log("✅ Form Data to Submit", data);

    const formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    newImages.forEach((img) => {
      formData.append("images[]", img);
    });

    for (const [key, val] of formData.entries()) {
      console.log(`${key}:`, val);
    }

    updateProduct(
      { id: item.id, images, payload: formData },
      {
        onSuccess: (res) => {
          console.log("✅ API Success:", res);
          onClose();
        },
        onError: (err) => {
          console.log("❌ API Error:", err);
        },
      }
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-4xl h-[600px] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle className="text-3xl font-semibold text-green-400">
            Update Item
          </DialogTitle>
          <DialogDescription>
            Modify your item details and submit the update.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <Label className="text-green-400">Item Name *</Label>
            <Input
              {...register("name", { required: true })}
              placeholder="Enter item name"
            />
          </div>

          {/* Description */}
          <div>
            <Label className="text-green-400">Description *</Label>
            <Textarea
              {...register("description", { required: true })}
              rows={4}
            />
          </div>

          {/* Category */}
          <div>
            <Label className="text-green-400">Category *</Label>
            <Controller
              name="category"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {productCategories.map((cat) => (
                      <SelectItem key={cat.id} value={String(cat.id)}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          {/* Condition */}
          <div>
            <Label className="text-green-400">Condition *</Label>
            <Controller
              name="condition"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="New">New</SelectItem>
                    <SelectItem value="LikeNew">Like New</SelectItem>
                    <SelectItem value="Old">Old</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          {/* Phone */}
          <div>
            <Label className="text-green-400">Phone *</Label>
            <Input {...register("phone")} placeholder="Enter phone number" />
          </div>

          {/* Location */}
          <div>
            <Label className="text-green-400">Location *</Label>
            <Input {...register("location")} placeholder="Enter location" />
          </div>

          {/* Images */}
          <div>
            <Label className="text-green-400">Product Images *</Label>
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

          {/* Footer */}
          <DialogFooter className="flex flex-col gap-4 mt-6">
            <Button type="button" onClick={onClose} className="w-full">
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isUpdating}
              className="w-full bg-[#96E437] text-white"
            >
              {isUpdating ? "Updating..." : "Submit Update"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default UpdateDetails;
