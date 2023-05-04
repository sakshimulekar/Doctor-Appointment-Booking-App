import React from "react";
import { Box, Text } from "@chakra-ui/react";
export const Footer = () => {
  return (
    <Box
      backgroundColor={"#61876e"}
      color={"#fafaf1"}
      w={"100%"}
      h={"35vh"}
      display={"flex"}
      p={"50px"}
    >
      <Box display={"flex"} w={"80%"} m={"auto"}>
        <Box w={"220px"}>Logo</Box>
        <Box w={"220px"}>
          <Text as={"b"}>Menu</Text>
          <Text>Home</Text>
          <Text>About us</Text>
          <Text>Servies</Text>
          <Text>Appointment</Text>
          <Text>Language</Text>
        </Box>
        <Box w={"220px"}>
          <Text as={"b"}>Need Help ?</Text>
          <Text>Medical Q&As</Text>
          <Text>Terms of use</Text>
          <Text>Privacy Policy</Text>
          <Text>Doctors Privacy Policy</Text>
        </Box>
        <Box w={"220px"}>
          <Text as={"b"}>Contacts</Text>
          <Text>+2 000 000 000</Text>
          <Text>14 Grean Road ST.</Text>
          <Text>kmlhospital155@gmail.com</Text>
        </Box>
        <Box w={"220px"}>Follow us On</Box>
      </Box>
    </Box>
  );
};
