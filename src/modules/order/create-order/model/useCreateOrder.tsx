import type { IOption } from "@modules/cost-calculation/type";

import { useAppDispatch } from "@app/store/hooks";

import { setCurrentStep, setOrderField } from "../store";

export const useCreateOrder = () => {
  const dispatch = useAppDispatch();

  const selectDeliveryMethod = (option: IOption) => {
    dispatch(setCurrentStep(2));
    dispatch(setOrderField({ field: "selectedOption", value: option }));
  };

  return { selectDeliveryMethod };
};
