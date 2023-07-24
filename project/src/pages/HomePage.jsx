import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  HStack,
  Button,
  Input,
  InputRightElement,
  InputGroup,
  Center,
  VStack,
  Select,
  Flex,
} from "@chakra-ui/react";
import { CheckCircleIcon, SearchIcon, CalendarIcon } from "@chakra-ui/icons";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  ArrowRightIcon,
} from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/react";
//import { FaUser } from 'react-icons/Fa';
export const HomePage = () => {
  return (
    <Box bgColor="#fafaf1">
      <Box mt={{ base: "10px", md: "20px" }}>
        <Box
          backgroundImage="url('https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?w=996&t=st=1682772779~exp=1682773379~hmac=9394dd2d96798395cb59dbf4eddcc33cd7d7eeaddc8a0ca5c5f1d069e0e88ec4')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          bgSize="cover"
          h={{ base: "50vh", md: "80vh" }}
        >
          <Box
            ml={{ base: "10px", md: "100px" }}
            pt={{ base: "10px", md: "20px" }}
          >
            <Box display={{ base: "block", md: "flex" }} gap={"5px"}>
              <Heading
                as="b"
                color={"#365349"}
                fontSize={{ base: "2xl", md: "4xl" }}
              >
                Your Health
              </Heading>
              <Heading
                as="b"
                color={"#fafaf1"}
                fontSize={{ base: "2xl", md: "4xl" }}
              >
                is Our
              </Heading>
            </Box>
            <Heading
              color={"#fafaf1"}
              p="2"
              as="b"
              fontSize={{ base: "xl", md: "2xl" }}
            >
              responsibility
            </Heading>

            <Text p="2" fontSize={{ base: "lg", md: "xl" }}>
              <SearchIcon /> Search for a Doctor
            </Text>
            <Text p="2" fontSize={{ base: "lg", md: "xl" }}>
              <Avatar
                w="22px"
                h="22px"
                color="black"
                src="https://bit.ly/broken-link"
              />{" "}
              Select a Doctor
            </Text>
            <Text p="2" fontSize={{ base: "lg", md: "xl" }}>
              <CalendarIcon /> Book an Appointment
            </Text>

            <HStack spacing={{ base: "10px", md: "30px" }}>
              <Button
                color={"#fafaf1"}
                bgColor={"#365349"}
                fontSize={{ base: "lg", md: "xl" }}
              >
                Find Doctor
              </Button>
              <Button color={"#365349"} fontSize={{ base: "lg", md: "xl" }}>
                Lets Talk
              </Button>
            </HStack>
          </Box>
        </Box>
      </Box>
      <Box w="90%" margin={"auto"} boxShadow="md" rounded="md" mb="10">
        <Box
          display={{ base: "block", md: "flex" }}
          justifyContent={{ base: "center", md: "space-evenly" }}
          gap={{ base: "20px", md: "400px" }}
          width={{ base: "100%", md: "97%" }}
          p={{ base: "3", md: "5" }}
        >
          <Text as="b" fontSize={{ base: "xl", md: "2xl" }} color={"#365349"}>
            Book Appointment Now
          </Text>
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent={{ base: "center", md: "space-evenly" }}
            gap={{ base: "20px", md: "30px" }}
          >
            <HStack>
              <Image w="25px" src={require("../assets/charity.png")} />
              <Text fontSize={{ base: "lg", md: "2xl" }} color={"#365349"}>
                Primary Care
              </Text>
            </HStack>
            <HStack>
              <Image w="25px" src={require("../assets/protection.png")} />
              <Text fontSize={{ base: "lg", md: "2xl" }} color={"#365349"}>
                Peadiatric
              </Text>
            </HStack>
            <HStack>
              <Image w="25px" src={require("../assets/doctor.png")} />
              <Text fontSize={{ base: "lg", md: "2xl" }} color={"#365349"}>
                General
              </Text>
            </HStack>
          </Flex>
        </Box>

        <Box
          display={{ base: "block", md: "flex" }}
          justifyContent="space-evenly"
          width={"97%"}
          p="3"
        >
          <Select
            maxW={{ base: "100%", md: "22%" }}
            placeholder="Choose Speciality"
          >
            <option value="dentist">Dentist</option>
            <option value="cardiologist">Cardiologist</option>
            <option value="gynaecologist">Gynaecologist</option>
            <option value="neurologist">Neurologist</option>
          </Select>

          <Input
            placeholder="Select Appointment Date"
            maxW={{ base: "100%", md: "22%" }}
            type="date"
          />

          <Select maxW={{ base: "100%", md: "22%" }} placeholder="My Insurance">
            <option value="maxbufa">MaxBupa</option>
            <option value="icici-insurance">ICICI-Insurance</option>
            <option value="oralcare">OralCare</option>
            <option value="lic">LIC</option>
          </Select>

          <Box>
            <Input type="text" placeholder="Search Doctor" />
          </Box>
        </Box>
      </Box>
      {/* /////// */}
      <Box
        display={{ base: "block", md: "flex" }}
        justifyContent={"space-between"}
        gap={"20px"}
        p="2"
      >
        <Box>
          <Image
            m={{ base: "10px", md: "20px" }}
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/abedaf126567851.612fddd8c4b8b.jpeg"
            alt="doctor"
          />
        </Box>
        <Box boxShadow={{ base: "md", md: "2xl" }}>
          <Heading
            fontSize={{ base: "2xl", md: "4xl" }}
            color={"#365349"}
            m="2"
            pl={{ base: "5px", md: "10px" }}
          >
            Why Choose
          </Heading>
          <Heading
            fontSize={{ base: "xl", md: "3xl" }}
            color={"#365349"}
            m="2"
            pl={{ base: "5px", md: "10px" }}
          >
            Our Qualified Doctor?
          </Heading>
          <Text
            fontSize={{ base: "md", md: "xl" }}
            noOfLines={[1, 2, 3]}
            color={"#365349"}
            m={{ base: "5px", md: "10px" }}
            pl={{ base: "5px", md: "10px" }}
          >
            The quick brown fox jumps over the lazy dog" is an English-language
            pangrama sentence that contains all of the letters of the English
            alphabet. Owing to its existence, Chakra was created.
          </Text>

          <Box
            display={{ base: "block", md: "flex" }}
            justifyContent={{ base: "center", md: "space-around" }}
          >
            <Text fontSize={{ base: "md", md: "xl" }} m={2}>
              <CheckCircleIcon /> 20+ Years of Experience
            </Text>
            <Text
              fontSize={{ base: "md", md: "xl" }}
              ml={{ base: "0", md: "2" }}
            >
              <CheckCircleIcon /> MultiSpeciality Hospital
            </Text>
          </Box>
          <Box
            display={{ base: "block", md: "flex" }}
            justifyContent={{ base: "center", md: "space-around" }}
            ml={{ base: "0", md: "2.5" }}
          >
            <Text fontSize={{ base: "md", md: "xl" }} p={1}>
              <CheckCircleIcon /> 24 Hrs Medical Support
            </Text>
            <Text
              fontSize={{ base: "md", md: "xl" }}
              ml={{ base: "0", md: "3" }}
            >
              <CheckCircleIcon /> Professional Expert Doctor
            </Text>
          </Box>
          <Box alignItems={{ base: "center", md: "left" }} m="2">
            <Button
              bgColor={"#365349"}
              color={"#fafaf1"}
              fontSize={{ base: "md", md: "lg" }}
            >
              Book An Appointment
            </Button>
          </Box>
        </Box>
      </Box>
      {/* /////// */}
      <Box p={{ base: "5", md: "20" }}>
        <Box
          p="15"
          rounded="md"
          w={{ base: "100%", md: "80%" }}
          margin={"auto"}
          display="flex"
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          <HStack
            spacing={{ base: "20px", md: "50px" }}
            flexWrap="wrap"
            justifyContent="center"
          >
            <VStack>
              <Box
                boxShadow={"md"}
                bgColor="two"
                h="100px"
                w="100px"
                borderRadius={"full"}
              >
                <Center>
                  <Image
                    w="50px"
                    mt="5"
                    src={require("../assets/charity.png")}
                  />
                </Center>
              </Box>
              <Text as="b">Charity</Text>
            </VStack>
            <VStack>
              <Box
                border="1px "
                bgColor="two"
                h="100px"
                w="100px"
                borderRadius={"full"}
              >
                <Center>
                  <Image
                    w="50px"
                    mt="5"
                    src={require("../assets/appointment.png")}
                  />
                </Center>
              </Box>
              <Text as="b">Appointment</Text>
            </VStack>
            <VStack>
              <Box
                border="1px "
                bgColor="two"
                h="100px"
                w="100px"
                borderRadius={"full"}
              >
                <Center>
                  <Image w="50px" mt="5" src={require("../assets/card.png")} />
                </Center>
              </Box>
              <Text as="b">Paybill</Text>
            </VStack>
            <VStack>
              <Box
                border="1px "
                bgColor="two"
                h="100px"
                w="100px"
                borderRadius={"full"}
              >
                <Center>
                  <Image
                    w="50px"
                    mt="5"
                    src={require("../assets/doctor.png")}
                  />
                </Center>
              </Box>
              <Text as="b">Doctor</Text>
            </VStack>
            <VStack>
              <Box
                border="1px "
                bgColor="two"
                h="100px"
                w="100px"
                borderRadius={"full"}
              >
                <Center>
                  <Image
                    w="50px"
                    mt="5"
                    src={require("../assets/protection.png")}
                  />
                </Center>
              </Box>
              <Text as="b">Pediatric</Text>
            </VStack>
            <VStack>
              <Box
                border="1px "
                bgColor="two"
                h="100px"
                w="100px"
                borderRadius={"full"}
              >
                <Center>
                  <Image
                    w="50px"
                    mt="5"
                    src={require("../assets/blood-donation.png")}
                  />
                </Center>
              </Box>
              <Text as="b">Donate</Text>
            </VStack>
          </HStack>
        </Box>
      </Box>
      {/* /// */}
      <Box textAlign={{ base: "center" }} p={{ base: "5", md: "7" }}>
        <Heading
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          color={"#365349"}
          m="2"
        >
          Our Different Departments
        </Heading>
        <Heading
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          color={"#365349"}
          m="2"
        >
          For Your Health Benefits
        </Heading>
      </Box>
      {/* /// */}
      <Box p={{ base: "5", md: "15" }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          w={{ base: "100%", md: "90%" }}
          m="auto"
        >
          <Box
            w={{ base: "100%", md: "30%" }}
            boxShadow="md"
            rounded="md"
            p={{ base: "5", md: "8" }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb="3"
            >
              <Image w="50px" src={require("../assets/doctor.png")} />
            </Box>
            <Heading textAlign="center" fontSize={{ base: "xl", md: "2xl" }}>
              Cardiology Surgery
            </Heading>
            <Text
              textAlign="center"
              noOfLines={[1, 2, 3]}
              color="#365349"
              fontSize={{ base: "lg", md: "xl" }}
            >
              The quick brown fox jumps over the lazy dog" is an
              English-language pangrama sentence
            </Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mt="6"
            >
              <Button
                rightIcon={<ArrowRightIcon />}
                bgColor="#365349"
                color="#fafaf1"
                fontSize={{ base: "lg", md: "xl" }}
              >
                Know More
              </Button>
            </Box>
          </Box>

          <Box
            w={{ base: "100%", md: "30%" }}
            boxShadow="md"
            rounded="md"
            bgColor="#365349"
            p={{ base: "5", md: "8" }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb="3"
            >
              <Image w="50px" src={require("../assets/protection.png")} />
            </Box>
            <Heading
              textAlign="center"
              fontSize={{ base: "xl", md: "2xl" }}
              color="#fafaf1"
            >
              Pediatrics and New Born
            </Heading>
            <Text
              textAlign="center"
              noOfLines={[1, 2, 3]}
              color="#fafaf1"
              fontSize={{ base: "lg", md: "xl" }}
            >
              The quick brown fox jumps over the lazy dog" is an
              English-language pangrama sentence
            </Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mt="6"
            >
              <Button
                rightIcon={<ArrowRightIcon />}
                color="#365349"
                bgColor="#fafaf1"
                fontSize={{ base: "lg", md: "xl" }}
              >
                Know More
              </Button>
            </Box>
          </Box>

          <Box
            w={{ base: "100%", md: "30%" }}
            boxShadow="md"
            rounded="md"
            p={{ base: "5", md: "8" }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb="3"
            >
              <Image w="50px" src={require("../assets/tooth.png")} />
            </Box>
            <Heading textAlign="center" fontSize={{ base: "xl", md: "2xl" }}>
              Dentistry
            </Heading>
            <Text
              textAlign="center"
              noOfLines={[1, 2, 3]}
              color="#365349"
              fontSize={{ base: "lg", md: "xl" }}
            >
              The quick brown fox jumps over the lazy dog" is an
              English-language pangrama sentence
            </Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mt="6"
            >
              <Button
                rightIcon={<ArrowRightIcon />}
                bgColor="#365349"
                color="#fafaf1"
                fontSize={{ base: "lg", md: "xl" }}
              >
                Know More
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Box textAlign={"center"} p="7">
          <Heading fontSize="4xl" color={"#365349"} m="2">
            What Our Patients
          </Heading>
          <Heading fontSize="3xl" color={"#365349"} m="2">
            Say About Us
          </Heading>
        </Box>
      </Box>
      <Box w="100%" h="50vh" bgColor="#365349" zIndex="0" pt={"80px"}>
        <Box
          w="60%"
          h="30vh"
          color="white"
          zIndex="1"
          textAlign={"center"}
          m="auto"
          p={"20px"}
          boxShadow="inner"
          rounded="2xl"
          bgGradient="linear(to-r, teal.500, green.500)"
        >
          <Text
            mt={"20px"}
            noOfLines={[1, 2, 3]}
            color={"#fafaf1"}
            fontSize="xl"
            textAlign={"center"}
          >
            The quick brown fox jumps over the lazy dog" is an English-language
            pangrama sentence.The quick brown fox jumps over the lazy dog" is an
            English-language pangrama sentence.The quick brown fox jumps over
            the lazy dog" is an English-language pangrama sentence.{" "}
          </Text>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Text fontSize={"2xl"} color={"#fafaf1"}>
              Sarah Jones
            </Text>
            <Text fontSize={"xl"} color={"gold"}>
              ★★★★★
            </Text>
          </Box>
        </Box>
      </Box>
      <Box textAlign={"center"} p="10">
        <Heading fontSize="4xl" color={"#365349"} m="2">
          Get In Touch
        </Heading>
        <Heading fontSize="3xl" color={"#365349"} m="2">
          Get Your Valuable Feedback
        </Heading>
      </Box>
      <Box w="auto" m="auto" p="15">
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type="text"
            placeholder="Enter Your Email Address"
          />
          <InputRightElement width="4.5rem">
            <Button bgColor="#365349" color={"#fafaf1"} h="1.75rem" size="sm">
              Send
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
        
    </Box>
  );
};
