import { Outlet, useLocation } from "react-router-dom";

import { cn } from "@shared/lib";
import { Header } from "@shared/ui";

export const RootLayout = () => {
  const location = useLocation();

  const bgColor = location.pathname === "/" ? "bg-slate-100" : "bg-white";

  return (
    <>
      <Header />
      <main className={cn("flex min-h-[calc(100vh-80px)] w-full", bgColor)}>
        <Outlet />
      </main>
    </>
  );
};
