import * as yup from "yup";
import { object } from "yup";

export const MFASchema = object({
  otp: yup
    .string()
    .required()
    .test("len", "must be exactly 6 digits", (val) => val.length === 6),
});

export const forgotPasswordSchema = object({
  email: yup.string().email().required(),
});

export const loginSchema = object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

export const devModeSchema = object({
  password: yup
    .string()
    .required()
    // .test(
    //   "is-devEit23#JeyLabs&@",
    //   "Invalid Password",
    //   (value) => value === "devEit23#JeyLabs&@"
    // ),
    .test("is-1", "Invalid Password", (value) => value === "1"),
});

export const baseUrlSchema = object({
  baseUrl: yup.string().required(),
});
