import { Suspense, lazy } from "react";
import type { RouteObject } from "react-router-dom";

import { PATHS } from "@shared/constants";
import { Spinner } from "@shared/ui";

const CreateOrderScreen = lazy(() => import("./CreateOrder"));

export const createCreateOrderScreenRoute = (): RouteObject => ({
  path: PATHS.CREATE_ORDER,
  element: (
    <Suspense fallback={<Spinner />}>
      <CreateOrderScreen />
    </Suspense>
  ),
  errorElement: <div className=''>Error</div>
});
