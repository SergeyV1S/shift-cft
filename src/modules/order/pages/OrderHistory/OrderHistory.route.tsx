import { Suspense, lazy } from "react";
import type { RouteObject } from "react-router-dom";

import { PATHS } from "@shared/constants";
import { Spinner } from "@shared/ui";

const OrderHistoryScreen = lazy(() => import("./OrderHistory"));

export const createOrderHistoryScreenRoute = (): RouteObject => ({
  path: PATHS.ORDER_HISTORY,
  element: (
    <Suspense fallback={<Spinner />}>
      <OrderHistoryScreen />
    </Suspense>
  ),
  errorElement: <div className=''>Error</div>
});
