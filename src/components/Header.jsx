import routes from "../global/routes";
import { useLocation } from "react-router-dom";
import SearchBar from "../min-components/SearchBar";
import { Flex, Image, Text, Spacer, HStack, VStack } from "@chakra-ui/react";
import HeadingItem from "../min-components/HeadingItem";
import LinkButton from "../min-components/LinkButton";

export default function Header() {
  const userName = "John Smith"; // !TODO: change to dynamic value
  const imgSrc = "/src/assets/user.jpg"; // !TODO: change to dynamic value
  const role = "Admin"; // !TODO: change to dynamic value
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

      {/* !TODO: change to dynamic values: img.src & texts */}
      <HStack>
        <Image
          borderRadius="full"
          boxSize="40px"
          objectFit="cover"
          src={imgSrc}
          alt={`${userName} profile photo`}
        />

        <VStack width="153px" align="start" spacing="0">
          <LinkButton height="fit-content" variant="text" to={`/${userName}`}>
            <HeadingItem fontSize="18px" lineHeight="24px" fontWeight="500">
              {userName}
            </HeadingItem>
          </LinkButton>
          <Text
            fontSize="14px"
            fontWeight="400"
            opacity="0.5"
            color="secondaryColor"
          >
            {role}
          </Text>
        </VStack>
      </HStack>
    </Flex>
  );
}
