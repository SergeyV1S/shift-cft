import { z } from "zod";

import { EPayer } from "@shared/types";

export const deliveryPaymentFormSchema = z.object({
  payer: z.nativeEnum(EPayer)
});

export type TDeliveryPaymentFormSchema = z.infer<typeof deliveryPaymentFormSchema>;
