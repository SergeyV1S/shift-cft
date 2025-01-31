import type { EPayer, IAddress, IOption, IOrder, IUserContact } from "@shared/types";

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
    receiver?: IUserContact;
    sender?: IUserContact;
    receiverAddress?: IAddress; // куда доставить?
    senderAddress?: IAddress; // откуда забрать?
    payer?: EPayer;
  };
  createdOrder?: IOrder;
}
