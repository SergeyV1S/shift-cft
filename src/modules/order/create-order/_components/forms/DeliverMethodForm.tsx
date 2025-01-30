import { getDeliveryCost } from "@modules/cost-calculation/store";

import { useAppSelector } from "@app/store/hooks";

import { Progress, Typography } from "@shared/ui";

import { DeliveryVariant } from "../DeliveryVariant";

export const DeliverMethodForm = () => {
  const deliveryCost = useAppSelector(getDeliveryCost);

  return (
    <>
      <Typography tag='h2' variant='title_h2'>
        Способ отправки
      </Typography>
      <div className='space-y-2'>
        <Typography variant='paragraph12_regular'>Шаг 1 из 7</Typography>
        <Progress value={14} />
      </div>
      <div className='flex flex-col gap-6'>
        {deliveryCost.map((cost) => (
          <DeliveryVariant key={cost.id} option={cost} />
        ))}
      </div>
      <div className='relative rounded-2xl bg-gradient-to-r from-[#1975FF] to-[#92BEFF]'>
        <div className='space-y-1 p-4 text-white'>
          <Typography variant='title_h2' tag='h2'>
            1+1=3
          </Typography>
          <Typography variant='paragraph_Smedium' tag='p'>
            3-я доставка в подарок!
          </Typography>
        </div>
        <img className='absolute right-3 bottom-0' src='/img/Gift1.png' alt='gift image' />
        <img className='absolute right-0 top-0' src='/img/Gift2.png' alt='gift image' />
      </div>
    </>
  );
};
