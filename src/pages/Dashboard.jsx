import {
  Box,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import CountingBox from "../components/CountingBox";
import ButtonItem from "../min-components/Button";
import TopSellers from "../components/TopSellers";
import TopAdmin from "../components/TopAdmin";
import NotifOfTakeDownds from "../components/NotifOfTakeDownds";
import Analytics from "../components/Analytics";

export default function Dashboard() {
  return (
    <>
      <Flex
        width="calc(100% - 24px)"
        height="40px"
        alignItems="center"
        marginBottom="20px"
      >
        <Text fontWeight="500" fontSize="18px" color="secondaryColor">
          Wed, Oct 27
        </Text>

        <Spacer />

        <HStack spacing="8px">
          <Text
            fontWeight="500"
            fontSize="12px"
            color="secondaryColor"
            opacity="0.6"
          >
            Choose Platform:
          </Text>
          <ButtonGroup variant="solid" spacing="12px">
            <ButtonItem bg="white" padding="9px 21px" fontWeight="500">
              Alibaba
            </ButtonItem>
            <ButtonItem bg="white" padding="9px 21px" fontWeight="500">
              AliExpress
            </ButtonItem>
            <ButtonItem
              bg="themeColor"
              padding="9px 21px"
              fontWeight="600"
              color="white"
            >
              All
            </ButtonItem>
          </ButtonGroup>
        </HStack>
      </Flex>
      <Grid
        width="calc(100% - 24px)"
        gridTemplateColumns="repeat(3, 1fr)"
        gridTemplateRows="180px 337px auto"
        gridTemplateAreas={`
            "r1c1 r1c2 r1c3 "
            "r2c2  r2c2 r2c3"
            "r3c1 r3c1 r3c3"
          `}
        gap="24px"
      >
        <GridItem gridArea="r1c1">
          <CountingBox
            title="Numbers of Takedowns"
            counting="478323"
            changeRatio="20.5%"
            icon="chart-square"
            date="October 2023"
          />
        </GridItem>
        <GridItem gridArea="r1c2">
          <CountingBox
            title="% of Goods Scraped"
            counting="92.85%"
            changeRatio="20.5%"
            icon="coin"
            date="October 2023"
          />
        </GridItem>
        <GridItem gridArea="r1c3">
          <CountingBox
            title="% of Goods Scraped"
            counting="2395"
            icon="message-notif"
            date="October 2023"
            chart={true}
          />
        </GridItem>
        <GridItem gridArea="r2c2">
          <Analytics />
        </GridItem>
        <GridItem gridArea="r2c3">
          <TopSellers />
        </GridItem>

        <GridItem gridArea="r3c1">
          <NotifOfTakeDownds />
        </GridItem>
        <GridItem gridArea="r3c3">
          {/* // TODO: make the data dynamic */}

          <TopAdmin
            name="Carl Meadows"
            role="Admin"
            noticesReviewed="12,123"
            img="/src/assets/topAdmin.jpg"
            path="/TopSellers"
          />
        </GridItem>
      </Grid>
    </>
  );
}
