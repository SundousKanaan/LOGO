import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="navbarContainer">
        <Navbar />
      </div>
      <div className="headerContainer">
        <Header />
      </div>
      <section className="pageContainer">
        <Routes>
          {/* <Route index element={} /> */}
          {/* <Route path="/Reviews" element={<Reviews />} /> */}
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.Element} />
          ))}
        </Routes>
      </section>
    </BrowserRouter>
  </React.StrictMode>
);
