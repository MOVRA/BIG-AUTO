import { Link, NavLink } from "react-router";
import Search from "../common/search-bar/Search";
import IconLinkAction from "../common/icon-link-action/IconLinkAction";

export default function Navbar() {
  return (
    <div className="bg-white py-8 px-12 w-full h-26 drop-shadow-md flex items-center justify-center gap-8">
      <div className="flex items-center gap-6">
        <NavLink to="/">
          <img src="/big-auto-logo.svg" className="w-38 h-9" />
        </NavLink>
        <Search placeholder="Cari Area" className="w-46.25" />
        <Search placeholder="Cari di Big Auto" className="w-102.5" />
      </div>

      <div className="flex items-center gap-6 border-r border-[#EDEDED] pr-6">
        <IconLinkAction
          to="/"
          className="w-8 h-8"
          src="/notification-icon.svg"
        />
        <IconLinkAction to="/" src="/activity-icon.svg" className="w-6 h-6" />
        <IconLinkAction to="/" src="/message-icon.svg" className="w-8 h-8" />
      </div>

      <div className="flex">
        <Link to="/" className="flex items-center gap-4">
          <img className="w-8 h-8" src="/profile-icon.svg" />
          Nama Store
        </Link>
      </div>
      <div className="flex">
        <Link to="/" className="flex items-center gap-4">
          <img className="w-8 h-8" src="/profile-icon.svg" />
          Nama Akun
        </Link>
      </div>
    </div>
  );
}
