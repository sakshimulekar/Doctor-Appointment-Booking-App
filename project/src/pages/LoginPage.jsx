import { Box, Button, Heading, Input, FormLabel } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../redux/AuthReducer/action";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const auth = useSelector((store) => store.authReducer.isAuth);
  const error = useSelector((store) => store.authReducer.isError);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handelLogin = () => {
    const userdata = {
      email,
      password,
      username,
    };

    dispatch(login(userdata)).then(() => {
      navigate(location.state);
    });
  };

  return (
    <div auth={auth} error={error} style={{ backgroundColor: "#fafaf1" }}>
      <Box p={["5", "10", "20"]}>
        <Box w={["100%", "100%", "60%"]} m="auto" boxShadow={"md"} rounded="md">
          <Heading mt="10" textAlign={"center"} color="two">
            User Login
          </Heading>
          <Box w="100%" m="auto" p={["5", "10", "20"]}>
            <FormLabel color="two">UserName :</FormLabel>
            <Input
              type="text"
              placeholder="UserName"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              m="1"
            />
            <FormLabel color="two">Email :</FormLabel>
            <Input
              type="email"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              m="1"
            />
            <FormLabel color="two">Password :</FormLabel>
            <Input
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              m="1"
            />
            <Button
              w="100%"
              m="2"
              onClick={handelLogin}
              bgColor="#365349"
              color="#fafaf1"
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
