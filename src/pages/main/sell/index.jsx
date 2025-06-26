import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";

import addImage from "@/assets/icons/add-image.svg";
import addButton from "@/assets/icons/add-button.svg";
import { useCreateProduct, useGetCategoryid } from "@/hook/postitem.hook";

const Sell = () => {
  const { form, mutate, isPending } = useCreateProduct();
  const { categoryid } = useGetCategoryid();
  console.log({ categoryid });
  const [images, setImages] = useState([]);
  // const [showInput, setShowInput] = useState(false);
  // const [link, setLink] = useState("");
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const storedLinks = localStorage.getItem("youtubeLinks");
    if (storedLinks) {
      setLinks(JSON.parse(storedLinks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("youtubeLinks", JSON.stringify(links));
  }, [links]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImages((prev) => [...prev, file]);
    }
  };

  // const handleAddLink = () => {
  //   if (link.trim() !== "") {
  //     setLinks((prev) => [...prev, link]);
  //     setLink("");
  //     setShowInput(false);
  //   }
  // };

  const onSubmit = (values) => {
    // Since your hook expects `images`, add them to values
    mutate({
      ...values,
      product_category_id: Number(values.product_category_id),
      images,
      video_links: links,
    });
    console.log({ "selected Id": values.product_category_id });
    console.log({ values });
  };

  //category_id
  const productCategories = categoryid;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold">Post New Item</h1>
      <p className="text-gray-600 mt-2 mb-6">
        Fill in the details about your item
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Item Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your item name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter description"
                    {...field}
                    rows={4}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="product_category_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category *</FormLabel>
                <Select
                  onValueChange={(val) => field.onChange(val)}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-transparent py-6">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {productCategories?.map((cat) => (
                      <SelectItem key={cat.id} value={String(cat.id)}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="condition"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Condition *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-transparent py-6">
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="New">New</SelectItem>
                    <SelectItem value="LikeNew">Like New</SelectItem>
                    <SelectItem value="Old">Old</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

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

          {/* <div>
            <div
              onClick={() => setShowInput(true)}
              className="flex items-center gap-2 cursor-pointer mt-4"
            >
              <img src={addButton} alt="Add Link" />
              <span className="text-green-600">
                Add a YouTube or video link
              </span>
            </div>

            {showInput && (
              <div className="flex gap-2 mt-2">
                <Input
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="Paste your video link"
                />
                <button
                  type="button"
                  onClick={handleAddLink}
                  className="bg-green-600 text-white px-3 rounded"
                >
                  Add
                </button>
              </div>
            )}

            <ul className="list-disc pl-5 mt-2">
              {links.map((l, i) => (
                <li key={i}>
                  <a
                    href={l}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-600"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          <button
            type="submit"
            disabled={isPending}
            className="bg-green-600 text-white w-full py-2 rounded"
          >
            {isPending ? "Posting..." : "Post Item"}
          </button>
        </form>
      </Form>
    </div>
  );
};

export default Sell;
