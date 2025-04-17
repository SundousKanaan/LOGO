import { Box, HStack, Spacer, Flex, List, ListItem } from "@chakra-ui/react";
import HeadingItem from "../min-components/HeadingItem";
import ButtonItem from "../min-components/Button";
import SellerMiniBox from "../min-components/SellerMiniBox";

export default function TopSellers() {
  // TODO:  change this list to the list from the API
  const fakeSellers = [
    {
      name: "Rose Meadows",
      company: "Company name",
      listing: "2464",
      img: "user-placeholder",
    },
    {
      name: "Madden Esparza",
      company: "Company name",
      listing: "6345",
      img: "user-placeholder",
    },
    {
      name: "Edison Norman",
      company: "Company name",
      listing: "9815",
      img: "user-placeholder",
    },
    {
      name: "Terrance Conner",
      company: "Company name",
      listing: "9245",
      img: "user-placeholder",
    },
    {
      name: "Curtis Valentine",
      company: "Company name",
      listing: "2390",
      img: "user-placeholder",
    },
  ];

  return (
    <Box bg="white" layerStyle="dashboardCardsLayaout">
      <HStack>
        <HeadingItem width="fit-content" fontSize="18px" fontWeight="500">
          Top 5 Fake Sellers
        </HeadingItem>
        <Spacer />
        <ButtonItem
          variant="ghost"
          height="fit-content"
          padding="5px 10px"
          fontWeight="500"
          fontSize="14px"
          color="secondaryColor"
        >
          View All
        </ButtonItem>
      </HStack>

      <List spacing="18px" mt="16px">
        {fakeSellers.map((seller, index) => (
          <ListItem>
            <SellerMiniBox
              key={index}
              name={seller.name}
              company={seller.company}
              listing={seller.listing}
              img={seller.img}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
