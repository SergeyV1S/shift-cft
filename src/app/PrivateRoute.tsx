import { Navigate, Outlet, useLocation } from "react-router-dom";

import { ACCESS_TOKEN, PATHS } from "@shared/constants";

export const PrivateRoute = () => {
  const location = useLocation();

  const accessToken = localStorage.getItem(ACCESS_TOKEN);

  if (!accessToken) return <Navigate to={PATHS.SIGNIN} state={{ from: location }} replace />;
  return <Outlet />;
};
