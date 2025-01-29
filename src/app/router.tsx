import { AuthLayout } from "@modules/auth";
import { RootLayout } from "@modules/cost-calculation/RootLayout";
import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { PATHS } from "@shared/constants";
import { Spinner } from "@shared/ui/spinner";

import { ProtectedRoute } from "./ProtectedRoute";

const CostCalculationPage = lazy(() => import("@modules/cost-calculation"));
const SignInScreen = lazy(() => import("@modules/auth/signIn/"));
const ProfileScreen = lazy(() => import("@modules/user/profile"));

export const routes = createBrowserRouter([
  {
    element: <ProtectedRoute onlyUnAuth />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: PATHS.SIGNIN,
            element: (
              <Suspense fallback={<Spinner />}>
                <SignInScreen />
              </Suspense>
            )
          }
        ]
      }
    ]
  },
  {
    element: <ProtectedRoute forAll />,
    children: [
      {
        element: <RootLayout />,
        children: [
          {
            path: "/",
            element: (
              <Suspense fallback={<Spinner />}>
                <CostCalculationPage />
              </Suspense>
            )
          }
        ]
      }
    ]
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <RootLayout />,
        children: [
          {
            path: PATHS.PROFILE,
            element: (
              <Suspense fallback={<Spinner />}>
                <ProfileScreen />
              </Suspense>
            )
          }
        ]
      }
    ]
  }
]);
