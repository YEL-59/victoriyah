import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import * as z from "zod";
import singupImg from "../../assets/signin.png";
import { useSendOtp } from "@/hook/auth.hook";

const Resetpassword = () => {
  const { form, mutate } = useSendOtp();

  const onSubmit = (data) => {
    mutate(data);
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="flex-1">
        <div className="w-full max-w-md mx-auto flex-1  p-20  rounded-lg">
          <div className="text-start mb-6">
            <h1 className="text-4xl font-bold">Reset password</h1>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-xl bg-foreground hover:bg-foreground text-background py-2.5 px-10 text-lg font-semibold capitalize h-12 rounded-full"
              >
                Reset password
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center flex-1 bg-primary h-screen p-10">
        <div className="max-w-[760px] w-full mx-auto">
          <h1 className="auth-title mb-6">
            Join the Trading Community – Start Swapping Today!
          </h1>
          <p className="auth-desc">
            Connect with a community of traders and swap items effortlessly.
            Post what you have, find what you need, and make fair trades—no
            money involved. Start trading today!
          </p>
          <div className="mt-16 rounded-[32px] overflow-hidden">
            <img
              src={singupImg}
              alt="Diapers"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resetpassword;
