import { Suspense, lazy } from "react";
import type { RouteObject } from "react-router-dom";

import { getPoints } from "@shared/api";
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
  loader: async () => {
    const res = await getPoints({});
    return res;
  },
  HydrateFallback: () => <Spinner />,
  errorElement: <div className=''>Error</div>
});
