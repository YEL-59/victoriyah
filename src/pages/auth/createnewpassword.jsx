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

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  terms: z
    .boolean()
    .refine((val) => val === true, "You must agree to the Terms & Conditions"),
});

const Createnewpassword = () => {
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
        <div className="w-full  mx-auto flex-1  p-8  rounded-lg">
          <Card className="max-w-[692px] w-full px-12 sm:px-16 lg:px-20 py-[90px] shadow-none  border-none rounded-3xl">
            <CardContent>
              <h2 className="font-semibold text-foreground text-[32px] mb-8">
                Welcome Back
              </h2>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
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
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Enter your password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-0 sm:gap-4 mb-10 sm:mb-0 items-center flex-col sm:flex-row justify-between">
                    <FormField
                      control={form.control}
                      name="terms"
                      render={({ field }) => (
                        <FormItem className="flex items-center space-x-2 !my-8">
                          <FormControl className="mt-2">
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel>
                            I agree to the Terms & Conditions
                          </FormLabel>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Link
                      to="#"
                      className="hover:underline text-lg text-foreground"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-foreground hover:bg-foreground text-background py-2.5 px-4 text-lg font-semibold capitalize h-12 rounded-full !mt-0"
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

export default Createnewpassword;
