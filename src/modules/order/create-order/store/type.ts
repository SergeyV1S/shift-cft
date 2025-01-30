import type { IOption } from "@modules/cost-calculation/type";
import type { IUserSession } from "@modules/user/types";

import type { EPayer, IAddress } from "../type";

export type TSteps =
  | "Способ отправки"
  | "Получатель"
  | "Отправитель"
  | "Откуда забрать"
  | "Куда доставить"
  | "Оплата доставки"
  | "Проверка данных заказа";

export interface ICreateOrderState {
  isLoading: boolean;
  error?: string;
  currentStep: TSteps;
  createOrder: {
    selectedOption?: IOption;
    receiver?: Omit<IUserSession, "email" | "city">;
    sender?: Omit<IUserSession, "email" | "city">;
    receiverAddress?: IAddress; // куда доставить?
    senderAddress?: IAddress; // откуда забрать?
    payer?: EPayer;
  };
}
