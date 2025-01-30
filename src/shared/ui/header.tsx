import { LogoutButton, getAuthState } from "@modules/auth";
import { Clock, PackageOpen, User } from "lucide-react";
import { Link } from "react-router-dom";

import { useAppSelector } from "@app/store/hooks";

import { PATHS } from "@shared/constants";
import { cn } from "@shared/lib/utils";

import { buttonVariants } from "./button";
import { typographyVariants } from "./typography";

export const Header = () => {
  const { isAuth } = useAppSelector(getAuthState);

  return (
    <header className='container grid grid-cols-[12%_1fr_10%] items-center py-5'>
      <Link to='/' className='flex items-center gap-2 text-center'>
        <PackageOpen className='size-[35px] text-blue-500' />
        <p className='text-blue-500 font-firaSans font-semibold text-lg leading-5 text-left'>
          ШИФТ <br /> Delivery
        </p>
      </Link>
      <nav className='flex items-center gap-8 pl-8'>
        <Link
          to={PATHS.PROFILE}
          className={cn(
            buttonVariants({ variant: "link_secondary" }),
            typographyVariants({ variant: "paragraph16_medium" }),
            "flex items-center gap-4"
          )}
        >
          <User />
          <span>Профиль</span>
        </Link>
        <Link
          to={PATHS.HISTORY}
          className={cn(
            buttonVariants({ variant: "link_secondary" }),
            typographyVariants({ variant: "paragraph16_medium" }),
            "flex items-center gap-4"
          )}
        >
          <Clock />
          <span>История</span>
        </Link>
      </nav>
      <nav className='text-center'>
        {isAuth ? (
          <LogoutButton />
        ) : (
          <Link
            to={PATHS.SIGNIN}
            className={cn(
              buttonVariants({ variant: "link_secondary" }),
              typographyVariants({ variant: "paragraph16_medium" })
            )}
          >
            Войти
          </Link>
        )}
      </nav>
    </header>
  );
};
