import { LogoutButton } from "@modules/auth";

const ProfilePage = () => (
  <div className='flex min-h-svh'>
    <div className='m-auto'>
      <div className='flex gap-5'>
        <h1 className='text-2xl'>Привет</h1>
        <LogoutButton />
      </div>
    </div>
  </div>
);

export default ProfilePage;
