import { z } from "zod";

import { formatePhone } from "@shared/lib/formatePhone";

export const receiverSenderFormSchema = z.object({
  firstname: z.string(),
  middlename: z.string(),
  lastname: z.string(),
  phone: z.string().refine((phone) => {
    const formatedPhone = formatePhone(phone);
    return formatedPhone.length === 11;
  }, "Неверный номер телефона")
});

export type TReceiverSenderFormSchemas = z.infer<typeof receiverSenderFormSchema>;
