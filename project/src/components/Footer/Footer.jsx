import React from "react";
import {
  Box,
  Image,
  Text,
  Flex,
  Stack,
  Divider,
  SimpleGrid,
  VStack,
  HStack,
} from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box backgroundColor={"#61876e"} color={"#fafaf1"} py={8}>
      <Flex
        direction={["column", "row"]}
        justify="space-between"
        maxW="1200px"
        mx="auto"
      >
        <Box w={["100%", "25%"]} mb={[8, 0]}>
          <Image
            src={require("../../assets/m.png")}
            alt="logo"
            w={"80%"}
          />
        </Box>
        <Stack
          direction={["column", "row"]}
          spacing={[4, 8]}
          w={["100%", "75%"]}
        >
          <VStack align="flex-start">
            <Text fontSize="lg" fontWeight="bold">
              Menu
            </Text>
            <Text>Home</Text>
            <Text>About us</Text>
            <Text>Servies</Text>
            <Text>Appointment</Text>
            <Text>Language</Text>
          </VStack>
          <VStack align="flex-start">
            <Text fontSize="lg" fontWeight="bold">
              Need Help ?
            </Text>
            <Text>Medical Q&amp;As</Text>
            <Text>Terms of use</Text>
            <Text>Privacy Policy</Text>
            <Text>Doctors Privacy Policy</Text>
          </VStack>
          <VStack align="flex-start">
            <Text fontSize="lg" fontWeight="bold">
              Contacts
            </Text>
            <Text>+2 000 000 000</Text>
            <Text>14 Grean Road ST.</Text>
            <Text>kmlhospital155@gmail.com</Text>
          </VStack>
          <VStack align="flex-start">
            <Text fontSize="lg" fontWeight="bold">
              Follow us On
            </Text>
            <HStack spacing={4}>
              <Box bgColor="white" borderRadius="full" w={8} h={8}></Box>
              <Box bgColor="white" borderRadius="full" w={8} h={8}></Box>
              <Box bgColor="white" borderRadius="full" w={8} h={8}></Box>
              <Box bgColor="white" borderRadius="full" w={8} h={8}></Box>
            </HStack>
          </VStack>
        </Stack>
      </Flex>
      <Divider my={8} />
      <Flex justify="space-between" maxW="1200px" mx="auto" alignItems="center">
        <Text>&copy; 2023 KML Hospital</Text>
        <SimpleGrid columns={[1, 3]} spacing={4}>
          <Text>Terms and Conditions</Text>
          <Text>Privacy Policy</Text>
          <Text>Site Map</Text>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};
