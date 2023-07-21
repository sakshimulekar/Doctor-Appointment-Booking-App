import React from "react";
import {
  Box,
  Image,
  Text,
  Flex,
  Stack,
  Divider,
  VStack,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <Box
      backgroundColor={"#61876e"}
      color={"#fafaf1"}
      py={8}
      alignItems="center"
    >
      <Flex
        direction={["column", "row"]}
        justify="space-between"
        maxW="1200px"
        mx="auto"
        align="center"
      >
        <Box w={["100%", "25%"]} mb={[8, 0]} alignItems="center">
          <Image src={require("../../assets/m.png")} alt="logo" w={"80%"} />
        </Box>
        <Stack
          direction={["column", "row"]}
          spacing={[4, 8]}
          w={["100%", "75%"]}
          alignItems="center"
        >
          <VStack align="flex-start" flex={1} alignItems="center">
            <Text fontSize="lg" fontWeight="bold">
              Menu
            </Text>
            <Text>Home</Text>
            <Text>About us</Text>
            <Text>Services</Text>
            <Text>Appointment</Text>
            <Text>Language</Text>
          </VStack>
          <VStack align="flex-start" flex={1} alignItems="center">
            <Text fontSize="lg" fontWeight="bold">
              Need Help ?
            </Text>
            <Text>Medical Q&amp;As</Text>
            <Text>Terms of use</Text>
            <Text>Privacy Policy</Text>
            <Text>Doctors Privacy Policy</Text>
          </VStack>
          <VStack align="flex-start" flex={1} alignItems="center">
            <Text fontSize="lg" fontWeight="bold">
              Contacts
            </Text>
            <Text>+2 000 000 000</Text>
            <Text>14 Green Road ST.</Text>
            <Text>kmlhospital155@gmail.com</Text>
            <VStack align="flex-start" flex={1}>
              <Text fontSize="lg" fontWeight="bold">
                Follow us On
              </Text>
              <HStack spacing={4}>
                <IconButton
                  as={AiFillFacebook}
                  w={8}
                  h={8}
                  bgColor="white"
                  borderRadius="full"
                />
                <IconButton
                  as={AiFillTwitterCircle}
                  w={8}
                  h={8}
                  bgColor="white"
                  borderRadius="full"
                />
                <IconButton
                  as={AiFillInstagram}
                  w={8}
                  h={8}
                  bgColor="white"
                  borderRadius="full"
                />
              </HStack>
            </VStack>
          </VStack>
        </Stack>
      </Flex>
      <Divider my={8} />
      <Flex
        direction={["column", "row"]}
        justify="space-between"
        maxW="1200px"
        mx="auto"
        alignItems="center"
      >
        <Text>&copy; 2023 KML Hospital</Text>
        <Stack direction={["column", "row"]} spacing={4}>
          <Text>Terms and Conditions</Text>
          <Text>Privacy Policy</Text>
          <Text>Site Map</Text>
        </Stack>
      </Flex>
    </Box>
  );
};
