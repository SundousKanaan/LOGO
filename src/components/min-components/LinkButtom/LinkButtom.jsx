import { Link, useLocation } from "react-router-dom";
import "./LinkButtom.css";

export default function LinkButtom({ path, label, icon }) {
  const isActive = useLocation().pathname === path;
  const iconPath = `./src/assets/icons/${
    isActive ? `${icon}-active` : `${icon}`
  }.svg`;

  if (icon) {
    return (
      <Link className={`link ${isActive ? "activePath" : ""}`} to={path}>
        <img src={iconPath} alt={icon} />
        {label}
      </Link>
    );
  } else {
    return (
      <Link className="link" to={path}>
        {label}
      </Link>
    );
  }
}
