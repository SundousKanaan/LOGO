import { Heading } from "@chakra-ui/react";

export default function HeadingItem({ children, ...props }) {
  return (
    <Heading
      style={{
        fontFamily: "fonts.heading",
        fontWeight: "600",
        margin: "0",
        color: "secondaryColor",
        textTransform: "capitalize",
      }}
      {...props}
    >
      {children}
    </Heading>
  );
}
