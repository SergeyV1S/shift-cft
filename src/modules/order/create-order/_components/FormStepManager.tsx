import { useAppSelector } from "@app/store/hooks";

import { Progress, Typography } from "@shared/ui";

import { steps } from "../constants/steps";
import { useCreateOrder } from "../model/useCreateOrder";
import { getCreateOrderState } from "../store";
import type { TSteps } from "../store/type";
import { AddressForm, DeliverMethodForm, RecieverSenderForm } from "./forms";

export const FormStepManager = () => {
  const { currentStep } = useAppSelector(getCreateOrderState);
  const { setReceiver, setSender, setReceiverAddress, setSenderAddress } = useCreateOrder();

  const stepComponents: Record<TSteps, React.JSX.Element> = {
    "Способ отправки": <DeliverMethodForm />,
    Получатель: <RecieverSenderForm handleSubmit={setReceiver} />,
    Отправитель: <RecieverSenderForm handleSubmit={setSender} />,
    "Откуда забрать": <AddressForm handleSubmit={setReceiverAddress} />,
    "Куда доставить": <AddressForm handleSubmit={setSenderAddress} />,
    "Оплата доставки": <div className=''>6</div>,
    "Проверка данных заказа": <div className=''>7</div>
  };

  return (
    <>
      <Typography tag='h2' variant='title_h2'>
        {currentStep}
      </Typography>
      <div className='space-y-2'>
        <Typography variant='paragraph12_regular'>{`Шаг ${steps.indexOf(currentStep) + 1} из 7`}</Typography>
        <Progress value={Math.ceil(((steps.indexOf(currentStep) + 1) / 7) * 100)} />
      </div>
      {stepComponents[currentStep]}
    </>
  );
};
