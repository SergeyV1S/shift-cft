import { Outlet, useLocation } from "react-router-dom";

import { useIsMobile } from "@shared/context";
import { cn } from "@shared/lib";
import { RootNavigation } from "@shared/ui";

export const RootLayout = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  const bgColor = location.pathname === "/" ? "bg-slate-100" : "bg-white";
  const minHeight = isMobile ? "min-h-screen" : "min-h-[calc(100vh-80px)]";

  return (
    <>
      <RootNavigation />
      <main className={cn("flex w-full px-10 max-md:pb-20", minHeight, bgColor)}>
        <Outlet />
      </main>
    </>
  );
};
