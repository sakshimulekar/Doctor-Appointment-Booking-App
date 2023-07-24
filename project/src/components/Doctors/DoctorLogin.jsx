
import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getDoctorsFn,
  postLoginDoctorFn,
} from "../../redux/DoctorReducer/action";

export const DoctorLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginInfo = useSelector((state) => state.doctorReducer.Doctors);

  useEffect(() => {
    dispatch(getDoctorsFn());
  }, []);

  function validateDoctor(username, password) {
    const user = loginInfo.find(
      (user) => user.email === username && user.password === password
    );
    return user;
  }

  function validateLogin(username, password) {

    return "janesmith@gmail.com" === username && "12345" === password;

  }

  const handleSubmit = () => {
    console.log(username, password);
    const isValid = validateLogin(username, password);
    const user = validateDoctor(username, password);
    console.log("user", user);
    dispatch(postLoginDoctorFn(user));

    if (isValid) {
      navigate("/doctorpage");
    }
    setPassword("");
    setUsername("");
  };

  return (
    <Box bg="gray.200" h="100vh" p="30px">
      <Heading textAlign={"center"} color="two">
        doctor Login
      </Heading>
      <Center h="auto%">
        <Box w={["90%", "70%", "40%", "30%"]}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              borderColor="blue.500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              borderColor="blue.500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button
            colorScheme="green"
            mt={4}
            w="100%"
            onClick={handleSubmit}
            _hover={{ bg: "green.600" }}
          >
            Login
          </Button>

        </Box>
      </Center>

        </FormControl>
      </Box>
        

    </Box>
  );
};
