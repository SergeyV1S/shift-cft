import { getCostCalculationState } from "@modules/cost-calculation/store";
import type { IOption } from "@modules/cost-calculation/type";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@app/store/hooks";

import { PATHS } from "@shared/constants";

import type {
  TAddressFormSchema,
  TDeliveryPaymentFormSchema,
  TReceiverSenderFormSchemas
} from "../lib";
import {
  decrementStep,
  getCreateOrderState,
  postCreateOrderAction,
  setCurrentStep,
  setOrderField
} from "../store";
import { ESteps } from "../store/type";

export const useCreateOrder = () => {
  const dispatch = useAppDispatch();
  const { selectedReceiverPoint, selectedSenderPoint } = useAppSelector(getCostCalculationState);
  const { currentStep, createOrder } = useAppSelector(getCreateOrderState);
  const navigate = useNavigate();

  const setStep = (step: ESteps) => {
    dispatch(setCurrentStep(step));
  };

  const decrementStepMethod = () => dispatch(decrementStep(currentStep));

  const selectDeliveryMethod = (option: IOption) => {
    dispatch(setOrderField({ field: "option", value: option }));
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

  const createOrderRequest = async () => {
    dispatch(
      postCreateOrderAction({
        option: createOrder.option!,
        payer: createOrder.payer!,
        receiver: createOrder.receiver!,
        receiverAddress: createOrder.receiverAddress!,
        sender: createOrder.sender!,
        senderAddress: createOrder.senderAddress!,
        senderPoint: selectedSenderPoint!,
        receiverPoint: selectedReceiverPoint!
      })
    ).then(() => {
      navigate(PATHS.REQUESTED_SENT);
    });
  };

  return {
    createOrderRequest,
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
