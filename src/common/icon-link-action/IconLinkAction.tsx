import { Link } from "react-router";
import type { IconLinkActionProps } from "./icon-link-action-type";

export default function IconLinkAction({ to, src, className }: IconLinkActionProps) {
  return (
    <Link to={to}>
      <img className={className} src={src} />
    </Link>
  );
}
