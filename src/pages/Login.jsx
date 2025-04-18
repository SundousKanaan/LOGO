import { Box, FormControl, Heading } from "@chakra-ui/react";
import InputVield from "../min-components/Input";
import { useNavigate } from "react-router-dom";
import ButtonItem from "../min-components/Button";

export default function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    // TODO: check if the user is authenticated

    navigate("/", { replace: true });
  };

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
        alignItems="center"
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
        <ButtonItem
          variant="solid"
          width="50%"
          gap="12px"
          bg="themeColor"
          color="white"
          transition="all .5s"
          _hover={{ width: "100%" }}
          // TODO: fix the disabled state
          // it should be disabled when the form is not valid
          disabled={false}
          onClick={handleLogin}
        >
          Login
        </ButtonItem>
      </FormControl>
    </Box>
  );
}
