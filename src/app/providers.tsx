import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { IsMobileProvider } from "@shared/context";
import { Toaster } from "@shared/ui";

import { routes } from "./router";
import { store } from "./store";

export const Providers = () => (
  <IsMobileProvider>
    <Provider store={store}>
      <RouterProvider router={routes} />
      <Toaster />
    </Provider>
  </IsMobileProvider>
);
