import { useLoaderData } from "react-router-dom";

import type { IGetPointsResponse } from "@shared/api";
import { Typography } from "@shared/ui";

import { EditProfileForm } from "../_components/EditProfileForm";

const ProfilePage = () => {
  const loaderData: IGetPointsResponse = useLoaderData();

  return (
    <div className='container space-y-6'>
      <div className='md:mt-16 max-md:mt-5 space-y-6'>
        <Typography variant='title_h2' tag='h1' className='text-left'>
          Профиль
        </Typography>
      </div>
      <EditProfileForm points={loaderData.points} />
    </div>
  );
};

export default ProfilePage;
