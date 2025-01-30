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

  const decrementStepMethod = () => dispatch(decrementStep(currentStep));

  const selectDeliveryMethod = (option: IOption) => {
    dispatch(setOrderField({ field: "selectedOption", value: option }));
    dispatch(setCurrentStep(ESteps.RECEIVER));
  };

  const setReceiver = (data: TReceiverSenderFormSchemas) => {
    dispatch(setOrderField({ field: "receiver", value: data }));
    dispatch(setCurrentStep(ESteps.SENDER));
  };

  const setSender = (data: TReceiverSenderFormSchemas) => {
    dispatch(setOrderField({ field: "sender", value: data }));
    dispatch(setCurrentStep(ESteps.PICKUP_LOCATION));
  };

  const setReceiverAddress = (data: TAddressFormSchema) => {
    dispatch(setOrderField({ field: "receiverAddress", value: data }));
    dispatch(setCurrentStep(ESteps.DELIVERY_LOCATION));
  };

  const setSenderAddress = (data: TAddressFormSchema) => {
    dispatch(setOrderField({ field: "senderAddress", value: data }));
    dispatch(setCurrentStep(ESteps.PAYMENT));
  };

  const setPayer = ({ payer }: TDeliveryPaymentFormSchema) => {
    dispatch(setCurrentStep(ESteps.ORDER_REVIEW));
    dispatch(setOrderField({ field: "payer", value: payer }));
  };

  return {
    selectDeliveryMethod,
    setReceiver,
    setSender,
    decrementStepMethod,
    setReceiverAddress,
    setSenderAddress,
    setPayer
  };
};
