import { Button } from "@chakra-ui/react";
import React from "react";

export default function ButtonItem({ children, variant, onClick, ...props }) {
  return (
    <Button variant={variant} {...props} onClick={onClick}>
      {children}
    </Button>
  );
}
