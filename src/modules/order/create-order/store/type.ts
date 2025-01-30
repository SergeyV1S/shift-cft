import type { IOption } from "@modules/cost-calculation/type";
import type { IUserSession } from "@modules/user/types";

import type { EPayer, IAddress } from "../type";

export interface ICreateOrderState {
  isLoading: boolean;
  error?: string;
  currentStep: number;
  createOrder: {
    selectedOption?: IOption;
    receiver?: Omit<IUserSession, "email" | "city">;
    sender?: Omit<IUserSession, "email" | "city">;
    receiverAddress?: IAddress; // откуда забрать?
    senderAddress?: IAddress; // куда доставить?
    payer?: EPayer;
  };
}
