import * as Yup from "yup";

export const reservationSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "Must be 3 characters or less")
    .required("Name is required"),
  phoneNumber: Yup.string()
    .min(10, "Phone number must be at latest 10 characters")
    .required("Phone is required"),
  email: Yup.string()
    .email("Email is invalid")
    .required("Email is required"),
  persons: Yup.string()
    .required("Persons is required"),
  date:Yup.string().required("Date is required")
});
