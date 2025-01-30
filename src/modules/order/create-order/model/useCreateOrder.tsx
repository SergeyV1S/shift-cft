import type { IOption } from "@modules/cost-calculation/type";

import { useAppDispatch, useAppSelector } from "@app/store/hooks";

import type { TReceiverSenderFormSchemas } from "../lib";
import { decrementStep, getCreateOrderState, setCurrentStep, setOrderField } from "../store";

export const useCreateOrder = () => {
  const dispatch = useAppDispatch();
  const { currentStep } = useAppSelector(getCreateOrderState);

  const decrementStepMethod = () => dispatch(decrementStep(currentStep));

  const selectDeliveryMethod = (option: IOption) => {
    dispatch(setOrderField({ field: "selectedOption", value: option }));
    dispatch(setCurrentStep("Получатель"));
  };

  const setReceiver = (data: TReceiverSenderFormSchemas) => {
    dispatch(setOrderField({ field: "receiver", value: data }));
    dispatch(setCurrentStep("Отправитель"));
  };

  const setSender = (data: TReceiverSenderFormSchemas) => {
    dispatch(setOrderField({ field: "sender", value: data }));
    dispatch(setCurrentStep("Откуда забрать"));
  };

  const setReceiverAddress = (data: any) => {
    dispatch(setOrderField({ field: "receiverAddress", value: data }));
    dispatch(setCurrentStep("Куда доставить"));
  };

  const setSenderAddress = (data: any) => {
    dispatch(setOrderField({ field: "senderAddress", value: data }));
    dispatch(setCurrentStep("Оплата доставки"));
  };

  // const setPayer = (data: any) => {
  //   dispatch(setCurrentStep("Проверка данных заказа"));
  //   dispatch(setOrderField({ field: "sender", value: data }));
  // };

  return {
    selectDeliveryMethod,
    setReceiver,
    setSender,
    decrementStepMethod,
    setReceiverAddress,
    setSenderAddress
  };
};
