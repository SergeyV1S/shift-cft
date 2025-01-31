import { Suspense, lazy } from "react";
import type { RouteObject } from "react-router-dom";

import { PATHS } from "@shared/constants";
import { Spinner } from "@shared/ui";

const ProfileScreen = lazy(() => import("./Profile"));

export const createProfileScreenRoute = (): RouteObject => ({
  path: PATHS.PROFILE,
  element: (
    <Suspense fallback={<Spinner />}>
      <ProfileScreen />
    </Suspense>
  ),
  errorElement: <div className=''>Error</div>
});
