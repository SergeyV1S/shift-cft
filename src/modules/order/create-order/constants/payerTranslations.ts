import { EPayer } from "@modules/order/create-order/type";

export const payerTranslation: Record<EPayer, string> = {
  [EPayer.RECEIVER]: "Получатель",
  [EPayer.SENDER]: "Отправитель"
};
