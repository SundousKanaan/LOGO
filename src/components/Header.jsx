import routes from "../global/routes";
import { useLocation } from "react-router-dom";
import SearchBar from "../min-components/SearchBar";
import { Box, Image, Text } from "@chakra-ui/react";
import HeadingItem from "../min-components/HeadingItem";

export default function Header() {
  const location = useLocation();
  let pageTitle = "";
  routes.filter((route) => {
    if (route.path === location.pathname) {
      pageTitle = route.label;
    }
  });

  return (
    <Box
      as="header"
      height="100%"
      alignSelf="end"
      display="flex"
      alignItems="end"
      justifyContent="space-between"
    >
      <HeadingItem fontSize="32px">{pageTitle}</HeadingItem>

      <Box width="fit-contant" padding="0" margin="0" display="flex" gap="10px">
        <SearchBar />

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="8px"
        >
          {/* !TODO: replace the img src */}
          <Image
            borderRadius="full"
            boxSize="40px"
            objectFit="cover"
            src="/src/assets/user.jpg"
            alt="user photo"
          />

          <Box
            width="153px"
            display="flex"
            flexDirection="column"
            justifyItems="center"
            alignItems="start"
          >
            <HeadingItem fontSize="18px" lineHeight="24px" fontWeight="500">
              John Smith
            </HeadingItem>
            <Text
              fontSize="14px"
              fontWeight="400"
              opacity="0.5"
              color="secondaryColor"
            >
              Admin
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
