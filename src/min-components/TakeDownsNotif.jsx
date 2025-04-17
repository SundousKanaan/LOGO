import { HStack, Text, Spacer } from "@chakra-ui/react";
import React from "react";
import HeadingItem from "./HeadingItem";

export default function TakeDownsNotif({ title, link, time }) {
  return (
    <HStack>
      <HeadingItem fontWeight="400" fontSize="14px" color="secondaryColor">
        {title}
      </HeadingItem>
      <Text
        fontWeight="400"
        fontSize="12px"
        color="secondaryColor"
        opacity={"0.6"}
      >
        {link}
      </Text>
      <Spacer />
      <Text
        fontWeight="400"
        fontSize="12px"
        color="secondaryColor"
        opacity={"0.6"}
        textAlign="end"
      >
        {time}
      </Text>
    </HStack>
  );
}
