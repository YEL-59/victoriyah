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

const formSchema = z
  .object({
    currentPassword: z.string().min(6, "Current password is required"),
    newPassword: z
      .string()
      .min(6, "New password must be at least 6 characters long"),
    confirmNewPassword: z.string().min(6, "Confirm password is required"),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
  });

const Privacy = () => {
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
          name="currentPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#315215] text-lg leading-[164%]">
              Current Password
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter current password"
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
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#315215] text-lg leading-[164%]">
              New Password
              </FormLabel>
              <FormControl>
                <Input
                   type="password" placeholder="Enter new password" {...field}
                  className="bg-white rounded-lg py-[13px] px-[16px] border border-[#E8E8E8] text-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmNewPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#315215] text-lg leading-[164%]">
              Confirm New Password
              </FormLabel>
              <FormControl>
                <Input
                   type="password" placeholder="Confirm new password" {...field}
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

export default Privacy;
