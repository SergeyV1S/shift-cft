import { z } from "zod";

export const exactPackageSizesSchema = z.object({
  length: z.string(),
  width: z.string(),
  weight: z.string(),
  height: z.string()
});
