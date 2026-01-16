import { NavLink } from "react-router";

interface AuthHelpInfoProps {
  href?: string;
  info?: string;
  actionLabel?: string;
}

export default function AuthHelpInfo({
  href,
  info,
  actionLabel,
}: AuthHelpInfoProps) {
  return (
    <p className="text-sm text-center text-[#9E9E9E]">
      {info}{" "}
      <NavLink to={href ?? "/"} className="text-black underline">
        {actionLabel}
      </NavLink>
    </p>
  );
}
