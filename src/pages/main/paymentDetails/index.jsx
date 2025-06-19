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
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import PaymentSuccessModal from "@/components/payment-success-Modal";
import { FaCreditCard, FaPaypal, FaLock } from "react-icons/fa";

const PaymentDetails = () => {
  const form = useForm({
    resolver: zodResolver(sellSchema),
    defaultValues: {
      text: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleNavigate = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    console.log("close modal");
  };

  return (
    <>
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-[24px] font-semibold leading-[132%] tracking-[-0.48px] text-foreground">
          Payment Details
        </h1>
        <p className="text-lg text-gray-600 mt-5 mb-5">
          Fill in the details about your payment
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <FormLabel className="text-[18px] font-normal leading-[164%]">
                Payment Method
              </FormLabel>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 px-4 py-2 border rounded-md cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="appearance-none w-4 h-4 border-2 border-[#5AA20E] rounded-full checked:bg-[#5AA20E] checked:border-[#5AA20E]"
                  />
                  <FaCreditCard className="text-lg" /> Credit/Debit Card
                </label>
                <label className="flex items-center gap-2 px-4 py-2 border rounded-md cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={paymentMethod === "paypal"}
                    onChange={() => setPaymentMethod("paypal")}
                    className="appearance-none w-4 h-4 border-2 border-[#5AA20E] rounded-full checked:bg-[#5AA20E] checked:border-[#5AA20E]"
                  />
                  <FaPaypal className="text-lg" /> PayPal
                </label>
              </div>
            </div>

            {paymentMethod === "card" && (
              <>
                <FormField
                  control={form.control}
                  name="text"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Card Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="1234 5678 9012 3456"
                          {...field}
                          className="bg-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="text"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Expiry Date</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="MM/YY"
                            {...field}
                            className="bg-white"
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
                      <FormItem className="w-full">
                        <FormLabel>CVV</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="123"
                            {...field}
                            className="bg-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="text"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name on Card</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          {...field}
                          className="bg-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center space-x-2">
                  <Checkbox id="save-card" />
                  <label htmlFor="save-card" className="text-sm leading-tight">
                    Save card for future payments
                  </label>
                </div>
              </>
            )}

            <h1 className="text-[24px] font-semibold leading-[132%] tracking-[-0.48px] mt-5 mb-5 text-foreground">
              Review & Confirm
            </h1>

            <div className="flex justify-between gap-5 border-b-2 pb-5">
              <div className="flex-1 w-full">
                <p className="text-lg text-gray-600">Selected Plan</p>
              </div>
              <div className="flex-1 w-full text-right">
                <p className="text-lg text-gray-600">Standard Plan</p>
              </div>
            </div>

            <div className="flex justify-between gap-5 border-b-2 pb-5">
              <div className="flex-1 w-full">
                <p className="text-lg text-gray-600">Billing Cycle</p>
              </div>
              <div className="flex-1 w-full text-right">
                <p className="text-lg text-gray-600">Monthly</p>
              </div>
            </div>

            <div className="flex justify-between gap-5 border-b-2 pb-5">
              <div className="flex-1 w-full">
                <p className="text-lg text-gray-600">Total Cost</p>
              </div>
              <div className="flex-1 w-full text-right">
                <p className="text-lg font-semibold text-black">$24.99</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Input placeholder="Promo Code" />
              <Button variant="outline">Apply</Button>
            </div>

            <div className="flex items-start space-x-2 pt-4">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-sm leading-tight">
                I agree to the Terms & Conditions and Privacy Policy
              </label>
            </div>

            <Button
              onClick={handleNavigate}
              type="submit"
              className="w-full mt-4 bg-[#B6F16A] hover:bg-[#4e9214] text-black"
            >
              <FaLock className="mr-2" /> Confirm & Pay
            </Button>
          </form>
        </Form>

        <PaymentSuccessModal isOpen={isOpenModal} onClose={handleCloseModal} />
      </div>
    </>
  );
};

export default PaymentDetails;
