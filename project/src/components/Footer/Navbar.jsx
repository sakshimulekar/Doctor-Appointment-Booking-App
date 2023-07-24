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
  Stack,
  Flex,
} from "@chakra-ui/react";

import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link, NavLink } from "react-router-dom";

// ...import statements

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="nav"
      justifyContent="space-between"
      alignItems="center"
      p="5"
      bg="one"
      color="white"
    >
      <Box display="flex" alignItems="center">
        <Image
          src={require("../../assets/m.png")}
          w="100px"
          alt="logo"
          ml="20px"
        />
      </Box>

      <Box
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        gap="8"
        flexGrow="1"
        justifyContent="flex-end"
      >
        <NavLink to={"/"}>
          <Text
            color="#61876e"
            as="b"
            _hover={{ color: "#00796B", fontSize: "20px" }}
          >
            Home
          </Text>{" "}
        </NavLink>
        <NavLink to={"/login"}>
          <Text
            color="#61876e"
            as="b"
            _hover={{ color: "#00796B", fontSize: "20px" }}
          >
            About Us
          </Text>{" "}
        </NavLink>
        {/* Add Services */}
        <NavLink to={"/bookingpage"}>
          <Text
            color="#61876e"
            as="b"
            _hover={{ color: "#00796B", fontSize: "20px" }}
          >
            Appointment
          </Text>{" "}
        </NavLink>
        <NavLink to={"/checkAppoint"}>
          <Text
            color="#61876e"
            as="b"
            _hover={{ color: "#00796B", fontSize: "20px" }}
          >
            Booking
          </Text>{" "}
        </NavLink>
        <Menu>
          <MenuButton as="b" _hover={{ color: "#00796B", fontSize: "20px" }}>
            <Text color="two">Sign up</Text>
          </MenuButton>
          <MenuList>
            <MenuItem as="a" href="/login">
              User Login
            </MenuItem>
            <MenuItem as="a" href="/doctorloginpage">
              Doctor Login
            </MenuItem>
            <MenuItem as="a" href="/adminLogin">
              Admin Login
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      {/* Hamburger Icon for small screens */}
      <IconButton
        aria-label="Open Menu"
        icon={<HamburgerIcon />}
        size="md"
        onClick={onOpen}
        display={{ base: "flex", md: "none" }}
      />

      {/* Drawer for small screens */}
      <Box>
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
            <DrawerBody>
              <Stack direction="column" spacing={4}>
                <Link to={"/"} onClick={onClose}>
                  <Text
                    color="#61876e"
                    as="b"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Home
                  </Text>{" "}
                </Link>
                <Link to={"/login"} onClick={onClose}>
                  <Text
                    color="#61876e"
                    as="b"
                    _hover={{ textDecoration: "underline" }}
                  >
                    About Us
                  </Text>{" "}
                </Link>
                {/* Add Services */}
                <Link to={"/bookingpage"} onClick={onClose}>
                  <Text
                    color="#61876e"
                    as="b"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Appointment
                  </Text>{" "}
                </Link>
                <Link to={"/edit"} onClick={onClose}>
                  <Text
                    color="#61876e"
                    as="b"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Booking
                  </Text>{" "}
                </Link>
                <Link to={"/login"} onClick={onClose}>
                  <Button
                    colorScheme="two"
                    variant="outline"
                    // color="two"
                    w="100%"
                  >
                    Sign-up
                  </Button>
                </Link>
                <Link to={"/doctorloginpage"} onClick={onClose}>
                  <Button
                    colorScheme="two"
                    variant="outline"
                    color="two"
                    w="100%"
                  >
                    Doctor
                  </Button>
                </Link>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
  );
};
