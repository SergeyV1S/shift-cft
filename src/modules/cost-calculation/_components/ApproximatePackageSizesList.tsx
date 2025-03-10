import { useAppSelector } from "@app/store/hooks";

import { usePackageSizeForm } from "../model";
import { costCalculationSliceSelectors } from "../store";

export const ApproximatePackageSizesList = () => {
  const { packagesTypes } = useAppSelector(costCalculationSliceSelectors.getCostCalculationState);

  const { setSelectedPackageSize } = usePackageSizeForm();

  return (
    <div className='space-y-2 max-h-[300px] overflow-y-scroll'>
      {packagesTypes.map((packageType) => (
        <button
          onClick={() => setSelectedPackageSize(packageType)}
          key={packageType.id}
          className='p-4 w-full bg-slate-50 flex items-center gap-4 rounded-lg hover:shadow-md hover:bg-blue-50 transition-all duration-300'
        >
          <img
            className='size-12'
            src={packagesImage[+packageType.id - 1]}
            alt={`${packageType.name} image`}
          />
          <div className='space-y-2'>
            <h3 className='text-xl font-semibold'>{packageType.name}</h3>
            <p className='text-xs'>{`${packageType.length}x${packageType.width}x${packageType.height} см`}</p>
          </div>
        </button>
      ))}
    </div>
  );
};

const packagesImage = [
  "/svg/envelope.svg",
  "/svg/boxS.svg",
  "/svg/boxM.svg",
  "/svg/boxXS.svg",
  "/svg/boxM.svg"
];
