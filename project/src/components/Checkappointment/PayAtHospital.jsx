import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Image,
  Text,
} from "@chakra-ui/react";

const PayAtHospital = () => {
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [isValidCaptcha, setIsValidCaptcha] = useState(false);

  function generateCaptcha() {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const handleRefreshClick = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
    setIsValidCaptcha(false);
  };

  const handlePayClick = () => {
    setShowCaptcha(true);
  };

  const handleCaptchaChange = (event) => {
    setCaptchaInput(event.target.value);
  };

  const handleCaptchaSubmit = () => {
    // Verify captcha
    if (captchaInput.toUpperCase() === captcha.toUpperCase()) {
      setIsValidCaptcha(true);
    } else {
      setIsValidCaptcha(false);
    }
  };

  return (
    <Box mt="4">
      <Button gap={5} colorScheme="green" onClick={handlePayClick}>
        {
          <Image
            width="30px"
            src="https://w7.pngwing.com/pngs/178/28/png-transparent-computer-icons-money-bag-bank-cash-angle-hand-investment-thumbnail.png"
          />
        }{" "}
        Pay at Hospital
      </Button>
      {showCaptcha && (
        <Box mt="4">
          <Box display="flex" alignItems="center" mb="4">
            <Text mr="4"></Text>
            <Image
              src={`https://dummyimage.com/150x50/000000/ffffff.png&text=${captcha}`}
              alt="Captcha"
              width="100px"
            />
            <Button ml="4" size="sm" onClick={handleRefreshClick}>
              Refresh
            </Button>
          </Box>
          <FormControl id="captcha" isInvalid={!isValidCaptcha}>
            <FormLabel>Enter Captcha</FormLabel>
            <Input
              type="text"
              placeholder="Enter captcha"
              value={captchaInput}
              onChange={handleCaptchaChange}
            />
          </FormControl>
          <Button mt="4" colorScheme="green" onClick={handleCaptchaSubmit}>
            Submit
          </Button>
        </Box>
      )}
      {isValidCaptcha && (
        <Box mt="4" color="green">
          Thank you Your appointment has confirmed visit the hospital 1 hour
          before the time
        </Box>
      )}
    </Box>
  );
};

export default PayAtHospital;
