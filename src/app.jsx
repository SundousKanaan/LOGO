import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import routes from "./global/routes";
import { Grid, GridItem } from "@chakra-ui/react";

export default function App() {
  const location = useLocation().pathname;
  return (
    <Grid
      gridTemplateColumns="220px 1fr"
      gridTemplateRows="91px minmax(calc(100vh - 115px), 1fr)"
      gridTemplateAreas={`
            "navbar header"
            "navbar page"
          `}
      gap="24px"
      bg="lightGray"
    >
      <GridItem gridArea="navbar" bg="white">
        <Navbar />
      </GridItem>
      <GridItem gridArea="header" paddingRight="24px">
        <Header />
      </GridItem>
      <GridItem gridArea="page">
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
      </GridItem>
    </Grid>
  );
}
