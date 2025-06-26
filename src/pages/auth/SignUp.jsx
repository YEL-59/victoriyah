import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import * as z from "zod";
import singupImg from "../../assets/signup.png";
import { Link } from "react-router";
import { useSignUp } from "@/hook/auth.hook";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

const SignUp = () => {
  const { form, mutate, isPending } = useSignUp();
  const onSubmit = (data) => {
    mutate(data);
    console.log(data);
  };
  //state
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  return (
    <div className="flex items-start flex-col lg:flex-row gap-8 justify-between min-h-screen bg-gray-100 px-8 sm:px-16 lg:px-24 xl:px-32 py-28">
      {/* Left Section */}
      <div className="max-w-[760px] w-full mx-auto">
        <h1 className="auth-title mb-6">
          Join the Trading Community – Start Swapping Today!
        </h1>
        <p className="auth-desc">
          Connect with a community of traders and swap items effortlessly. Post
          what you have, find what you need, and make fair trades—no money
          involved. Start trading today!
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
      <Card className="max-w-[692px] w-full px-12 sm:px-16 lg:px-20 py-[90px] shadow-none bg-primary border-none rounded-3xl mx-auto">
        <CardContent>
          <h2 className="font-semibold text-foreground text-[32px] mb-8">
            Signup now
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter your phone number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Address</FormLabel>
                    <FormControl>
                      <Textarea
                        className="border bg-white"
                        type="text"
                        placeholder="Type your address here."
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

              <FormField
                control={form.control}
                name="password_confirmation"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel>Conform Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword1 ? "text" : "password"}
                          placeholder="Enter your password"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword1((prev) => !prev)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                          tabIndex={-1}
                        >
                          {showPassword1 ? (
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

              <FormField
                control={form.control}
                name="terms_and_conditions"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2 !my-8">
                    <FormControl className="mt-2">
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-[12px]!important">
                      I agree to the Terms & Conditions
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-foreground hover:bg-foreground text-background py-2.5 px-4 text-lg font-semibold capitalize h-12 rounded-full !mt-0"
              >
                Signup
              </Button>
            </form>
          </Form>
          <p className="text-foreground text-lg text-center mt-8 font-normal">
            Already have an account?{" "}
            <a href="/sign-in" className="underline">
              Sign In
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
