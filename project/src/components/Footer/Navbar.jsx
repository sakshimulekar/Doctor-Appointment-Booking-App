import React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
  
} from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      //p={"5"}
      w={"100%"}
      
      boxShadow="md"
      top={"0"}
      backgroundColor={"one"}
    >
      <Box bgColor={"one"} display={"flex"} alignItems={"center"}>
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          size="md"
          mr={2}
          onClick={onOpen}
          display={{ md: "none" }}
        />
        <Image
          src={require("../../assets/m.png")}
          //boxShadow={"xl"}
          bgColor={"one"}
          w={"100px"}
          alt="logo"
          ml={"20px"}
        />
      </Box>
      <Box
        display={{ base: "none", md: "flex" }}
        gap={"5"}
        alignItems={"center"}
      >
        <Link to={"/"}>
          <Box _hover={{ textDecoration: "underline" }}>
            <Text color={"#61876e"} as={"b"}>
              Home
            </Text>{" "}
          </Box>
        </Link>
        <Box _hover={{ textDecoration: "underline" }}>
          <Text color={"#61876e"} as={"b"}>
            About Us
          </Text>{" "}
        </Box>
        <Box _hover={{ textDecoration: "underline" }}>
          <Text color={"#61876e"} as={"b"}>
            Services
          </Text>{" "}
        </Box>
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
        {/* <Link to={"/login"}>
          <Box _hover={{ textDecoration: "underline" }}>
            <Button colorScheme="two" variant="outline" color={"two"}>
              Sign-up
            </Button>
          </Box>
        </Link> */}
        <Menu>
  <MenuButton as={"b"} ><Text color={"two"}>Sign up</Text></MenuButton>
  <MenuList>
    <MenuItem as='a' href='/login'>User Login</MenuItem>
    <MenuItem as='a' href='/doctorloginpage'>Doctor Login</MenuItem>
    <MenuItem as='a' href='/adminLogin'>Admin Login</MenuItem>
  </MenuList>
</Menu>
        {/* <Link to={"/doctorpage"}>
          <Box _hover={{ textDecoration: "underline" }}>
            <Button colorScheme="two" variant="outline" color={"two"}>
              Doctor
            </Button>
          </Box>
        </Link> */}
      </Box>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <Box display="flex" flexDirection="column" gap={4}>
              <Link to={"/"}>
                <Box onClick={onClose} _hover={{ textDecoration: "underline" }}>
                  <Text color={"#61876e"} as={"b"}>
                    Home
                  </Text>{" "}
                </Box>
              </Link>
              <Link to={"/login"}>
                <Box onClick={onClose} _hover={{ textDecoration: "underline" }}>
                  <Text color={"#61876e"} as={"b"}>
                    About Us
                  </Text>{" "}
                </Box>
              </Link>
              <Link to={"/login"}>
                <Box onClick={onClose} _hover={{ textDecoration: "underline" }}>
                  <Text color={"#61876e"} as={"b"}>
                    Servies
                  </Text>{" "}
                </Box>
              </Link>
              <Link to={"/bookingpage"}>
                <Box onClick={onClose} _hover={{ textDecoration: "underline" }}>
                  <Text color={"#61876e"} as={"b"}>
                    Appointment
                  </Text>{" "}
                </Box>
              </Link>
              <Link to={"/edit"}>
                <Box onClick={onClose} _hover={{ textDecoration: "underline" }}>
                  <Text color={"#61876e"} as={"b"}>
                    Booking
                  </Text>{" "}
                </Box>
              </Link>
              <Link to={"/login"}>
                <Box onClick={onClose} _hover={{ textDecoration: "underline" }}>
                  <Button
                    colorScheme="two"
                    variant="outline"
                    color={"two"}
                    w="100%"
                  >
                    Sign-up
                  </Button>
                </Box>
              </Link>
              <Link to={"/doctorloginpage"}>
                <Box onClick={onClose} _hover={{ textDecoration: "underline" }}>
                  <Button
                    colorScheme="two"
                    variant="outline"
                    color={"two"}
                    w="100%"
                  >
                    Doctor
                  </Button>
                </Box>
              </Link>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
