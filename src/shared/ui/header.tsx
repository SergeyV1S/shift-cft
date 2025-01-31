import { Clock, PackageOpen, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import { useAppSelector } from "@app/store/hooks";

import { LogoutButton, getAuthState } from "@modules/auth";

import { PATHS } from "@shared/constants";
import { cn } from "@shared/lib";

import { buttonVariants } from "./button";
import { typographyVariants } from "./typography";

export const Header = () => {
  const { isAuth } = useAppSelector(getAuthState);

  return (
    <header className='border-b border-b-slate-100'>
      <div className='container grid grid-cols-[12%_1fr_10%] items-center py-5'>
        <Link to='/' className='flex items-center gap-2 text-center'>
          <PackageOpen className='size-[35px] text-blue-500' />
          <p className='text-blue-500 font-firaSans font-semibold text-lg leading-5 text-left'>
            ШИФТ <br /> Delivery
          </p>
        </Link>
        <nav className='flex items-center gap-8 pl-[10%]'>
          <NavLink
            to={PATHS.PROFILE}
            className={({ isActive }) =>
              cn(
                typographyVariants({ variant: "paragraph16_medium" }),
                buttonVariants({ variant: "link_secondary" }),
                "flex items-center gap-2 hover:text-blue-500 duration-200 p-0 hover:before:bg-blue-500",
                isActive && "!text-blue-800 before:!bg-blue-800 hover:before:!bg-blue-800"
              )
            }
          >
            <User />
            <span>Профиль</span>
          </NavLink>
          <NavLink
            to={PATHS.ORDER_HISTORY}
            className={({ isActive }) =>
              cn(
                typographyVariants({ variant: "paragraph16_medium" }),
                buttonVariants({ variant: "link_secondary" }),
                "flex items-center gap-2 hover:text-blue-500 duration-200 p-0 hover:before:bg-blue-500",
                isActive && "!text-blue-800 before:!bg-blue-800 hover:before:!bg-blue-800"
              )
            }
          >
            <Clock />
            <span>История</span>
          </NavLink>
        </nav>
        <nav className='text-center'>
          {isAuth ? (
            <LogoutButton />
          ) : (
            <Link
              to={PATHS.SIGNIN}
              className={cn(
                buttonVariants({ variant: "link_secondary" }),
                typographyVariants({ variant: "paragraph16_medium" }),
                "h-9 py-2 px-4"
              )}
            >
              Войти
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};
