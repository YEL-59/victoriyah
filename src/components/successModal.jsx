import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import successIcon from '@/assets/icons/success-icon.svg';
import { Button } from "./ui/button";
import { Link } from "react-router";

function SuccessModal({isOpen, onClose}) {
    if (!isOpen) return null;
  return (
    <div>
        <Dialog open={isOpen} onOpenChange={onClose}>
                <DialogContent className="w-max flex flex-col gap-6">
                    <DialogHeader className={`flex flex-col gap-4`}>
                        <img src={successIcon} alt="" className="h-20 sm:h-24 w-20 sm:w-24 mx-auto"/>
                        <DialogTitle className='text-center text-3xl leading-[132%] font-semibold tracking-[-0.48px]'>Exchange request submitted Successful!</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col gap-5 text-center">
                        <p className="text-lg leading-[164%] text-[#757575]">The listing owner has been notified.</p>
                        <Link to='/'><Button className='w-full bg-[#96E437] text-foreground px-8 py-4 rounded-[24px] text-lg leading-[164%]'>Go to Home</Button></Link>
                    </div>
                </DialogContent>
        </Dialog>
    </div>
  )
}

export default SuccessModal