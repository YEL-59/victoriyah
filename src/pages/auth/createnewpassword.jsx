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

import singupImg from "../../assets/signin.png";
import { Link } from "react-router";
import { useResetPassword } from "@/hook/auth.hook";
import { useEffect } from "react";

const Createnewpassword = () => {
  const { form, mutate } = useResetPassword();
  const onSubmit = (data) => {
    mutate(data);
    console.log(data);
  };
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;
  const email = user?.email || "";
  useEffect(() => {
    if (email) {
      form.setValue("email", email);
    }
  }, [email]);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="flex-1">
        <div className="w-full  mx-auto flex-1  p-8  rounded-lg">
          <Card className="max-w-[692px] w-full px-12 sm:px-16 lg:px-20 py-[90px] shadow-none  border-none rounded-3xl">
            <CardContent>
              <h2 className="font-semibold text-foreground text-[32px] mb-2">
                Create new password
              </h2>
              <p className="font-normal text-foreground text-sm mb-8">
                Enter your new password below to complete the reset process
              </p>
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
                            value={"email"}
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
                  <FormField
                    control={form.control}
                    name="password_confirmation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
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

                  <Button
                    type="submit"
                    className="w-full mt-5 bg-foreground hover:bg-foreground text-background py-2.5 px-4 text-lg font-semibold capitalize h-12 rounded-full"
                  >
                    submit
                  </Button>
                </form>
              </Form>
              <p className="text-foreground text-lg text-center mt-8 font-normal">
                Don’t have account?
                <a href="#" className="underline">
                  Continue
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
