import type { AxiosResponse } from "axios";
import { useLoaderData } from "react-router-dom";

import { LogoutButton } from "@modules/auth";

import type { IGetPointsResponse } from "@shared/api";
import { useIsMobile } from "@shared/context";
import { Typography } from "@shared/ui";

import { EditProfileForm } from "../_components/EditProfileForm";

const ProfilePage = () => {
  const loaderData: AxiosResponse<IGetPointsResponse, any> = useLoaderData();
  const IsMobile = useIsMobile();

  return (
    <div className='container space-y-6'>
      <div className='flex items-center justify-between md:mt-16 max-md:mt-5'>
        <Typography variant='title_h2' tag='h1' className='text-left'>
          Профиль
        </Typography>
        {IsMobile && <LogoutButton />}
      </div>
      <EditProfileForm pointsDataResponse={loaderData.data} />
    </div>
  );
};

export default ProfilePage;
