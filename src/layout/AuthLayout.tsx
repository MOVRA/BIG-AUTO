import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="flex">
      <Outlet />
      <div className="w-full">
        <img src="/empty-bg.svg" className="h-full w-full object-cover fixed" />
      </div>
    </div>
  );
}
