import { ExitIcon } from "@radix-ui/react-icons";
import { Clock, PackageOpen, User } from "lucide-react";
import { Link } from "react-router-dom";

import { ACCESS_TOKEN, PATHS } from "@shared/constants";

import { Button } from "./button";

export const Header = () => {
  const isAuth = localStorage.getItem(ACCESS_TOKEN);

  return (
    <header className='container grid grid-cols-[12%_1fr_10%] items-center py-5'>
      <Link to='/' className='flex items-center gap-2 text-center'>
        <PackageOpen className='size-[35px] text-blue-500' />
        <p className='text-blue-500 font-semibold text-lg leading-5 text-left'>
          ШИФТ <br /> Delivery
        </p>
      </Link>
      <nav className='flex items-center gap-8 pl-8'>
        <Link to={PATHS.PROFILE} className='flex items-center gap-4'>
          <User />
          <span>Профиль</span>
        </Link>
        <Link to={PATHS.HISTORY} className='flex items-center gap-4'>
          <Clock />
          <span>История</span>
        </Link>
      </nav>
      <nav className='text-center'>
        {isAuth ? (
          <Button className='flex items-center gap-4' variant='link'>
            <ExitIcon />
            <span>Выйти</span>
          </Button>
        ) : (
          <Link to={PATHS.SIGNIN}>Войти</Link>
        )}
      </nav>
    </header>
  );
};
