import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import singupImg from "../../assets/signin.png";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useMatchOtp } from "@/hook/auth.hook";

const Verification = () => {
  const { form, matchOtp } = useMatchOtp();

  const onSubmit = (data) => {
    matchOtp(data);
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
              <div className="flex gap-4 justify-center">
                {[0, 1, 2, 3].map((i) => (
                  <FormField
                    key={i}
                    control={form.control}
                    name={`otp${i}`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <input
                            {...field}
                            maxLength={1}
                            className="w-12 h-12 text-center text-lg border rounded-md"
                            onChange={(e) => {
                              // Only allow alphanumeric characters
                              const val = e.target.value.replace(
                                /[^a-zA-Z0-9]/g,
                                ""
                              );
                              field.onChange(val);
                              // Auto-focus next input
                              if (val && i < 3) {
                                const next = document.querySelector(
                                  `input[name=otp${i + 1}]`
                                );
                                if (next) next.focus();
                              }
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
              </div>

              <p className="text-start text-sm text-gray-500 mt-4">
                We&apos;ve sent a 4-digit verification code to your email. Check
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
