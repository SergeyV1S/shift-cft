import { createBrowserRouter } from "react-router-dom";

import { createSignInScreenRoute } from "@modules/auth/signIn/pages";
import { createCostCalculationScreenRoute } from "@modules/cost-calculation/pages";
import {
  createCreateOrderScreenRoute,
  createRequestSentScreenRoute
} from "@modules/order/create-order/pages";
import { createOrderDetailsScreenRoute, createOrderHistoryScreenRoute } from "@modules/order/pages";
import { createProfileScreenRoute } from "@modules/user/pages";

import { ProtectedRoute } from "./ProtectedRoute";
import { AuthLayout, RootLayout } from "./layouts";

export const routes = createBrowserRouter([
  {
    element: <ProtectedRoute onlyUnAuth />,
    children: [
      {
        element: <AuthLayout />,
        children: [createSignInScreenRoute()]
      }
    ]
  },
  {
    element: <ProtectedRoute forAll />,
    children: [
      {
        element: <RootLayout />,
        children: [
          createCostCalculationScreenRoute(),
          createCreateOrderScreenRoute(),
          createRequestSentScreenRoute()
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
          createProfileScreenRoute(),
          createOrderHistoryScreenRoute(),
          createOrderDetailsScreenRoute()
        ]
      }
    ]
  }
]);
