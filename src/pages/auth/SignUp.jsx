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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import singupImg from "../../assets/signup.png";

const formSchema = z
  .object({
    name: z.string().min(1, "Full Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    terms: z
      .boolean()
      .refine(
        (val) => val === true,
        "You must agree to the Terms & Conditions"
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const SignupPage = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-start justify-between min-h-screen bg-gray-100 px-32 py-28">
      {/* Left Section */}
      <div className="max-w-[760px] w-full">
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
      <Card className="max-w-[692px] w-full px-20 py-[90px] shadow-none bg-primary border-none">
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
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password again"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                    <FormLabel>I agree to the Terms & Conditions</FormLabel>
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
            <a href="#" className="underline">
              Sign In
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupPage;
