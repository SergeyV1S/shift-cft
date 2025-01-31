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
    comment: z.string().optional()
  })
  .refine(
    (data) => validateSameAlphabetAndDigits([data.house, data.street]),
    "Значения заданы с использованием разных алфавитов"
  );

export type TAddressFormSchema = z.infer<typeof addressFormSchema>;
