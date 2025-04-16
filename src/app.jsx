import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import routes from "./global/routes";
import { Box } from "@chakra-ui/react";

export default function App() {
  const location = useLocation().pathname;
  return (
    <Box
      display="grid"
      gridTemplateColumns="220px 1fr"
      gridTemplateRows="91px minmax(calc(100vh - 115px), 1fr)"
      gridTemplateAreas={`
            "navbar header"
            "navbar page"
          `}
      gap="24px"
      fontFamily="body"
      fontWeight="400"
      bg="lightGray"
    >
      <Box gridArea="navbar" bg="white">
        <Navbar />
      </Box>
      <Box gridArea="header" paddingRight="24px">
        <Header />
      </Box>
      <Box gridArea="page" paddingRight="24px">
        <Routes>
          {routes.map((route, i) => (
            <Route
              key={i}
              index={location === "/"}
              path={route.path}
              element={route.Element}
            />
          ))}
        </Routes>
      </Box>
    </Box>
  );
}
