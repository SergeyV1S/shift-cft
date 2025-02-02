import type { AxiosResponse } from "axios";
import { useLoaderData } from "react-router-dom";

import type { IGetPointsResponse } from "@shared/api";
import { Typography } from "@shared/ui";

import { EditProfileForm } from "../_components/EditProfileForm";

const ProfilePage = () => {
  const loaderData: AxiosResponse<IGetPointsResponse, any> = useLoaderData();

  return (
    <div className='container space-y-6'>
      <div className='md:mt-16 max-md:mt-5 space-y-6'>
        <Typography variant='title_h2' tag='h1' className='text-left'>
          Профиль
        </Typography>
      </div>
      <EditProfileForm pointsDataResponse={loaderData.data} />
    </div>
  );
};

export default ProfilePage;
