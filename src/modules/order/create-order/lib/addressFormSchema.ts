import { z } from "zod";

export const addressFormSchema = z.object({
  street: z.string().min(1, "Обязательное поле"),
  house: z.string().min(1, "Обязательное поле"),
  apartment: z.string().min(1, "Обязательное поле"),
  comment: z.string().optional()
});

export type TAddressFormSchema = z.infer<typeof addressFormSchema>;
