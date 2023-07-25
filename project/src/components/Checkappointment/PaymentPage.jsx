import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Flex,
  Image,
  HStack,
  Text,
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import PayAtHospital from "./PayAtHospital";
import PaymentOptions from "./PaymentOptions";
import { Recept } from "./Recept";
import { useNavigate } from "react-router-dom";
const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [otp, setOtp] = useState("");
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [isValidCardNumber, setIsValidCardNumber] = useState(false);
  const [isValidExpiryDate, setIsValidExpiryDate] = useState(false);
  const [isValidCvv, setIsValidCvv] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handlePayByCardClick = () => {
    setShowPaymentForm(true);
  };

  const handlePayButtonClick = () => {
    if (isValidCardNumber && isValidExpiryDate && isValidCvv) {
      const generatedOtp = Math.floor(1000 + Math.random() * 9000);
      setOtp(generatedOtp.toString());
      setShowOtpForm(true);
    } else {
      toast({
        title: "Error",
        description:
          "Please fill all the required fields with valid information to proceed with payment.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleOtpVerification = () => {
    if (otp.trim() === "") {
      toast({
        title: "Error",
        description: "Please enter the OTP to complete the payment.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      // perform payment processing logic here
      setShowPaymentForm(false);
      setShowOtpForm(false);

      toast({
        title: "Thank you!",
        description:
          "Your appointment has been confirmed with the doctor.Visit the Hospital 1 hour prior before the time",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    setCardNumber(value);
    setIsValidCardNumber(validateCardNumber(value));
  };

  const handleExpiryDateChange = (e) => {
    const value = e.target.value;
    setExpiryDate(value);
    setIsValidExpiryDate(validateExpiryDate(value));
  };

  const handleCvvChange = (e) => {
    const value = e.target.value;
    setCvv(value);
    setIsValidCvv(validateCvv(value));
  };

  const validateCardNumber = (value) => {
    return /^\d{16}$/.test(value);
  };

  const validateExpiryDate = (value) => {
    return /^(0[1-9]|1[0-2])\/\d{2}$/.test(value);
  };

  const validateCvv = (value) => {
    return /^\d{3}$/.test(value);
  };

  return (
    <Box
      display="flex"
      margin="auto"
      w="100%"
      textAlign="center"
      justifyContent="space-around"
      mt={6}
    >
      <Box>
        <Box p="4" bg="#fafaf1" width="500px" ml="10px">
          <Button colorScheme="green" onClick={handlePayByCardClick} gap={5}>
            {
              <Image
                width="70px"
                src="https://w7.pngwing.com/pngs/665/503/png-transparent-visa-mastercard-and-paypal-logos-payment-credit-card-debit-card-logo-mastercard-paypal-text-service-banner-thumbnail.png"
              />
            }{" "}
            Pay by Debit/Credit Card
          </Button>

          {showPaymentForm && (
            <Box mt="4" bg="blue.50" p="4" borderRadius="md">
              <Flex mt="4" alignItems="center">
                <Image
                  src="https://www.anthropologie.com/static/v3/images/mastercard-200dd7d92e446ace024f5b7a56fc3dbb.svg"
                  alt="Mastercard"
                  boxSize="50px"
                  mx="2"
                />
                <Image
                  src="https://www.anthropologie.com/static/v3/images/visa-e299d59963d3487491cc3f5cdd2ee783.svg"
                  alt="Visa"
                  boxSize="50px"
                  mx="2"
                />
                <Image
                  src="https://www.anthropologie.com/static/v3/images/american-express-d1f00c36ef5c0d39793f98f685b4c130.svg"
                  alt="American Express"
                  boxSize="50px"
                  mx="2"
                />
                <Image
                  src="https://www.anthropologie.com/static/v3/images/discover-85248a7a74c3ffd34011d6e3bacae886.svg"
                  alt="Discover"
                  boxSize="50px"
                  mx="2"
                />
                <Image
                  src="https://www.anthropologie.com/static/v3/images/jcb-366a23ec5606ddc0773d2a522713d487.svg"
                  alt="JCB"
                  boxSize="50px"
                  mx="2"
                />
                <Image
                  src="https://www.anthropologie.com/static/v3/images/diners-club-3bfd7869205a25218c3dc5b56b008380.svg"
                  alt="Diners Club"
                  boxSize="50px"
                  mx="2"
                />
                <Image
                  src="https://www.anthropologie.com/static/v3/images/maestro-d8ba8fd50606b932d7baf4665404da59.svg"
                  alt="Maestro"
                  boxSize="50px"
                  mx="2"
                />
              </Flex>

              <FormControl
                id="cardNumber"
                mt="4"
                isInvalid={!isValidCardNumber}
              >
                <FormLabel>Card Number</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your card number"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                />
              </FormControl>
              <FormControl
                id="expiryDate"
                mt="4"
                isInvalid={!isValidExpiryDate}
              >
                <FormLabel>Expiry Date (MM/YY)</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter the expiry date"
                  value={expiryDate}
                  onChange={handleExpiryDateChange}
                />
              </FormControl>
              <FormControl id="cvv" mt="4" isInvalid={!isValidCvv}>
                <FormLabel>CVV</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter the CVV"
                  value={cvv}
                  onChange={handleCvvChange}
                />
              </FormControl>
              <Button colorScheme="green" mt="4" onClick={handlePayButtonClick}>
                Pay
              </Button>
            </Box>
          )}
          {showOtpForm && (
            <Box mt="4" bg="green.50" p="4" borderRadius="md">
              <FormControl id="otp" mt="4">
                <FormLabel>Enter the OTP sent to your phone</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter the OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </FormControl>
              <Button
                colorScheme="green"
                mt="4"
                onClick={handleOtpVerification}
              >
                Verify OTP
              </Button>
            </Box>
          )}

          <PaymentOptions />
          <PayAtHospital />
          <Button
            colorScheme="green"
            mt="4"
            onClick={() => navigate("/recept")}
          >
            View recept
          </Button>
        </Box>
        <Image src="https://www.maxhealthcare.in/img/illustration-speciality.svg" />
      </Box>
      <Box ml="20px">
        <Box position="relative">
          <Image
            width="100%"
            src="https://www.maxhealthcare.in/img/doctor-consult-illustration.svg"
          />
          <Box position="absolute" bottom={350} left={50} p={2} color="white">
            <Heading>Looking for an Expert</Heading>
            <Heading size="md">
              Medicure is home to some of the <br /> eminent doctors in the
              world.
            </Heading>
            <Button mt={5} bg="blue">
              Find An Doctor
            </Button>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-evenly"
          textAlign="center"
          gap="10px"
          padding="20px"
          mt="30px"
          bg="green.100"
        >
          <Box>
            <Image
              width="50%"
              src="https://maxlab-web.s3.ap-south-1.amazonaws.com/dist/img/Group%2074667@2x.png"
            />
            <Heading as="h3" size="md" color="blue.600">
              Highly Trained Staff & Doctors
            </Heading>
          </Box>
          <Box textAlign="center">
            <Image
              width="50%"
              src="https://maxlab-web.s3.ap-south-1.amazonaws.com/dist/img/Group%2074669@2x.png"
            />
            <Heading as="h3" size="md" color="blue.600">
              Same Day Reports Over Email
            </Heading>
          </Box>
          <Box>
            <Image
              width="50%"
              src="https://maxlab-web.s3.ap-south-1.amazonaws.com/dist/img/Group%2074671@2x.png"
            />
            <Heading as="h3" size="md" color="blue.600">
              Zero Contamination QualiCare
            </Heading>
          </Box>
          <Box>
            <Image
              width="50%"
              src="https://maxlab-web.s3.ap-south-1.amazonaws.com/dist/img/Group%2074670@2x.png"
            />
            <Heading as="h3" size="md" color="blue.600">
              Home Sample Collection
            </Heading>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentPage;
