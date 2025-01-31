import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { getAuthState } from "@modules/auth";
import { getUserSessionAction } from "@modules/user";

import { PATHS } from "@shared/constants";
import { Spinner } from "@shared/ui";

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
  const { isAuth, isLoading } = useAppSelector(getAuthState);

  useEffect(() => {
    dispatch(getUserSessionAction());
  }, []);

  if (forAll) return <Outlet />;

  if (isLoading) return <Spinner />;

  if (onlyUnAuth && isAuth) {
    const { from } = location.state ?? { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!isAuth && !onlyUnAuth) {
    return <Navigate to={PATHS.SIGNIN} state={{ from: location }} replace />;
  }

  return <Outlet />;
};
