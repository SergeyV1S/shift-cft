import { removeUserFormState } from "@modules/user";
import { ExitIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@app/store/hooks";

import { Button } from "@shared/ui";

import { logout } from "../store";

export const LogoutButton = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(removeUserFormState());
    navigate("/");
  };

  return (
    <Button onClick={logoutHandler} className='flex items-center gap-2' variant='link'>
      <ExitIcon />
      <span>Выйти</span>
    </Button>
  );
};
