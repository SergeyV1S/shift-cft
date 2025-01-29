import { z } from "zod";

export const packageSizeScheme = z.object({
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
  package: packageSizeScheme
});
