import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useUpdatePassword } from "@/hook/auth.hook";

const Privacy = () => {
  const { form, updatePassword, isUpdating } = useUpdatePassword();

  const onSubmit = (data) => {
    updatePassword(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Current Password */}
        <FormField
          control={form.control}
          name="current_password"
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

        {/* New Password */}
        <FormField
          control={form.control}
          name="new_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#315215] text-lg leading-[164%]">
                New Password
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter new password"
                  {...field}
                  className="bg-white rounded-lg py-[13px] px-[16px] border border-[#E8E8E8] text-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm New Password */}
        <FormField
          control={form.control}
          name="new_password_confirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#315215] text-lg leading-[164%]">
                Confirm New Password
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirm new password"
                  {...field}
                  className="bg-white rounded-lg py-[13px] px-[16px] border border-[#E8E8E8] text-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isUpdating}
          className="bg-[#96E437] text-lg font-semibold leading-[164%] capitalize text-[#315215] rounded-[24px] w-full py-6"
        >
          {isUpdating ? "Saving..." : "Save Changes"}
        </Button>
      </form>
    </Form>
  );
};

export default Privacy;
