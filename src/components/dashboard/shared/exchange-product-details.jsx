import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Deleteicon from '@/assets/icons/delete-icon';
import Editicon from '@/assets/icons/edit-icon';
import postDetailsItem1 from '@/assets/post-details-item1.png';
import postDetailsItem2 from '@/assets/post-details-item1.png';
import postDetailsMainItem from '@/assets/post-details-item1.png';

function ExchangeProductDetails({isOpen, onClose}) {
    const productDetails = [
        {
            'item-offered': 'iPhone 12 Pro Max',
            phone: '123-456-7890',
            condition: 'new',
            'item-wanted': 'MacBook Pro',
            location: 'New York',
            category: 'Electronics',
            'item-description': 'Brand new iPhone 12 Pro Max, still sealed in box. Never used, with all original accessories included.128GB storage, Pacific Blue color. Looking for a fair trade open to offers.',
            message: 'Hi, I have a brand new iPhone 12 Pro Max available for trade. Let me know what you’re offering!',
            'product-image': [{
                image1: postDetailsItem1,
                image2: postDetailsItem2,
                image3: postDetailsItem2,
                image4: postDetailsItem1,
                displayImage: postDetailsMainItem,
            }]
        }
    ]
    return (
        <Dialog  open={isOpen} onOpenChange={onClose} className=''>
            <DialogContent className=" w-full max-w-[1390px] p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row justify-between gap-8 border border-[#E8E8E8] bg-[#fff] overflow-auto">
                <div className='basis-[60%] flex flex-col gap-4 sm:gap-6 lg:gap-8'>
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col justify-between gap-4'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[#8C8C8C] text-lg leading-[164%]'>Item Offered</p>
                                <p className='text-[#2F2F2F]'>{productDetails[0]['item-offered']}</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[#8C8C8C] text-lg leading-[164%]'>Phone</p>
                                <p className='text-[#2F2F2F] text-lg leading-[164%]'>{productDetails[0].phone}</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[#8C8C8C] text-lg leading-[164%]'>Condition</p>
                                <p className='text-[#2F2F2F] text-lg leading-[164%]'>{productDetails[0].condition}</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between gap-4'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[#8C8C8C] text-lg leading-[164%]'>Item Wanted</p>
                                <p className='text-[#2F2F2F] text-lg leading-[164%]'>{productDetails[0]['item-wanted']}</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[#8C8C8C] text-lg leading-[164%]'>Location</p>
                                <p className='text-[#2F2F2F] text-lg leading-[164%]'>{productDetails[0].location}</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[#8C8C8C] text-lg leading-[164%]'>Category</p>
                                <p className='text-[#2F2F2F] text-lg leading-[164%]'>{productDetails[0].category}</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#F2F2F2] p-6 rounded-3xl'>
                        <p className='text-[#8C8C8C] text-lg leading-[164%]'>Item Description</p>
                        <p className='text-[#2F2F2F] text-lg leading-[164%]'>{productDetails[0]['item-description']}<br />
                            Message me if interested!</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[#8C8C8C] text-lg leading-[164%]'>Category</p>
                        <div className='flex items-center gap-3'>
                            <p className='text-[#8C8C8C] p-3 rounded-3xl bg-[#7575751A] text-xs leading-[164%]'>{productDetails[0].category}</p>
                        </div>
                    </div>
                    <div className='bg-[#F2F2F2] p-6 rounded-3xl'>
                        <p className='text-[#8C8C8C] text-lg leading-[164%]'>Message</p>
                        <p className='text-[#2F2F2F] text-lg leading-[164%]'>{productDetails[0].message}</p>
                    </div>
                </div>
                <div className='basis-[40%] flex flex-col gap-2'>
                    <div className='flex items-center justify-between'>
                        <p className='text-[#A3A3A3] text-lg leading-[164%]'>Product Image</p>
                        <div className='flex items-center gap-3'>
                            <Deleteicon className="text-gray-400 cursor-pointer" />
                            <Editicon className="text-gray-400 cursor-pointer" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 sm:gap-6'>
                        <div className='grid sm:grid-cols-2 gap-4 sm:gap-6'>
                            {Object.values(productDetails[0]['product-image'][0])
                                .slice(0, 4)
                                .map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`product-${index}`}
                                        style={{ height: '238.914px' }}
                                        className='w-full rounded-lg '
                                    />
                                ))}
                        </div>
                        <div className='w-full'>
                            <img
                                src={productDetails[0]['product-image'][0].displayImage}
                                alt="display-product"
                                style={{ height: '240px' }}
                                className='w-full '
                            />
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ExchangeProductDetails