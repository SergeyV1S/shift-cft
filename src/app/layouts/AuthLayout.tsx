import { Outlet } from "react-router-dom";

export const AuthLayout = () => (
  <main className='flex min-h-svh px-5'>
    <Outlet />
  </main>
);
