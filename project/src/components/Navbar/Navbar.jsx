import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Text } from "@chakra-ui/react";
export const Navbar = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-around"}
      p={"5"}
      w={"100%"}
      h={"100px"}
      box-shadow="rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
      top={"0"}
      backgroundColor={"#fafaf1"}
    >
      <Box>Logo</Box>
      <Box display={"flex"} gap={"5"} alignItems={"center"}>
        <Link to={"/"}>
          <Box>
            <Text color={"#61876e"} as={"b"}>
              Home
            </Text>{" "}
          </Box>
        </Link>
        <Link to={"/login"}></Link>
        <Box>
          <Text color={"#61876e"} as={"b"}>
            About Us
          </Text>{" "}
        </Box>
        <Link to={"/login"}></Link>
        <Box>
          <Text color={"#61876e"} as={"b"}>
            Servies
          </Text>{" "}
        </Box>
        <Link to={"/bookingpage"}>
          <Box>
            <Text color={"#61876e"} as={"b"}>
              Appointment
            </Text>{" "}
          </Box>
        </Link>
        <Link to={"/login"}>
          <Box>
            {" "}
            <Button colorScheme="teal" variant="outline">
              Sign-up
            </Button>
          </Box>
        </Link>
        <Box>
          <Button colorScheme="teal" variant="outline">
            Button
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
