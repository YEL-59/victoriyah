import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import singupImg from "../../assets/signin.png";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  terms: z
    .boolean()
    .refine((val) => val === true, "You must agree to the Terms & Conditions"),
});

const Verification = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      terms: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="flex-1">
        <div className="w-full max-w-md mx-auto flex-1  p-8  rounded-lg">
          <div className="text-start mb-6">
            <h1 className="text-4xl font-bold">Enter the verification code</h1>
            <p className="text-sm text-gray-600">
              We sent a code to ha**********@gmail.com
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Verification Code</FormLabel>
                    <FormControl>
                      <InputOTP
                        maxLength={4}
                        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                        {...field}
                      >
                        <InputOTPGroup className="flex gap-4 justify-center">
                          <InputOTPSlot
                            index={0}
                            className="w-12 h-12 text-center text-lg border rounded-md"
                          />
                          <InputOTPSlot
                            index={1}
                            className="w-12 h-12 text-center text-lg border rounded-md"
                          />
                          <InputOTPSlot
                            index={2}
                            className="w-12 h-12 text-center text-lg border rounded-md"
                          />
                          <InputOTPSlot
                            index={3}
                            className="w-12 h-12 text-center text-lg border rounded-md"
                          />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="text-start text-sm text-gray-500 mt-4">
                We&apos;ve sent a 6-digit verification code to your email. Check
                your spam folder in case you didn&apos;t receive the code.
              </p>

              <Button
                type="submit"
                className="w-xl bg-foreground hover:bg-foreground text-background py-2.5 px-10 text-lg font-semibold capitalize h-12 rounded-full"
              >
                Submit
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

export default Verification;
