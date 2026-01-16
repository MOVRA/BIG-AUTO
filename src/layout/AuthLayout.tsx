import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="flex">
      <div className="w-full h-screen flex flex-col justify-between">
        <div className="py-9 pl-12">
          <img src="/big-auto-logo.svg" className="w-38 h-9" />
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="font-normal text-5xl">Welcome, User</h1>
              <p className="text-sm text-[#9E9E9E]">
                Platform cepat untuk beli dan sewa mobil tanpa ribet.
              </p>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
      <div className="w-full h-screen">
        <img src="/empty-bg.svg" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}
