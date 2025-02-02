import { Calculator, Clock, User } from "lucide-react";
import { NavLink } from "react-router-dom";

import { PATHS } from "@shared/constants";
import { useIsMobile } from "@shared/context";
import { cn } from "@shared/lib";

import { typographyVariants } from "..";
import { DesktopHeader } from "./Desktop";

export const RootNavigation = () => {
  const isMobile = useIsMobile();

  if (!isMobile) return <DesktopHeader />;
  else
    return (
      <nav className='border-t border-t-slate-200 bg-white rounded-t-xl py-3 z-50 fixed bottom-0 right-0 left-0'>
        <div className='grid grid-cols-3 items-center'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              cn(typographyVariants({ variant: "tabbar" }), isActive && "text-blue-800")
            }
          >
            <Calculator className='size-4 md:size-6 flex-shrink-0' />
            <span>Расчёт</span>
          </NavLink>
          <NavLink
            to={PATHS.PROFILE}
            className={({ isActive }) =>
              cn(typographyVariants({ variant: "tabbar" }), isActive && "text-blue-800")
            }
          >
            <User className='size-4 md:size-6 flex-shrink-0' />
            <span>Профиль</span>
          </NavLink>
          <NavLink
            to={PATHS.ORDER_HISTORY}
            className={({ isActive }) =>
              cn(typographyVariants({ variant: "tabbar" }), isActive && "text-blue-800")
            }
          >
            <Clock className='size-4 md:size-6 flex-shrink-0' />
            <span>История</span>
          </NavLink>
        </div>
      </nav>
    );
};
