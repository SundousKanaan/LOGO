import { Input, Stack } from "@chakra-ui/react";

export default function InputVield({ type, placeholder, required, name }) {
  return (
    <Stack>
      <Input
        bg="white"
        _focusVisible={{ borderColor: "themeColor", borderWidth: "2px" }}
        _hover={{ borderColor: "themeColor", borderWidth: "2px" }}
        type={type}
        name={name}
        placeholder={placeholder}
        variant="subtle"
        required={required}
      />
    </Stack>
  );
}
