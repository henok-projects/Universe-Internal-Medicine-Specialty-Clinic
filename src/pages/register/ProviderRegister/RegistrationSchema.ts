import { z } from "zod";
;

export const formOneSchema = z.object({
  providerName: z.string().min(1, {
    message: "Provider name must be at least 1 character.",
  }),
  providerEmail: z.string().email({
    message: "Enter valid email address",
  }),
  providerPhoneNumber: z.string().min(10, {
    message: "Enter valid phone number",
  }),
});

export const formTwoSchema = z.object({
  firstName: z.string().min(2, {
    message: "Enter valid first name",
  }),
  lastName: z.string().min(2, {
    message: "Enter valid last name",
  }),
  email: z.string().email({
    message: "Enter valid email",
  }),
  phoneNumber: z.string().min(9, {
    message: "Enter valid phone number",
  }),
});
