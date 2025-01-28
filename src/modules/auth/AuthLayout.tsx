import { Outlet } from "react-router-dom";

export const AuthLayout = () => (
  <main className='flex min-h-svh'>
    <Outlet />
  </main>
);
