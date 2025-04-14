import routes from "../../data";
import { useLocation } from "react-router-dom";
import SearchBar from "../min-components/SearchBar/SearchBar";

import "./Header.css";

export default function Header() {
  const location = useLocation();
  let pageTitle = "";
  routes.filter((route) => {
    if (route.path === location.pathname) {
      pageTitle = route.label;
    }
  });

  return (
    <header className="headerContainer">
      <h2 className="pageTitle">{pageTitle}</h2>

      <span>
        <SearchBar />

        <section className="userBox">
          <div className="userImg">
            {/* !TODO: replace the img src */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ68xCJyjzwUC0J89fXPOkmIvW09vTZjHRkVg&s"
              alt=""
            />
          </div>
          <div className="userInfo">
            <h3>John Smith</h3>
            <p>Admin</p>
          </div>
        </section>
      </span>
    </header>
  );
}
