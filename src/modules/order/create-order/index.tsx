import { FormStepManager } from "./_components/FormStepManager";

const CreateOrderPage = () => (
  <div className='container mt-12'>
    <div className='flex justify-start'>
      <div className='basis-1/2 space-y-6'>
        <FormStepManager />
      </div>
    </div>
  </div>
);

export default CreateOrderPage;
