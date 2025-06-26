import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

import { Card, CardContent } from "@/components/ui/card";
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
import { Link } from "react-router";
import { useSignIn } from "@/hook/auth.hook";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const SignIn = () => {
  const { form, mutate } = useSignIn();
  const onSubmit = (data) => {
    mutate(data);
    console.log(data);
  };
  //state
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex items-start justify-between flex-col sm:flex-row min-h-screen bg-gray-100 px-8 sm:px-16 lg:px-24 xl:px-32 py-28">
      {/* Left Section */}
      <div className="max-w-[760px] w-full mx-auto">
        <h1 className="auth-title mb-6">
          Welcome Back! Trade & Connect with Your Community.
        </h1>
        <p className="auth-desc">
          Glad to have you back! Browse new listings, connect with traders, and
          swap items easily. Log in to continue your trading journey!
        </p>
        <div className="mt-16 rounded-[32px] overflow-hidden">
          <img
            src={singupImg}
            alt="Diapers"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Section (Signup Form) */}
      <Card className="max-w-[692px] w-full px-12 sm:px-16 lg:px-20 py-[90px] shadow-none bg-primary border-none rounded-3xl">
        <CardContent>
          <h2 className="font-semibold text-foreground text-[32px] mb-8">
            Welcome Back
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                          tabIndex={-1}
                        >
                          {showPassword ? (
                            <EyeOff size={20} />
                          ) : (
                            <Eye size={20} />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Link
                to="/resetpassword"
                className="hover:underline text-xs text-foreground"
              >
                Forgot password?
              </Link>

              <Button
                type="submit"
                className="w-full mt-10 bg-foreground hover:bg-foreground text-background py-2.5 px-4 text-lg font-semibold capitalize h-12 rounded-full "
              >
                Sign In
              </Button>
            </form>
          </Form>
          <p className="text-foreground text-lg text-center mt-8 font-normal">
            Don’t have account?
            <a href="/sign-up" className="underline">
              Sign Up
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
