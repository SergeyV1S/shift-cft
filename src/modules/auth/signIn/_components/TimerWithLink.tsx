import { useEffect, useState } from "react";
import type { z } from "zod";

import { useAppSelector } from "@app/store/hooks";

import { getAuthState } from "@modules/auth";

import { Button } from "@shared/ui";
import { CardFooter } from "@shared/ui/card";

import type { signInPhoneSchema } from "../lib";

interface ITimerWithLink {
  sendCode: (values: z.infer<typeof signInPhoneSchema>) => Promise<void>;
}

export const TimerWithLink = ({ sendCode }: ITimerWithLink) => {
  const { phoneNumber, retryDelay } = useAppSelector(getAuthState);

  const [timeLeft, setTimeLeft] = useState(retryDelay! / 1000);
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsTimeUp(true);
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <CardFooter className='text-sm opacity-75 flex items-center justify-center max-md:text-center'>
      {isTimeUp ? (
        <Button
          onClick={() => {
            setTimeLeft(retryDelay! / 1000);
            sendCode({ phone: phoneNumber! });
          }}
          variant='link_secondary'
        >
          Отправить код повторно
        </Button>
      ) : (
        <span>
          Запросить код повторно можно через:{" "}
          {`${minutes.toString().padStart(2, "0")}:${Math.ceil(seconds).toString().padStart(2, "0")}`}
        </span>
      )}
    </CardFooter>
  );
};
