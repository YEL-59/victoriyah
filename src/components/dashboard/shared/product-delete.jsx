import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from 'react-hook-form';
import deleteIcon from '@/assets/icons/delete-icon-red.svg';

function ProductDelete({ isOpen, onClose }) {
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

    const onSubmit = data => {
        console.log(data);
        setIsSuccessModalOpen(true);
        reset();
    };

    const handleCloseModal = () => {
        setIsSuccessModalOpen(false);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="w-full max-w-[518px]">
                <div className='flex flex-col  gap-4'>
                    <div className='w-max mx-auto p-6 rounded-[40px] bg-[#FEE2E2] cursor-pointer'>
                        <img src={deleteIcon} alt="icon" className='h-6 w-6'/>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <h1 className='text-3xl sm:text-[28px] lg:text-[32px] font-semibold leading-[132%] tracking-[-0.64px]'>Confirm Deletion</h1>
                        <p className='max-w-[80%] w-full text-base text-center sm:text-lg leading-[164%]'>Are you sure you want to delete this item?
                        This action cannot be undone.</p>
                    </div>
                </div>
                <DialogFooter className='w-full flex flex-col gap-4 mt-6'>
                    <Button
                        type="button"
                        onClick={onClose}
                        className='w-full bg-[#96E437] text-foreground px-8 py-2 rounded-[24px]'
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        className='w-full bg-[#FFF] text-foreground px-8 py-2 rounded-[24px]'
                    >
                        Yes
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default ProductDelete;