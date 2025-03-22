import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  dob: z.string().min(1, "Date of Birth is required"),
});

const General = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      dob: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#315215] text-base md:text-lg leading-[164%]">
                Full Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your name"
                  {...field}
                  className="bg-white rounded-lg py-[13px] px-[16px] border border-[#E8E8E8] text-base md:text-lg"
                />
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
              <FormLabel className="text-[#315215] text-lg leading-[164%]">
                Email Address
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter email your address"
                  {...field}
                  className="bg-white rounded-lg py-[13px] px-[16px] border border-[#E8E8E8] text-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#315215] text-lg leading-[164%]">
                Date of Birth
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="May 5, 2000"
                  {...field}
                  className="bg-white rounded-lg py-[13px] px-[16px] border border-[#E8E8E8] text-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="bg-[#96E437] text-lg font-semibold leading-[164%]capitalize text-[#315215] rounded-[24px] w-full py-6">
          Save Changes
        </Button>
      </form>
    </Form>
  );
};

export default General;
