import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function LinkButton({ path, children, ...props }) {
  // when the height is not defined in the parent component, set it to 100% automatically
  // this is to make sure that the link button takes the full height of the parent component
  if (!props.height) {
    props.height = "100%";
  }

  return (
    <ChakraLink
      as={RouterLink}
      to={path}
      {...props}
      borderRadius="10px"
      _hover={{
        boxShadow:
          "inset 0 0 0 2px var(--chakra-colors-themeColor), 0 5px 7px var(--chakra-colors-blackAlpha-600)",
      }}
      _focusVisible={{
        boxShadow:
          "inset 0 0 0 2px var(--chakra-colors-themeColor), 0 5px 7px var(--chakra-colors-blackAlpha-600)",

        outline: "none",
      }}
    >
      {children}
    </ChakraLink>
  );
}
