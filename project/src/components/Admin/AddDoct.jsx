import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
  Center,
  Button,
  Checkbox,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addDoct } from "../../redux/AdminReducer/action";

const initial = {
  name: "",
  image: "",
  profile: "",
  description: "",
  location: "",
  email: "",
  password: "",
  waiting_time: "",
  fees: "",
  category: "",
  gender: "",
  rating: "",
  status: "",
};

export const AddDoct = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [input, setInput] = useState(initial);

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(addDoct(input));
    setInput(initial);
    toast({
      title: "Application submitted!",
      description:
        "Your application has been received. We will review your application and respond within the next 48 hours.",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Box bg="gray.200" p="20px">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Center>
        <Box w={["100%", "80%", "60%"]} boxShadow="md" p="20px" bg="white">
          <Center>
            <Text color="black" as="b" fontSize="xl" m="10px">
              Doctor Application
            </Text>
          </Center>

          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel color="gray.700">Doctor Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={input.name}
                placeholder="Doctor name"
                onChange={handleInputChange}
              />

              <FormLabel color="gray.700">Image</FormLabel>
              <Input
                type="text"
                name="image"
                placeholder="Image URL"
                value={input.image}
                onChange={handleInputChange}
              />

              {/* ... other form controls ... */}

              <FormLabel color="gray.700">Available status</FormLabel>
              <Checkbox
                name="status"
                isChecked={input.status}
                onChange={handleInputChange}
                colorScheme="teal"
              >
                Available
              </Checkbox>

              <Center>
                <Button
                  m="10px"
                  w="100%"
                  maxW="350px"
                  colorScheme="teal"
                  type="submit"
                >
                  Submit
                </Button>
              </Center>
            </FormControl>
          </form>
        </Box>
      </Center>
    </Box>
  );
};

export default AddDoct;
