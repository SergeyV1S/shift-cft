import { z } from "zod";

import { formatePhone } from "@shared/lib/formatePhone";

export const signInPhoneSchema = z.object({
  phone: z.string().refine((phone) => {
    const formatedPhone = formatePhone(phone);
    return formatedPhone.length === 11;
  }, "Неверный номер телефона")
});

export const signInSchema = signInPhoneSchema.extend({
  otp: z.string().min(6, {
    message: "Код должен содержать 6 цифр"
  })
});
