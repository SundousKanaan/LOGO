import { Heading } from "@chakra-ui/react";

export default function HeadingItem({ children, ...props }) {
  return (
    <Heading
      fontFamily="body"
      margin="0"
      color="secondaryColor"
      textTransform="capitalize"
      {...props}
    >
      {children}
    </Heading>
  );
}
