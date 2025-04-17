import { Flex, HStack, VStack, Spacer } from "@chakra-ui/react";
import HeadingItem from "../min-components/HeadingItem";
import LinkButton from "../min-components/LinkButton";
import TakeDownsNotif from "../min-components/TakeDownsNotif";

export default function NotifOfTakeDownds() {
  // TODO: make the data dynamic from API
  const notifications = [
    {
      title: "Mademoiselle 3.4fl.oz 100 ml perfume, CHANEL",
      link: "https://yourproducturlgoeshere1122.com",
      time: "1 min ago",
    },
    {
      title: "Cigarettes Crush balls Aroma, BLUE ",
      link: "https://yourproducturlgoeshere1122.com",
      time: "2 mins ago",
    },
    {
      title: "Pokémon Enamel Pins Lot you can choose from  ",
      link: "https://yourproducturlgoeshere1122.com",
      time: "2 mins ago",
    },
    {
      title: "4 PCS Herb Tobacco Spice Grinder, COMBAT",
      link: "https://yourproducturlgoeshere1122.com",
      time: "2 mins ago",
    },
    {
      title: "Cigarettes Crush balls Aroma, BLUE ",
      link: "https://yourproducturlgoeshere1122.com",
      time: "6 mins ago",
    },
    {
      title: "Pokémon Enamel Pins Lot you can choose from  ",
      link: "https://yourproducturlgoeshere1122.com",
      time: "6 mins ago",
    },
    {
      title: "4 PCS Herb Tobacco Spice Grinder, COMBAT",
      link: "https://yourproducturlgoeshere1122.com",
      time: "6 mins ago",
    },
    {
      title: "Cigarettes Crush balls Aroma, BLUE ",
      link: "https://yourproducturlgoeshere1122.com",
      time: "6 mins ago",
    },
    {
      title: "Pokémon Enamel Pins Lot you can choose from  ",
      link: "https://yourproducturlgoeshere1122.com",
      time: "6 mins ago",
    },
    {
      title: "4 PCS Herb Tobacco Spice Grinder, COMBAT",
      link: "https://yourproducturlgoeshere1122.com",
      time: "6 mins ago",
    },
    {
      title: "Cigarettes Crush balls Aroma, BLUE ",
      link: "https://yourproducturlgoeshere1122.com",
      time: "6 mins ago",
    },
    {
      title: "Pokémon Enamel Pins Lot you can choose from  ",
      link: "https://yourproducturlgoeshere1122.com",
      time: "6 mins ago",
    },
    {
      title: "4 PCS Herb Tobacco Spice Grinder",
      link: "https://yourproducturlgoeshere1lkllk,slaklsal122.com",
      time: "8 hours ago",
    },
  ];
  return (
    <Flex direction="column" layerStyle="dashboardCardsLayaout" gap="20px">
      <HStack>
        <HeadingItem fontWeight="500" fontSize="18px" color="secondaryColor">
          Notifications of Take Downs
        </HeadingItem>
        <Spacer />
        <LinkButton
          to="/User-management"
          height="fit-content"
          padding="5px 10px"
          fontWeight="500"
          fontSize="14px"
          color="secondaryColor"
          _hover={{
            boxShadow: "0 0 0 2px var(--chakra-colors-themeColor)",
          }}
        >
          View All
        </LinkButton>
      </HStack>
      <VStack spacing="28px" align="start">
        {notifications.map((notification, index) => (
          <TakeDownsNotif
            key={index}
            title={notification.title}
            link={notification.link}
            time={notification.time}
          />
        ))}
      </VStack>
    </Flex>
  );
}
