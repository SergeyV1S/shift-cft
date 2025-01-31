import { z } from "zod";

import { formatePhone, validateAlphabet, validateSameAlphabet } from "@shared/helpers";

export const receiverSenderFormSchema = z
  .object({
    firstname: z
      .string()
      .min(1, "Обязательное поле")
      .max(60, "Максимально 60 символов")
      .refine(validateAlphabet, "Некорректный формат"),
    middlename: z
      .string()
      .optional()
      .refine((value) => !value || validateAlphabet(value), "Некорректный формат"),
    lastname: z
      .string()
      .min(1, "Обязательное поле")
      .max(60, "Максимально 60 символов")
      .refine(validateAlphabet, "Некорректный формат"),
    phone: z.string().refine((phone) => {
      const formattedPhone = formatePhone(phone);
      return formattedPhone.length === 11;
    }, "Неверный номер телефона")
  })
  .refine(
    (data) => validateSameAlphabet([data.firstname, data.middlename || "", data.lastname]),
    "Значения заданы с использованием разных алфавитов"
  );
export type TReceiverSenderFormSchemas = z.infer<typeof receiverSenderFormSchema>;
