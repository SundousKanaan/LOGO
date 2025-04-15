import routes from "../../routes.jsx";
import LinkButtom from "../min-components/LinkButtom/LinkButtom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbox">
          <h1 className="logo">LOGO</h1>
          <ul className="navLinksList">
            {routes.map((route, index) => (
              <li key={index}>
                {route.path === "/Notifications" && (
                  <span className="amont">3</span>
                )}
                <LinkButtom
                  path={route.path}
                  label={route.label}
                  icon={route.icon}
                />
              </li>
            ))}
          </ul>
        </div>
        <button className="logOut">
          <img src="./src/assets/icons/logout.svg" alt="log out icon" />
          log out
        </button>
      </nav>
    </>
  );
}
