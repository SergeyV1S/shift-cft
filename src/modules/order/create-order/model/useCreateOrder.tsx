import type { IOption } from "@modules/cost-calculation/type";

import { useAppDispatch, useAppSelector } from "@app/store/hooks";

import type { TReceiverSenderFormSchemas } from "../lib";
import {
  decrementStep,
  getCreateOrderState,
  incrementStep,
  setCurrentStep,
  setOrderField
} from "../store";

export const useCreateOrder = () => {
  const dispatch = useAppDispatch();
  const { currentStep } = useAppSelector(getCreateOrderState);

  const incrementStepMethod = () => dispatch(incrementStep(currentStep));
  const decrementStepMethod = () => dispatch(decrementStep(currentStep));

  const selectDeliveryMethod = (option: IOption) => {
    dispatch(setCurrentStep("Получатель"));
    dispatch(setOrderField({ field: "selectedOption", value: option }));
  };

  const setReceiver = (data: TReceiverSenderFormSchemas) => {
    dispatch(setCurrentStep("Отправитель"));
    dispatch(setOrderField({ field: "receiver", value: data }));
  };

  const setSender = (data: TReceiverSenderFormSchemas) => {
    dispatch(setCurrentStep("Откуда забрать"));
    dispatch(setOrderField({ field: "sender", value: data }));
  };

  // const setReceiverAddress = (data: any) => {
  //   dispatch(setCurrentStep("Куда доставить"));
  //   dispatch(setOrderField({ field: "receiverAddress", value: data }));
  // };

  // const setSenderAddress = (data: any) => {
  //   dispatch(setCurrentStep("Оплата доставки"));
  //   dispatch(setOrderField({ field: "sender", value: data }));
  // };

  // const setPayer = (data: any) => {
  //   dispatch(setCurrentStep("Проверка данных заказа"));
  //   dispatch(setOrderField({ field: "sender", value: data }));
  // };

  return { selectDeliveryMethod, setReceiver, setSender, incrementStepMethod, decrementStepMethod };
};
