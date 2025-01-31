import { Plane, Train } from "lucide-react";

import type { IOption } from "@shared/types";
import { Typography } from "@shared/ui";

import { useCreateOrder } from "../model/useCreateOrder";

interface IDeliveryVariantProps {
  option: IOption;
  index: number;
}

export const DeliveryVariant = ({ option, index }: IDeliveryVariantProps) => {
  const { selectDeliveryMethod } = useCreateOrder();

  return (
    <button
      onClick={() => selectDeliveryMethod(option)}
      className='rounded-3xl border border-slate-300 hover:shadow-lg hover:border-blue-300 hover:bg-blue-50'
    >
      <div className='flex gap-4 p-4'>
        <div className='relative rounded-full bg-slate-100 size-14'>
          {index === 0 ? (
            <Plane className='absolute size-7 stroke-slate-400 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
          ) : (
            <Train className='absolute size-7 stroke-slate-400 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
          )}
        </div>
        <div className='space-y-2 text-left'>
          <Typography variant='paragraph16_regular' tag='h2'>
            {option.name}
          </Typography>
          <Typography variant='title_h3' tag='h3' className='p-0'>
            {option.price} ₽
          </Typography>
          <Typography variant='paragraph16_regular' className='pt-4'>
            {option.days} рабочий день
          </Typography>
        </div>
      </div>
    </button>
  );
};
