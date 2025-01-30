import { Outlet } from "react-router-dom";

import { Header } from "@shared/ui";

export const RootLayout = () => (
  <>
    <Header />
    <main className='flex min-h-[calc(100vh-80px)] w-full bg-slate-100'>
      <Outlet />
    </main>
  </>
);
