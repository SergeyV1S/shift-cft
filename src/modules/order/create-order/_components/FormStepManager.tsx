import { useAppSelector } from "@app/store/hooks";

import { Button, Progress, Typography } from "@shared/ui";

import { steps } from "../constants/steps";
import { useCreateOrder } from "../model/useCreateOrder";
import { getCreateOrderState } from "../store";
import type { TSteps } from "../store/type";
import { DeliverMethodForm, RecieverSenderForm } from "./forms";

export const FormStepManager = () => {
  const { currentStep } = useAppSelector(getCreateOrderState);
  const { setReceiver, setSender, incrementStepMethod, decrementStepMethod } = useCreateOrder();

  const stepComponents: Record<TSteps, React.JSX.Element> = {
    "Способ отправки": <DeliverMethodForm />,
    Отправитель: <RecieverSenderForm handleSubmit={setReceiver} />,
    Получатель: <RecieverSenderForm handleSubmit={setSender} />,
    "Откуда забрать": <div className=''>4</div>,
    "Куда доставить": <div className=''>5</div>,
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
      {currentStep !== "Способ отправки" && (
        <nav className='flex items-center gap-6'>
          <Button
            onClick={decrementStepMethod}
            variant='outline_secondary'
            size='lg'
            className='basis-1/2'
          >
            Назад
          </Button>
          <Button
            onClick={incrementStepMethod}
            variant='contained_primary'
            size='lg'
            className='basis-1/2'
          >
            Продолжить
          </Button>
        </nav>
      )}
    </>
  );
};
