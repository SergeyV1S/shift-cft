import { z } from "zod";

import { formatePhone, validateAlphabet, validateSameAlphabet } from "@shared/helpers";

export const editProfileSormSchema = z
  .object({
    phone: z
      .string()
      .max(60, "Максимально 60 символов")
      .refine((phone) => {
        const formatedPhone = formatePhone(phone);
        return formatedPhone.length === 11;
      }, "Неверный номер телефона"),
    firstname: z
      .string()
      .min(1, "Обязательное поле")
      .max(60, "Максимально 60 символов")
      .refine(validateAlphabet, "Некорректный формат"),
    middlename: z
      .string()
      .max(60, "Максимально 60 символов")
      .refine(validateAlphabet, "Некорректный формат")
      .optional(),
    lastname: z
      .string()
      .min(1, "Обязательное поле")
      .max(60, "Максимально 60 символов")
      .refine(validateAlphabet, "Некорректный формат"),
    email: z.string().min(1, "Обязательное поле").email("Некорректный формат"),
    city: z.string().min(1, "Обязательное поле").max(60, "Максимально 60 символов")
  })
  .superRefine((data, context) => {
    if (!validateSameAlphabet([data.firstname, data.lastname, data.middlename || ""])) {
      ["firstname", "lastname", "middlename"].forEach((field) => {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Значения заданы с использованием разных алфавитов",
          path: [field]
        });
      });
    }
  });

export type IEditProfileSormSchema = z.infer<typeof editProfileSormSchema>;
