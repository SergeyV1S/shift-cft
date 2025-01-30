import type { IOption } from "@modules/cost-calculation/type";

import { useAppDispatch, useAppSelector } from "@app/store/hooks";

import type {
  TAddressFormSchema,
  TDeliveryPaymentFormSchema,
  TReceiverSenderFormSchemas
} from "../lib";
import { decrementStep, getCreateOrderState, setCurrentStep, setOrderField } from "../store";
import { ESteps } from "../store/type";

export const useCreateOrder = () => {
  const dispatch = useAppDispatch();
  const { currentStep } = useAppSelector(getCreateOrderState);

  const setStep = (step: ESteps) => {
    dispatch(setCurrentStep(step));
  };

  const decrementStepMethod = () => dispatch(decrementStep(currentStep));

  const selectDeliveryMethod = (option: IOption) => {
    dispatch(setOrderField({ field: "selectedOption", value: option }));
    setStep(ESteps.RECEIVER);
  };

  const setReceiver = (data: TReceiverSenderFormSchemas) => {
    dispatch(setOrderField({ field: "receiver", value: data }));
    setStep(ESteps.SENDER);
  };

  const setSender = (data: TReceiverSenderFormSchemas) => {
    dispatch(setOrderField({ field: "sender", value: data }));
    setStep(ESteps.PICKUP_LOCATION);
  };

  const setReceiverAddress = (data: TAddressFormSchema) => {
    dispatch(setOrderField({ field: "receiverAddress", value: data }));
    setStep(ESteps.DELIVERY_LOCATION);
  };

  const setSenderAddress = (data: TAddressFormSchema) => {
    dispatch(setOrderField({ field: "senderAddress", value: data }));
    setStep(ESteps.PAYMENT);
  };

  const setPayer = ({ payer }: TDeliveryPaymentFormSchema) => {
    dispatch(setOrderField({ field: "payer", value: payer }));
    setStep(ESteps.ORDER_REVIEW);
  };

  return {
    setStep,
    selectDeliveryMethod,
    setReceiver,
    setSender,
    decrementStepMethod,
    setReceiverAddress,
    setSenderAddress,
    setPayer
  };
};
