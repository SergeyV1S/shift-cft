import { getUserSessionAction, getUserState } from "@modules/user";
import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { PATHS } from "@shared/constants";

import { useAppDispatch, useAppSelector } from "./store/hooks";

export const ProtectedRoute = ({
  onlyUnAuth,
  forAll
}: {
  onlyUnAuth?: boolean;
  forAll?: boolean;
}) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { userSession } = useAppSelector(getUserState);

  useEffect(() => {
    dispatch(getUserSessionAction());
  }, []);

  if (forAll) return <Outlet />;

  if (!userSession && !onlyUnAuth) {
    return <Navigate to={PATHS.SIGNIN} state={{ from: location }} replace />;
  }

  if (onlyUnAuth && userSession) {
    const { from } = location.state ?? { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  return <Outlet />;
};
