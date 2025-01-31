import { z } from "zod";

import { formatePhone } from "@shared/helpers";

export const receiverSenderFormSchema = z.object({
  firstname: z.string().min(1, "Обязательное поле"),
  middlename: z.string().min(1, "Обязательное поле"),
  lastname: z.string().min(1, "Обязательное поле"),
  phone: z.string().refine((phone) => {
    const formatedPhone = formatePhone(phone);
    return formatedPhone.length === 11;
  }, "Неверный номер телефона")
});

export type TReceiverSenderFormSchemas = z.infer<typeof receiverSenderFormSchema>;
