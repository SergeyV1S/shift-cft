import { EPayer } from "@shared/types";

export const payerTranslation: Record<EPayer, string> = {
  [EPayer.RECEIVER]: "Получатель",
  [EPayer.SENDER]: "Отправитель"
};
