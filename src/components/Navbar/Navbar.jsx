import LinkButtom from "../min-components/LinkButtom/LinkButtom";
import routes from "../../data";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navblock">
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
                  hash={route.label}
                />
              </li>
            ))}

            {/* <li>
              <LinkButtom
                path="/Notifications"
                label="Notifications"
                icon="notification"
              />
            </li> */}
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
