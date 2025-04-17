import { HStack, Text, Spacer, Flex } from "@chakra-ui/react";
import React from "react";
import HeadingItem from "./HeadingItem";

export default function TakeDownsNotif({ title, link, time }) {
  return (
    <Flex width="100%">
      <HStack spacing="9px">
        <HeadingItem fontWeight="400" fontSize="14px" color="secondaryColor">
          {title}
        </HeadingItem>
        <Text
          fontWeight="400"
          fontSize="12px"
          color="secondaryColor"
          opacity={"0.6"}
          textOverflow="ellipsis"
        >
          {link}
        </Text>
      </HStack>
      <Spacer />
      <Text
        width="80px"
        fontWeight="400"
        fontSize="12px"
        color="secondaryColor"
        opacity={"0.6"}
        textAlign="end"
        marginLeft="50px"
      >
        {time}
      </Text>
    </Flex>
  );
}
