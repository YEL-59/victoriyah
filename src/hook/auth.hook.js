import { axiosPrivate, axiosPublic } from "@/lib/axios.config";
import {
  matchOtpSchema,
  resetPasswordSchema,
  sendOtpSchema,
  signInSchema,
  signUpSchema,
  updatePasswordSchema,
} from "@/schemas/auth.schemas";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import { z } from "zod";

export const useSignUp = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone_number: "",
      address: "",
      password_confirmation: "",
      terms_and_conditions: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload) => {
      const formData = new FormData();
      Object.entries(payload).forEach(([key, value]) => {
        if (key === "terms_and_conditions") {
          formData.append(key, value ? "1" : "0");
        } else if (value !== undefined && value !== null) {
          formData.append(key, value);
        }
      });

      const res = await axiosPublic.post("/auth/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    },
    onSuccess: (data) => {
      if (data?.status) {
        toast.success(data?.message || "User created successfully");
        const token = data?.data?.token;
        localStorage.setItem("token", token);
        const user = data?.data;
        localStorage.setItem("usersignup", JSON.stringify(user));
        navigate("/sign-in");
      } else {
        toast.error(data?.message || "Failed to create user");
      }
    },
    onError: (error) => {
      const message = error?.response?.data?.message || "Failed to create user";
      if (message.includes("email")) {
        form.setError("email", { message });
      } else {
        toast.error(message);
      }
    },
  });

  return { form, mutate, isPending };
};

//sign in
export const useSignIn = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const redirectUrl = params.get("redirect");

  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (credentials) => {
      const res = await axiosPublic.post("/auth/login", credentials);
      return res.data;
    },
    onSuccess: (data) => {
      if (data?.status) {
        toast.success(data?.message || "Sign in successfully");
        const token = data?.token;
        localStorage.setItem("token", token);
        const user = data?.data;
        localStorage.setItem("user", JSON.stringify(user));

        if (redirectUrl) {
          navigate(redirectUrl);
        } else {
          navigate("/");
        }
      } else {
        toast.error(data?.message || "Failed to sign in");
      }
    },
    onError: (error) => {
      const message =
        error?.response?.data?.message ||
        error?.response?.data?.error || // fallback to `data.error`
        error.message ||
        "Failed to sign in";

      // Handle email-specific error
      if (
        typeof message === "string" &&
        message.toLowerCase().includes("email")
      ) {
        form.setError("email", { message });
      } else {
        toast.error(message);
      }
    },
  });

  return { form, mutate, isPending };
};
//sign-out
export const useSignout = () => {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const { data } = await axiosPrivate.post("/auth/logout");
      if (!data?.status) {
        throw new Error(data?.message || "Failed to logout ");
      }
      return data;
    },
    onSuccess: (data) => {
      if (data?.status) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("usersignup");
        navigate("/sign-in");
        toast.success(data?.message || "Logged out successfully");
      } else {
        toast.error("error");
      }
    },

    onError: (error) => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("usersignup");
      toast.success(" You've been signed out locally.");
      navigate("/sign-in");
    },
  });

  return { mutate, isPending };
};
// send OTP function

export const useSendOtp = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(sendOtpSchema),
    defaultValues: {
      email: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ email }) => {
      const payload = {
        email: email,
      };
      const { data } = await axiosPublic.post("/auth/send-otp", payload);
      if (!data?.status) {
        throw new Error(data?.message || "Failed to send OTP");
      }
      return data;
    },
    onSuccess: (data) => {
      if (data?.status) {
        navigate("/verification", {
          state: { email: form.watch("email") },
        });
        toast.success(data?.message || "OTP sent successfully");
      } else {
        toast.error("error");
      }
    },
    onError: (error) => {
      const message = error?.response?.data?.message || error.message;
      toast.error(message || "Failed to send OTP");
    },
  });

  return { form, mutate, isPending };
};

