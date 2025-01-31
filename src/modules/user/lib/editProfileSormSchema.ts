import { z } from "zod";

import { formatePhone, validateAlphabet } from "@shared/helpers";

export const editProfileSormSchema = z.object({
  phone: z
    .string()
    .max(60, "Максимально 60 символов")
    .refine((phone) => {
      const formatedPhone = formatePhone(phone);
      return formatedPhone.length === 11;
    }, "Неверный номер телефона")
    .optional(),
  firstname: z
    .string()
    .max(60, "Максимально 60 символов")
    .refine(validateAlphabet, "Некорректный формат")
    .optional(),
  middlename: z
    .string()
    .max(60, "Максимально 60 символов")
    .refine(validateAlphabet, "Некорректный формат")
    .optional(),
  lastname: z.string().optional(),
  email: z.string().email("Некорректный формат").optional(),
  city: z
    .string()
    .max(60, "Максимально 60 символов")
    .refine(validateAlphabet, "Некорректный формат")
    .optional()
});

export type IEditProfileSormSchema = z.infer<typeof editProfileSormSchema>;
