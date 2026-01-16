import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="flex py-9 px-12">
      <div className="w-full flex flex-col justify-between">
        <img src="/big-auto-logo.svg" className="w-38 h-9 mb-24" />
        <div className="flex items-center justify-center w-full h-full">
          <Outlet />
        </div>
      </div>
      <div className="w-full">
        <img src="/empty-bg.svg" className="h-full w-full object-cover fixed" />
      </div>
    </div>
  );
}