//  OTP Match function
export const useMatchOtp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";

  const form = useForm({
    resolver: zodResolver(matchOtpSchema),
    defaultValues: {
      email,

      otp0: "",
      otp1: "",
      otp2: "",
      otp3: "",
    },
  });

  useEffect(() => {
    if (email) {
      form.reset({
        email,

        otp0: "",
        otp1: "",
        otp2: "",
        otp3: "",
      });
    }
  }, [email]);

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData) => {
      const otp =
        `${formData.otp0}${formData.otp1}${formData.otp2}${formData.otp3}`
          .replace(/\s/g, "")
          .toUpperCase();

      const payload = {
        email: formData.email,
        otp,
      };

      const { data } = await axiosPublic.post("/auth/verify-otp", payload);

      return data;
    },
    onSuccess: (data) => {
      navigate("/verificationsuccess", {
        state: { email: form.watch("email") },
      });
      toast.success(data.message || "OTP Verified");
    },
    onError: (error) => {
      const message = error?.response?.data?.message || error.message;
      toast.error(message || "OTP verification failed");
    },
  });

  return {
    form,
    matchOtp: mutate,
    isMatching: isPending,
  };
};

//  Reset-password function
export const useResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";

  const form = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email,
      password: "",
      password_confirmation: "",
    },
  });

  useEffect(() => {
    if (email) {
      form.reset({
        email,
        password: "",
        password_confirmation: "",
      });
    }
  }, [email]);

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData) => {
      const payload = {
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
      };

      const { data } = await axiosPublic.post("/auth/reset-password", payload);

      if (!data?.success) {
        throw new Error(data?.message || "Reset failed");
      }

      return data;
    },
    onSuccess: (data) => {
      if (data?.status) {
        toast.success(data.message || "Password reset successful");
        navigate("/sign-in");
      }
    },
    onError: (error) => {
      const message = error?.response?.data?.message || error.message;
      toast.error(message || "Password reset failed");
    },
  });

  return {
    form,
    mutate,
    isResetting: isPending,
  };
};
//update password
export const useUpdatePassword = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
      current_password: "",
      new_password: "",
      new_password_confirmation: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData) => {
      const payload = {
        current_password: formData.current_password,
        new_password: formData.new_password,
        new_password_confirmation: formData.new_password_confirmation,
      };

      const { data } = await axiosPrivate.post(
        "/dashboard/password/update",
        payload
      );

      if (!data?.status) {
        throw new Error(data?.message || "Reset failed");
      }

      return data;
    },
    onSuccess: (data) => {
      toast.success(data.message || "Password update successful");
      navigate("/sign-in");
    },
    onError: (error) => {
      const message = error?.response?.data?.message || error.message;
      toast.error(message || "Password update failed");
    },
  });

  return {
    form,
    updatePassword: mutate,
    isUpdating: isPending,
  };
};

export const useUpdateUser = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const form = useForm({
    defaultValues: {
      name: "",
      phone_number: "",
      avatar: "", // this will become a File object
      address: "",
    },
  });

  const { mutate: updateUser, isLoading } = useMutation({
    mutationFn: async (data) => {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("phone_number", data.phone_number);
      formData.append("address", data.address);

      if (data.avatar instanceof File) {
        formData.append("avatar", data.avatar); // ✅ send image as File
      }

      const res = await axiosPrivate.post(
        "/dashboard/profile/update",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return res.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
      // ✅ Update localStorage with the new user data
      // const updatedUser = data?.data?.user;
      // if (updatedUser) {
      //   localStorage.setItem("user", JSON.stringify(updatedUser));
      // }
      queryClient.invalidateQueries({ queryKey: ["userprofile"] });
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Something went wrong");
    },
  });

  return { form, updateUser, isLoading };
};
//get user profile
export const useGetUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["userprofile"],
    queryFn: async () => {
      const res = await axiosPrivate.get("/profile");
      return res.data;
    },
    refetchOnWindowFocus: false,
  });

  return { user: data?.data, isLoading };
};
