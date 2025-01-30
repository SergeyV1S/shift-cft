import type { IOption } from "@modules/cost-calculation/type";
import type { IUserSession } from "@modules/user/types";

import type { EPayer, IAddress, IOrder } from "../type";

export enum ESteps {
  DELIVERY_METHOD = "Способ отправки",
  RECEIVER = "Получатель",
  SENDER = "Отправитель",
  PICKUP_LOCATION = "Откуда забрать",
  DELIVERY_LOCATION = "Куда доставить",
  PAYMENT = "Оплата доставки",
  ORDER_REVIEW = "Проверка данных заказа"
}

export interface ICreateOrderState {
  isLoading: boolean;
  error?: string;
  currentStep: ESteps;
  createOrder: {
    option?: IOption;
    receiver?: Omit<IUserSession, "email" | "city">;
    sender?: Omit<IUserSession, "email" | "city">;
    receiverAddress?: IAddress; // куда доставить?
    senderAddress?: IAddress; // откуда забрать?
    payer?: EPayer;
  };
  createdOrder?: IOrder;
}
