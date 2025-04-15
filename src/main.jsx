import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import App from "./app";
import Login from "./pages/Login/Login";
import { Provider } from "./components/ui/provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          {/* Redirect to app.jsx with open Dashboard if no match */}
          <Route path="/*" element={<Navigate to="/" />} />{" "}
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
