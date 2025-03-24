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
import addImage from '@/assets/icons/add-image.svg';
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import addButton from '@/assets/icons/add-button.svg';
import deleteTags from '@/assets/icons/delete-tags.svg';
import { Textarea } from "../ui/textarea";
import SuccessModal from "../successModal";

function Exchange({ isOpen, onClose }) {
    const { register, handleSubmit, control, reset } = useForm();
    const [images, setImages] = useState([null, null, null, null]);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const handleImageUpload = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const newImages = [...images];
            newImages[index] = URL.createObjectURL(file);
            setImages(newImages);
        }
    };

    const onSubmit = data => {
        console.log(data);
        setIsSuccessModalOpen(true);
        reset();
    };

    const handleCloseModal = () => {
        setIsSuccessModalOpen(false);
    };

    if (!isOpen) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="w-full max-w-[1390px]">
                <DialogHeader>
                    <DialogTitle className='text-3xl leading-[132%] font-semibold tracking-[-0.48px]'>Upload Item Details</DialogTitle>
                    <DialogDescription className='text-base text-[#2F2F2F]'>
                        Fill in the information below to list your item
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col">
                        {/* Form fields here */}
                        <div className="grid lg:grid-cols-2 gap-4 py-4 text-[#2F2F2F]">
                            {/* Item Name */}
                            <div className="flex flex-col justify-between gap-6">
                                <div className="w-full flex flex-col gap-3">
                                    <Label htmlFor="name" className='text-lg leading-[164%]'>Item Name *</Label>
                                    <Input
                                        id="name"
                                        placeholder="Enter item name"
                                        className="col-span-3 border border-[#E8E8E8] rounded-[8px] px-4 py-3"
                                        {...register("name", { required: true })}
                                    />
                                </div>
                                {/* Item Description */}
                                <div className="w-full flex flex-col gap-3">
                                    <Label htmlFor="desc" className='text-lg leading-[164%]'>Item Description *</Label>
                                    <Textarea
                                        id="desc"
                                        placeholder="Describe your item in details"
                                        rows={8}
                                        className="col-span-3 border border-[#E8E8E8] rounded-[8px] px-4 py-3"
                                        {...register("description", { required: true })}
                                    />
                                </div>
                                {/* Category and Condition */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="w-full flex flex-col gap-3">
                                        <Label htmlFor="category" className="text-lg leading-[164%]">Category *</Label>
                                        <Controller
                                            name="category"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger className="w-full border border-[#E8E8E8] rounded-[8px] px-4 py-3 h-12 outline-none">
                                                        <SelectValue placeholder="Select a category" />
                                                    </SelectTrigger>
                                                    <SelectContent className="w-full">
                                                        <SelectItem value="electronics">Electronics</SelectItem>
                                                        <SelectItem value="fashion">Fashion</SelectItem>
                                                        <SelectItem value="home">Home & Living</SelectItem>
                                                        <SelectItem value="beauty">Beauty</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                    </div>
                                    <div className="w-full flex flex-col gap-3">
                                        <Label htmlFor="condition" className="text-lg leading-[164%]">Condition *</Label>
                                        <Controller
                                            name="condition"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger className="w-full border border-[#E8E8E8] rounded-[8px] px-4 py-3 h-12 outline-none">
                                                        <SelectValue placeholder="Select a condition" />
                                                    </SelectTrigger>
                                                    <SelectContent className="w-full">
                                                        <SelectItem value="new">New</SelectItem>
                                                        <SelectItem value="used">Used</SelectItem>
                                                        <SelectItem value="refurbished">Refurbished</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Product Images and other fields */}
                            <div className="flex flex-col gap-6">
                                {/* Product Images */}
                                <div className="basis-1/2 flex flex-col gap-3">
                                    <Label htmlFor="product-image" className='text-lg leading-[164%]'>Product Images *</Label>
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
                                        <p className="text-xs leading-[164%]">Upload up to 5 images (Max 5MB each)</p>
                                        <div className="flex items-center gap-3">
                                            <img src={addButton} alt="" />
                                            <p className="text-lg text-[#5AA20E] leading-[164%]">Add a Youtube or video link</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Location and Phone */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="w-full flex flex-col gap-3">
                                        <Label htmlFor="location" className='text-lg leading-[164%]'>Location *</Label>
                                        <Input
                                            id="location"
                                            placeholder="Enter your location"
                                            className="col-span-3 border border-[#E8E8E8] rounded-[8px] px-4 py-3"
                                            {...register("location", { required: true })}
                                        />
                                    </div>
                                    <div className="w-full flex flex-col gap-3">
                                        <Label htmlFor="phone" className='text-lg leading-[164%]'>Phone *</Label>
                                        <Input
                                            id="phone"
                                            placeholder="Enter phone number"
                                            className="col-span-3 border border-[#E8E8E8] rounded-[8px] px-4 py-3"
                                            {...register("phone", { required: true })}
                                        />
                                    </div>
                                </div>
                                {/* Tags */}
                                <div className="w-full flex flex-col  gap-3">
                                    <Label htmlFor="tags" className='text-lg leading-[164%]'>Tag (Optional)</Label>
                                    <div className="flex flex-col gap-4">
                                        <Input
                                            id="tags"
                                            placeholder="Add tags separated by commas"
                                            className="basis-1/2 border border-[#E8E8E8] rounded-[8px] px-4 py-3 outline-none"
                                            {...register("tags")}
                                        />
                                        <div className="basis-1/2 flex gap-2">
                                            <div className="bg-[#E8E8E8] px-3 py-2 flex items-center gap-1 rounded-[24px]">
                                                <p>Example</p>
                                                <img src={deleteTags} alt="icon" />
                                            </div>
                                            <div className="bg-[#E8E8E8] px-3 py-2 flex items-center gap-1 rounded-[24px]">
                                                <p>Example</p>
                                                <img src={deleteTags} alt="icon" />
                                            </div>
                                            <div className="bg-[#E8E8E8] px-3 py-2 flex items-center gap-1 rounded-[24px]">
                                                <p>Tag</p>
                                                <img src={deleteTags} alt="icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Message */}
                        <div className="w-full flex flex-col gap-3">
                            <Label htmlFor="message" className='text-lg leading-[164%]'>Message *</Label>
                            <Textarea
                                id="message"
                                rows={4}
                                placeholder="Write a message.."
                                className="border border-[#E8E8E8] rounded-[8px] px-4 py-3 outline-none"
                                {...register("message", { required: true })}
                            />
                        </div>
                    </div>
                    <DialogFooter className='w-full flex flex-col gap-4 mt-6'>
                        <Button type="button" onClick={onClose} className='w-full bg-[#96E437] text-foreground px-8 py-2 rounded-[24px]'>Cancel</Button>
                        <Button type="submit" className='w-full bg-[#FFF] text-foreground px-8 py-2 rounded-[24px]'>Submit Request</Button>
                    </DialogFooter>
                </form>
                <SuccessModal isOpen={isSuccessModalOpen} onClose={handleCloseModal} />
            </DialogContent>
        </Dialog>
    );
}

export default Exchange;