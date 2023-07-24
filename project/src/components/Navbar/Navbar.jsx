import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Image, Text } from "@chakra-ui/react";
export const Navbar = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-around"}
      p={"5"}
      w={"100%"}
      h={"100px"}
      boxShadow="md"
      top={"0"}
      backgroundColor={"#fafaf1"}
    >
      <Box bgColor={"one"} display={"flex"} gap={"5"} alignItems={"center"}>
        <Image
          src={require("../../assets/logo-without-bg.png")}
          w={"150px"}
          alt="logo"
        />
      </Box>
      <Box display={"flex"} gap={"5"} alignItems={"center"}>
        <Link to={"/"}>
          <Box _hover={{ textDecoration: "underline" }}>
            <Text color={"#496854"} as={"b"}>
              Home
            </Text>{" "}
          </Box>
        </Link>
        <Link to={"/login"}></Link>
        <Box _hover={{ textDecoration: "underline" }}>
          <Text color={"#61876e"} as={"b"}>
            About Us
          </Text>{" "}
        </Box>
        {/* <Link to={"/login"}></Link>
        <Box >
          <Text color={"#61876e"} as={"b"}>
            Servies
          </Text>{" "}
        </Box> */}
        <Link to={"/bookingpage"}>
          <Box _hover={{ textDecoration: "underline" }}>
            <Text color={"#61876e"} as={"b"}>
              Appointment
            </Text>{" "}
          </Box>
        </Link>

        <Link to={"/checkAppoint"}>
          <Box _hover={{ textDecoration: "underline" }}>
            <Text color={"#61876e"} as={"b"}>
              Booking
            </Text>{" "}
          </Box>
        </Link>

        <Link to={"/login"}>
          <Box _hover={{ textDecoration: "underline" }}>
            {" "}
            <Button colorScheme="two" variant="outline" color={"two"}>
              Sign-up
            </Button>
          </Box>
        </Link>
        <Link to={"/doctorloginpage"}>
          <Box _hover={{ textDecoration: "underline" }}>
            <Button colorScheme="two" variant="outline" color={"two"}>
              Doctor
            </Button>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};
