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
import { useUpdateUser } from "@/hook/auth.hook";
import { useState } from "react";

const General = () => {
  const { form, updateUser, isLoading } = useUpdateUser();
  const [preview, setPreview] = useState(null);

  const onSubmit = (data) => {
    console.log("Submitting", data);
    updateUser(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
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

        {/* Phone */}
        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#315215] text-base md:text-lg leading-[164%]">
                Phone Number
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your phone number"
                  {...field}
                  className="bg-white rounded-lg py-[13px] px-[16px] border border-[#E8E8E8] text-base md:text-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Address */}
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#315215] text-base md:text-lg leading-[164%]">
                Address
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your address"
                  {...field}
                  className="bg-white rounded-lg py-[13px] px-[16px] border border-[#E8E8E8] text-base md:text-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Avatar Upload */}
        <FormField
          control={form.control}
          name="avatar"
          render={({ field: { onChange, value, ...fieldProps } }) => (
            <FormItem>
              <FormLabel className="text-[#315215] text-base md:text-lg leading-[164%]">
                Avatar Upload
              </FormLabel>
              <FormControl>
                <>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setPreview(URL.createObjectURL(file));
                        onChange(file); // set file in form
                      }
                    }}
                    className="bg-white rounded-lg py-[13px] px-[16px] border border-[#E8E8E8] text-base md:text-lg"
                    {...fieldProps}
                  />
                  {preview && (
                    <img
                      src={preview}
                      alt="Avatar Preview"
                      className="mt-4 w-24 h-24 object-cover rounded-full"
                    />
                  )}
                </>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isLoading}
          className="bg-[#96E437] text-lg font-semibold leading-[164%] capitalize text-[#315215] rounded-[24px] w-full py-6"
        >
          {isLoading ? "Saving..." : "Save Changes"}
        </Button>
      </form>
    </Form>
  );
};

export default General;
