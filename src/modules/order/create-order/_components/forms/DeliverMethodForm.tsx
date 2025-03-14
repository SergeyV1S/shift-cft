import { Navigate } from "react-router-dom";

import { useAppSelector } from "@app/store/hooks";

import { costCalculationSliceSelectors } from "@modules/cost-calculation/store";

import { Typography } from "@shared/ui";

import { DeliveryVariant } from "../DeliveryVariant";

export const DeliverMethodForm = () => {
  const deliveryCost = useAppSelector(costCalculationSliceSelectors.getDeliveryCost);
  if (deliveryCost.length === 0) return <Navigate to='/' />;

  return (
    <div className='w-1/2 max-lg:w-full space-y-6'>
      <div className='flex flex-col gap-6'>
        {deliveryCost.map((cost, index) => (
          <DeliveryVariant key={cost.id} index={index} option={cost} />
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
    </div>
  );
};
