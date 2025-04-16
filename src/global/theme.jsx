import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Urbanist, sans-serif",
    body: "Inter, sans-serif",
  },
  colors: {
    themeColor: "#6f6cf3",
    secondaryColor: "#161819",
    lightGray: "#f6f6f8",
    infoNotic: "#ff4a4a",
  },
});

export default theme;
