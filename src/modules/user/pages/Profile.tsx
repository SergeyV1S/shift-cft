import { Typography } from "@shared/ui";

import { EditProfileForm } from "../_components/EditProfileForm";

const ProfilePage = () => (
  <div className='container space-y-6'>
    <div className='mt-16 space-y-6'>
      <Typography variant='title_h2' tag='h1' className='text-left'>
        Профиль
      </Typography>
    </div>
    <EditProfileForm />
  </div>
);

export default ProfilePage;
