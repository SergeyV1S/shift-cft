import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@app/store/hooks";

import { costCalculationSliceSelectors } from "@modules/cost-calculation";

import { PATHS } from "@shared/constants";
import { formatePhone } from "@shared/lib";
import type { IOption } from "@shared/types";

import type {
  TAddressFormSchema,
  TDeliveryPaymentFormSchema,
  TReceiverSenderFormSchemas
} from "../lib";
import {
  createOrderSliceActions,
  createOrderSliceSelectors,
  postCreateOrderAction
} from "../store";
import { ESteps } from "../store/type";

export const useCreateOrder = () => {
  const dispatch = useAppDispatch();
  const { selectedReceiverPoint, selectedSenderPoint } = useAppSelector(
    costCalculationSliceSelectors.getCostCalculationState
  );
  const { currentStep, createOrder } = useAppSelector(
    createOrderSliceSelectors.getCreateOrderState
  );
  const navigate = useNavigate();

  const setStep = (step: ESteps) => {
    dispatch(createOrderSliceActions.setCurrentStep(step));
  };

  const decrementStepMethod = () => dispatch(createOrderSliceActions.decrementStep(currentStep));

  const selectDeliveryMethod = (option: IOption) => {
    dispatch(createOrderSliceActions.setOrderField({ field: "option", value: option }));
    setStep(ESteps.RECEIVER);
  };

  const setReceiver = (data: TReceiverSenderFormSchemas) => {
    dispatch(
      createOrderSliceActions.setOrderField({
        field: "receiver",
        value: { ...data, phone: formatePhone(data.phone) }
      })
    );
    setStep(ESteps.SENDER);
  };

  const setSender = (data: TReceiverSenderFormSchemas) => {
    dispatch(
      createOrderSliceActions.setOrderField({
        field: "sender",
        value: { ...data, phone: formatePhone(data.phone) }
      })
    );
    setStep(ESteps.PICKUP_LOCATION);
  };

  const setReceiverAddress = (data: TAddressFormSchema) => {
    dispatch(createOrderSliceActions.setOrderField({ field: "receiverAddress", value: data }));
    setStep(ESteps.DELIVERY_LOCATION);
  };

  const setSenderAddress = (data: TAddressFormSchema) => {
    dispatch(createOrderSliceActions.setOrderField({ field: "senderAddress", value: data }));
    setStep(ESteps.PAYMENT);
  };

  const setPayer = ({ payer }: TDeliveryPaymentFormSchema) => {
    dispatch(createOrderSliceActions.setOrderField({ field: "payer", value: payer }));
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
