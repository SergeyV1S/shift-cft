import { z } from "zod";

export const editProfileSormSchema = z.object({
  phone: z.string().optional(),
  firstname: z.string().optional(),
  middlename: z.string().optional(),
  lastname: z.string().optional(),
  email: z.string().optional(),
  city: z.string().optional()
});

export type IEditProfileSormSchema = z.infer<typeof editProfileSormSchema>;
