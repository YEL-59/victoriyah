import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sellSchema } from "@/schemas/sell.schema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router";
import { Label } from "@/components/ui/label";
import { useState } from "react";

import addImage from "@/assets/icons/add-image.svg";

import addButton from "@/assets/icons/add-button.svg";
const Sell = () => {
  const form = useForm({
    resolver: zodResolver(sellSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  const [images, setImages] = useState([null, null, null, null]);

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newImages = [...images];
      newImages[index] = URL.createObjectURL(file);
      setImages(newImages);
    }
  };
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold leading-[132%] tracking-[-0.48px] text-foreground">
          Post New Item
        </h1>
        <p className="text-lg text-gray-600 mt-5 mb-5">
          Fill in the details about your item
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base lg:text-[18px] font-normal leading-[164%]">
                    Item Name *
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      {...field}
                      className="w-full   bg-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[18px] font-normal leading-[164%]">
                    Description *
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here."
                      id="message"
                      {...field}
                      rows={5}
                      className="w-full   bg-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[18px] font-normal leading-[164%]">
                    Price *
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      {...field}
                      className="w-full   bg-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[18px] font-normal leading-[164%]">
                    Category *
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="py-6 bg-white">
                          <SelectValue placeholder="Select a verified email to display" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="m@example.com">
                          m@example.com
                        </SelectItem>
                        <SelectItem value="m@google.com">
                          m@google.com
                        </SelectItem>
                        <SelectItem value="m@support.com">
                          m@support.com
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[18px] font-normal leading-[164%]">
                    Condition *
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="py-6 bg-white">
                          <SelectValue placeholder="Select a verified email to display" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="m@example.com">
                          m@example.com
                        </SelectItem>
                        <SelectItem value="m@google.com">
                          m@google.com
                        </SelectItem>
                        <SelectItem value="m@support.com">
                          m@support.com
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[18px] font-normal leading-[164%]">
                    Phone *
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="py-6 bg-white">
                          <SelectValue placeholder="Select a verified email to display" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="m@example.com">
                          m@example.com
                        </SelectItem>
                        <SelectItem value="m@google.com">
                          m@google.com
                        </SelectItem>
                        <SelectItem value="m@support.com">
                          m@support.com
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[18px] font-normal leading-[164%]">
                    Location *
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      {...field}
                      className="w-full  bg-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-6">
              <div className="basis-1/2 flex flex-col gap-3">
                <Label
                  htmlFor="product-image"
                  className="text-lg leading-[164%]"
                >
                  Product Images *
                </Label>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center flex-wrap gap-4">
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
            </div>

            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[18px] font-normal leading-[164%]">
                    Trade Preferences *
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="py-6 bg-white">
                          <SelectValue placeholder="Select a verified email to display" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="m@example.com">
                          m@example.com
                        </SelectItem>
                        <SelectItem value="m@google.com">
                          m@google.com
                        </SelectItem>
                        <SelectItem value="m@support.com">
                          m@support.com
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <div className="w-full">
                <button
                  type="submit"
                  className="bg-primary text-foreground px-4 py-2 w-full rounded-full hover:bg-transparent hover:border"
                >
                  Cancel
                </button>
              </div>

              <div className="w-full">
                <Link to="/payment">
                  {" "}
                  <button
                    type="reset"
                    className="bg-primary text-foreground rounded-full px-4 py-2  w-full hover:bg-transparent hover:border"
                  >
                    Post Item
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default Sell;
