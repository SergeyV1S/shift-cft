import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { AuthLayout } from "@modules/auth";
import { RootLayout } from "@modules/cost-calculation/RootLayout";

import { PATHS } from "@shared/constants";
import { Spinner } from "@shared/ui";

import { ProtectedRoute } from "./ProtectedRoute";

const CostCalculationPage = lazy(() => import("@modules/cost-calculation/pages/CostCalculation"));
const SignInScreen = lazy(() => import("@modules/auth/signIn"));
const ProfileScreen = lazy(() => import("@modules/user/pages/Profile"));
const CreateOrderScreen = lazy(() => import("@modules/order/create-order/pages/CreateOrder"));
const RequestSentScreen = lazy(() => import("@modules/order/create-order/pages/RequestSent"));
const OrderHistoryScreen = lazy(() => import("@modules/order/pages/OrderHistory"));
const OrderDetailsScreen = lazy(() => import("@modules/order/pages/OrderDetails"));

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
          },
          {
            path: PATHS.CREATE_ORDER,
            element: (
              <Suspense fallback={<Spinner />}>
                <CreateOrderScreen />
              </Suspense>
            )
          },
          {
            path: PATHS.REQUESTED_SENT,
            element: (
              <Suspense fallback={<Spinner />}>
                <RequestSentScreen />
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
          },
          {
            path: PATHS.ORDER_HISTORY,
            element: (
              <Suspense fallback={<Spinner />}>
                <OrderHistoryScreen />
              </Suspense>
            )
          },
          {
            path: `${PATHS.ORDER_HISTORY}/:order_id`,
            element: (
              <Suspense fallback={<Spinner />}>
                <OrderDetailsScreen />
              </Suspense>
            )
          }
        ]
      }
    ]
  }
]);
