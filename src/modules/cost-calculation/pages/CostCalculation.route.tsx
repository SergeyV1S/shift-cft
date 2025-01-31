import { Suspense, lazy } from "react";
import type { RouteObject } from "react-router-dom";

import { Spinner } from "@shared/ui";

const CostCalculationScreen = lazy(() => import("./CostCalculation"));

export const createCostCalculationScreenRoute = (): RouteObject => ({
  path: "/",
  element: (
    <Suspense fallback={<Spinner />}>
      <CostCalculationScreen />
    </Suspense>
  ),
  errorElement: <div className=''>Error</div>
});
