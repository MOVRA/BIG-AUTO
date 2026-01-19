import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

export default function AuthLayout() {
  return (
    <div className="flex">
      <Toaster />
      <Outlet />
      <div className="w-full">
        <img src="/empty-bg.svg" className="h-full w-full object-cover fixed" />
      </div>
    </div>
  );
}
