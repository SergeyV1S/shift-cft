import { z } from "zod";

const packageSizeScheme = z.object({
  length: z.string(),
  width: z.string(),
  weight: z.string(),
  height: z.string()
});

const receiverPointScheme = z.object({
  latitude: z.string(),
  longitude: z.string()
});

const senderPointScheme = receiverPointScheme.extend({});

export const calculateDeliveryScheme = z.object({
  senderPoint: senderPointScheme,
  receiverPoint: receiverPointScheme,
  packageSize: packageSizeScheme
});
