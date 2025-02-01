import { z } from "zod";

import {
  validateAlphabet,
  validateAlphabetWithDigits,
  validateSameAlphabetAndDigits
} from "@shared/helpers";

export const addressFormSchema = z
  .object({
    street: z
      .string()
      .min(1, "Обязательное поле")
      .max(100, "Максимально 100 символов")
      .refine(validateAlphabet, "Некорректный формат"),
    house: z
      .string()
      .min(1, "Обязательное поле")
      .max(100, "Максимально 100 символов")
      .refine(validateAlphabetWithDigits, "Некорректный формат"),
    apartment: z
      .string()
      .min(1, "Обязательное поле")
      .max(100, "Максимально 100 символов")
      .refine(validateAlphabetWithDigits, "Некорректный формат"),
    comment: z
      .string()
      .max(300, "Максимально 300 символов")
      .refine(validateAlphabetWithDigits, "Некорректный формат")
      .optional()
  })
  .superRefine((data, context) => {
    if (!validateSameAlphabetAndDigits([data.house, data.street])) {
      ["house", "street"].forEach((field) => {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Значения заданы с использованием разных алфавитов",
          path: [field]
        });
      });
    }
  });

export type TAddressFormSchema = z.infer<typeof addressFormSchema>;
