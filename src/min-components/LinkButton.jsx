import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function LinkButton({ path, children, ...props }) {
  return (
    <ChakraLink
      as={RouterLink}
      to={path}
      {...props}
      width="100%"
      height="100%"
      _hover={{
        textDecoration: "none",
      }}
      _focusVisible={{
        boxShadow: "inset 0 0 0 2px",
        boxShadowColor: "themeColor",
        outline: "none",
      }}
    >
      {children}
    </ChakraLink>
  );
}
