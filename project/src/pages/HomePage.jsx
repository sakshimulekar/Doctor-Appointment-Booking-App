import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
export const HomePage = () => {
  return (
    <Box
      backgroundImage="url('https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?w=996&t=st=1682772779~exp=1682773379~hmac=9394dd2d96798395cb59dbf4eddcc33cd7d7eeaddc8a0ca5c5f1d069e0e88ec4')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      bgSize="100%"
      h={"100vh"}
    >
      <Box display={"flex"}>
        <Heading>Your Health</Heading> <Text> </Text>
        <Heading> is Our</Heading>
      </Box>
      <Heading>responsibility</Heading>
      <Text>Search for a Doctor</Text>
      <Text>Select a Doctor</Text>
      <Text>Book an Appointment</Text>
    </Box>
  );
};
