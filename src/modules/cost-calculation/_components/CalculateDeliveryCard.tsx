import { useAppSelector } from "@app/store/hooks";

import { Spinner, Typography } from "@shared/ui";
import { Card, CardContent, CardHeader } from "@shared/ui/card";

import { getCostCalculationState } from "../store";
import { CalculateDeliveryForm } from "./CalculateDeliveryForm";

export const CalculateDeliveryCard = () => {
  const { isLoading, error } = useAppSelector(getCostCalculationState);

  return (
    <Card className='w-[500px] px-16 space-y-6 py-10 min-h-[490px] relative'>
      <CardHeader>
        <Typography variant='title_h2' tag='h2'>
          Рассчитать доставку
        </Typography>
      </CardHeader>
      <CardContent className='w-[356px] p-0'>
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <p className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'>{error}</p>
        ) : (
          <CalculateDeliveryForm />
        )}
      </CardContent>
    </Card>
  );
};
