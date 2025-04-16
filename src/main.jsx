// main.jsx
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./app";
import Login from "./pages/Login";
import { Provider } from "@chakra-ui/react/provider";
import theme from "./global/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App />} />
          <Route path="/login" element={<Login />} />
          {/* Redirect to app.jsx with open Dashboard if no match */}
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
