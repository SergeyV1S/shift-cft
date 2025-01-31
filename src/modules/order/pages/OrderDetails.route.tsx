import { Suspense, lazy } from "react";
import type { RouteObject } from "react-router-dom";

import { PATHS } from "@shared/constants";
import { Spinner } from "@shared/ui";

const OrderDetailsScreen = lazy(() => import("./OrderDetails"));

export const createOrderDetailsScreenRoute = (): RouteObject => ({
  path: `${PATHS.ORDER_HISTORY}/:order_id`,
  element: (
    <Suspense fallback={<Spinner />}>
      <OrderDetailsScreen />
    </Suspense>
  ),
  errorElement: <div className=''>Error</div>
});
