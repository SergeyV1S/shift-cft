import { useAppSelector } from "@app/store/hooks";

import { getCreateOrderState } from "../store";
import { DeliverMethodForm } from "./forms";

export const FormStepManager = () => {
  const { currentStep } = useAppSelector(getCreateOrderState);

  if (currentStep === 1) {
    return <DeliverMethodForm />;
  } else if (currentStep === 2) {
    return <div className=''>2</div>;
  } else if (currentStep === 3) {
    return <div className=''>3</div>;
  } else if (currentStep === 4) {
    return <div className=''>4</div>;
  } else if (currentStep === 5) {
    return <div className=''>5</div>;
  } else if (currentStep === 6) {
    return <div className=''>6</div>;
  }
};
