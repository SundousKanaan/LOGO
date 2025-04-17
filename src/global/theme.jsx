import { extendTheme } from "@chakra-ui/react";
import { BsDisplay } from "react-icons/bs";

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
    risingColor: "#42AA65",
    lightrRisingColor: "#EBFDEF",
    fallingColor: "#ff4a4a",
    lightFallingColor: "#FDE8E8",
  },
  layerStyles: {
    dashboardCardsLayaout: {
      width: "100%",
      height: "100%",
      padding: "20px 24px",
      background: "white",
      borderRadius: "24px",
    },
  },
});

export default theme;
