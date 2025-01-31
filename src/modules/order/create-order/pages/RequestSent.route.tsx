import { Suspense, lazy } from "react";
import type { RouteObject } from "react-router-dom";

import { PATHS } from "@shared/constants";
import { Spinner } from "@shared/ui";

const RequestSentScreen = lazy(() => import("./RequestSent"));

export const createRequestSentScreenRoute = (): RouteObject => ({
  path: PATHS.REQUESTED_SENT,
  element: (
    <Suspense fallback={<Spinner />}>
      <RequestSentScreen />
    </Suspense>
  ),
  errorElement: <div className=''>Error</div>
});
