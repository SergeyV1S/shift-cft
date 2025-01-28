import { useAppSelector } from "@app/store/hooks";

import { getCostCalculationState } from "../store";

export const ApproximatePackageSizesList = () => {
  const { packagesTypes } = useAppSelector(getCostCalculationState);
  return (
    <div className='space-y-2 max-h-[300px] overflow-y-scroll'>
      {packagesTypes.map((packageType) => (
        <button
          key={packageType.id}
          className='p-4 w-full bg-slate-50 flex items-center gap-4 rounded-lg'
        >
          <img className='size-12' src='/img/QR_Code.png' alt={`${packageType.name} image`} />
          <div className='space-y-2'>
            <h3 className='text-xl font-semibold'>{packageType.name}</h3>
            <p className='text-xs'>{`${packageType.length}x${packageType.width}x${packageType.height} см`}</p>
          </div>
        </button>
      ))}
    </div>
  );
};
