import { Button, Typography } from "@shared/ui";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@shared/ui/dialog";

import { useCancelOrderModal } from "../model";

export const CancelOrderModal = () => {
  const { closeModal, isCancelOrderModal, cancelOrder } = useCancelOrderModal();

  return (
    <Dialog open={isCancelOrderModal} onOpenChange={closeModal}>
      <DialogTrigger asChild>
        <Button variant='contained_primary' size='xl' className='w-1/2'>
          Отменить заказ
        </Button>
      </DialogTrigger>
      <DialogContent aria-describedby={undefined}>
        <DialogTitle />
        <div className='py-16 px-20 space-y-10'>
          <div className='space-y-7 flex items-center justify-center flex-col'>
            <img className='size-14' src='/svg/question.svg' alt='question img' />
            <Typography tag='h3' variant='title_h3'>
              Отменить заказ?
            </Typography>
          </div>
          <div className='space-y-4 flex flex-col'>
            <Button variant='outline_secondary' size='xl' onClick={closeModal}>
              Отменить
            </Button>
            <Button variant='contained_primary' size='xl' onClick={cancelOrder}>
              Отменить заказ
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
