import { z } from "zod";

//const ukMobileRegex = /^(?:\+44|0)7\d{9}$/;
export const signUpSchema = z
  .object({
    name: z.string().min(1, "First name is required"),

    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters long"),
    password_confirmation: z.string().min(1, "Confirm Password is required"),

    terms_and_conditions: z
      .boolean()
      .refine(
        (val) => val === true,
        "You must agree to the Terms & Conditions"
      ),
  })
  .refine((data) => data.password === data.password_confirmation, {
    path: ["password_confirmation"],
    message: "Passwords do not match",
  });

export const signInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

export const sendOtpSchema = z.object({
  email: z.string().email("Invalid email address"),
});

// export const matchOtpSchema = z.object({
//   otp0: z
//     .string()
//     .min(1, "Required")
//     .max(1, "Must be a single digit")
//     .regex(/^\d$/, "Must be a digit"),
//   otp1: z
//     .string()
//     .min(1, "Required")
//     .max(1, "Must be a single digit")
//     .regex(/^\d$/, "Must be a digit"),
//   otp2: z
//     .string()
//     .min(1, "Required")
//     .max(1, "Must be a single digit")
//     .regex(/^\d$/, "Must be a digit"),
//   otp3: z
//     .string()
//     .min(1, "Required")
//     .max(1, "Must be a single digit")
//     .regex(/^\d$/, "Must be a digit"),
// });

export const matchOtpSchema = z.object({
  email: z.string().email(),
  otp0: z.string().min(1).max(1),
  otp1: z.string().min(1).max(1),
  otp2: z.string().min(1).max(1),
  otp3: z.string().min(1).max(1),
});

export const resetPasswordSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
    password_confirmation: z.string().min(8),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });
