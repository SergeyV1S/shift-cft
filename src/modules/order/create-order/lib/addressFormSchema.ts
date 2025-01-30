import { z } from "zod";

export const addressFormSchema = z.object({
  street: z.string(),
  house: z.string(),
  apartment: z.string(),
  comment: z.string()
});

export type TAddressFormSchema = z.infer<typeof addressFormSchema>;
