import routes from "../global/routes";
import { useLocation } from "react-router-dom";
import SearchBar from "../min-components/SearchBar";
import { Flex, Image, Text, Spacer, HStack, VStack } from "@chakra-ui/react";
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
    <Flex
      as="header"
      height="100%"
      alignItems="end"
      justifyContent="space-between"
      gap="40px"
    >
      <HeadingItem fontSize="32px">{pageTitle}</HeadingItem>

      <Spacer />

      <SearchBar />

      <HStack>
        {/* !TODO: change to dynamic values: img.src & texts */}
        <Image
          borderRadius="full"
          boxSize="40px"
          objectFit="cover"
          src="/src/assets/user.jpg"
          alt="user photo"
        />

        <VStack width="153px" align="start" spacing="0">
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
        </VStack>
      </HStack>
    </Flex>
  );
}
