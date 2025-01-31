import { ArrowLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { NotFoundIcon } from "@shared/icons";

import { Button } from "./button";
import { Typography } from "./typography";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className='flex min-h-svh'>
      <div className='m-auto text-center space-y-10'>
        <NotFoundIcon />
        <div className='space-y-5'>
          <Typography variant='title_h1' tag='h1'>
            Упс...
          </Typography>
          <Typography variant='paragraph16_regular'>
            Такой страницы не существует на нашем сайте
          </Typography>
        </div>
        <nav aria-label='Навигация' className='flex items-center justify-center gap-20'>
          <Button
            role='link'
            variant='link_secondary'
            size='xs'
            className='flex items-center gap-2 pb-2'
            onClick={() => navigate(-1)}
          >
            <ArrowLeftIcon className='size-4' />
            <span>Назад</span>
          </Button>
          <Button
            role='link'
            onClick={() => navigate("/")}
            size='xs'
            variant='link_secondary'
            className='flex items-center gap-2 pb-2'
          >
            На главную
          </Button>
        </nav>
      </div>
    </div>
  );
};
