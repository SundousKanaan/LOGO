import { ListItem, List, Text, Image, Flex, Spacer } from "@chakra-ui/react";
import routes from "../global/routes.jsx";
import LinkButton from "../min-components/LinkButton.jsx";
import { useLocation } from "react-router-dom";
import ButtonItem from "../min-components/Button";
import { useNavigate } from "react-router-dom";
import HeadingItem from "../min-components/HeadingItem";

export default function Navbar() {
  const location = useLocation().pathname;

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login", { replace: true });
  };

  return (
    <>
      <Flex
        as="nav"
        height="100%"
        padding="40px 20px"
        flexDirection="column"
        justify="start"
        align="start"
        gap="34px"
        bg="white"
      >
        <HeadingItem
          as="h1"
          fontFamily="fonts.heading"
          fontWeight="900"
          fontSize="32px"
        >
          LOGO
        </HeadingItem>
        <List
          padding="0"
          margin="0"
          display="flex "
          flexDirection="column"
          gap="16px"
        >
          {routes.map((route, index) => (
            <ListItem
              key={index}
              width="180px"
              height="50px"
              borderRadius="12px"
              bgColor={location === route.path && "themeColor"}
              fontFamily="body"
              position="relative"
              _hover={{
                boxShadow: "0 0 0 2px var(--chakra-colors-themeColor)",
              }}
            >
              <LinkButton
                path={route.path}
                display="flex"
                alignItems="center"
                justifyContent="start"
                gap="12px"
                fontWeight={location === route.path ? "600" : "400"}
                paddingLeft="16px"
                color={location === route.path ? "white" : "secondaryColor"}
              >
                {route.path === "/Notifications" && (
                  <Text
                    width="17px"
                    height="17px"
                    borderRadius="full"
                    color="white"
                    fontSize="12px"
                    fontWeight="600"
                    display="grid"
                    placeItems="center"
                    position="absolute"
                    right="5px"
                    top="calc(50% - 17px / 2)"
                    bg="infoNotic"
                  >
                    {/* TODO: make the amunt dynamic */}3
                  </Text>
                )}
                {location === route.path ? (
                  <Image
                    borderRadius="full"
                    boxSize="24px"
                    src={`/src/assets/icons/${route.icon}-active.svg`}
                    alt={`${route.icon} icon`}
                  />
                ) : (
                  <Image
                    borderRadius="full"
                    boxSize="24px"
                    src={`/src/assets/icons/${route.icon}.svg`}
                    alt={`${route.icon} icon`}
                  />
                )}

                {route.label}
              </LinkButton>
            </ListItem>
          ))}
        </List>
        <Spacer />
        <ButtonItem
          variant="ghost"
          width="100%"
          gap="12px"
          onClick={handleLogout}
          _hover={{ bg: "lightGray" }}
        >
          <Image
            borderRadius="full"
            boxSize="24px"
            src="/src/assets/icons/logout.svg"
            alt="log out icon"
          />
          Log out
        </ButtonItem>
      </Flex>
    </>
  );
}
