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
import { useState } from "react";
import PaymentSuccessModal from "@/components/payment-success-Modal";
const PaymentDetails = () => {
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
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[18px] font-normal leading-[164%]">
                    Payment Method
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Credit/Debit Card"
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
                  <FormControl>
                    <Textarea
                      placeholder="Paypal"
                      id="message"
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
                    Card Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="12345687"
                      {...field}
                      className="w-full   bg-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between gap-5">
              <div className="w-full">
                {" "}
                <FormField
                  control={form.control}
                  name="text"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[18px] font-normal leading-[164%]">
                        Expiry Date
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="12345687"
                          {...field}
                          className="w-full   bg-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full">
                {" "}
                <FormField
                  control={form.control}
                  name="text"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[18px] font-normal leading-[164%]">
                        cvv
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="12345687"
                          {...field}
                          className="w-full   bg-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[18px] font-normal leading-[164%]">
                    Name on Card
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
                        <SelectTrigger className="py-2 bg-white">
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

            <h1 className="text-[24px] font-semibold leading-[132%] tracking-[-0.48px] mt-5 mb-5 text-foreground">
              Review & Confirm
            </h1>

            <div className="flex justify-between gap-5 border-b-2 pb-5">
              {" "}
              <div className="flex-1 w-full">
                <p className="text-lg text-gray-600">Payment Method</p>
              </div>
              <div className="flex-1 w-full">
                <p className="text-lg text-gray-600 text-right">Card Number</p>
              </div>
            </div>
            <div className="flex justify-between gap-5 border-b-2 pb-5">
              {" "}
              <div className="flex-1 w-full">
                <p className="text-lg text-gray-600">Billing Cycle</p>
              </div>
              <div className="flex-1 w-full">
                <p className="text-lg text-gray-600 text-right">Monthly</p>
              </div>
            </div>
            <div className="flex justify-between gap-5 border-b-2 pb-5">
              {" "}
              <div className="flex-1 w-full">
                <p className="text-lg text-gray-600">Total Cost</p>
              </div>
              <div className="flex-1 w-full">
                <p className="text-lg text-gray-600 text-right">$24.99</p>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="w-full">
                <Link>
                  {" "}
                  <button
                    onClick={handleNavigate}
                    type="reset"
                    className="bg-primary text-foreground rounded-full px-4 py-2 ml-4 w-full hover:bg-transparent hover:border"
                  >
                    Confirm & Pay
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </Form>
        <PaymentSuccessModal isOpen={isOpenModal} onClose={handleCloseModal} />
      </div>
    </>
  );
};

export default PaymentDetails;
