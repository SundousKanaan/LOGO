import { Box, FormControl, Heading } from "@chakra-ui/react";
import InputVield from "../min-components/Input";

export default function Login() {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="40px"
      bg="lightGray"
    >
      <Heading>Login</Heading>
      <FormControl
        display="flex"
        flexDirection="column"
        gap="20px"
        maxWidth="400px"
      >
        <InputVield type="text" placeholder="Username" name="name" required />
        <InputVield
          type="password"
          placeholder="Password"
          name="password"
          required
        />

        {/* !TODO: change this button to component button */}
        <button type="submit">Login</button>
      </FormControl>
    </Box>
  );
}
