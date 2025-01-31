import { ExitIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@app/store/hooks";

import { removeUserFormState } from "@modules/user";

import { cn } from "@shared/lib";
import { Button, buttonVariants, typographyVariants } from "@shared/ui";

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
    <Button
      onClick={logoutHandler}
      className={cn(
        buttonVariants({ variant: "link_secondary" }),
        typographyVariants({ variant: "paragraph16_medium" }),
        "flex items-center gap-1"
      )}
      variant='link_secondary'
    >
      <ExitIcon className='size-5' />
      <span>Выйти</span>
    </Button>
  );
};
