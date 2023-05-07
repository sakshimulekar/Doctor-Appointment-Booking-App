import { useState } from "react";
import { Box, Flex, Text, Image, Center } from "@chakra-ui/react";

const PaymentOption = ({ name, logo, isSelected, onClick }) => {
  return (
    <Box>
      <Flex
        align="center"
        p={3}
        m={4}
        borderRadius="12"
        cursor="pointer"
        bg="#61876e "
        color="black"
        // bg={isSelected ? "#38a169 : "white"}
        _hover={{ bg: "green.600" }}
        onClick={onClick}
      >
        <Image src={logo} alt={name} w="70px" />
        <Box ml={4}>
          <Text fontSize="l" fontWeight="bolder">
            {name}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

const PaymentOptions = () => {
  const [selectedOption, setSelectedOption] = useState("Paytm");

  const paymentOptions = [
    {
      name: "Paytm",
      logo: "https://w7.pngwing.com/pngs/110/280/png-transparent-paytm-standalone-hd-logo-thumbnail.png",
    },
    {
      name: "PhonePe",
      logo: "https://w7.pngwing.com/pngs/345/591/png-transparent-phonepe-hd-logo-thumbnail.png",
    },
    {
      name: "Google Pay",
      logo: "https://w7.pngwing.com/pngs/850/508/png-transparent-google-pay-send-online-wallet-mobile-payment-mobile-pay-text-trademark-payment-thumbnail.png",
    },
    {
      name: "Net Banking",
      logo: "https://w7.pngwing.com/pngs/424/342/png-transparent-netbank-hd-logo-thumbnail.png",
    },
    {
      name: "Voucher",
      logo: "https://w7.pngwing.com/pngs/110/651/png-transparent-coupon-discounts-and-allowances-computer-icons-voucher-service-coupons-miscellaneous-text-retail-thumbnail.png",
    },
  ];

  const handleOptionClick = (optionName) => {
    setSelectedOption(optionName);
  };

  return (
    <Box>
      {paymentOptions.map((option) => (
        <PaymentOption
          key={option.name}
          name={option.name}
          logo={option.logo}
          isSelected={selectedOption === option.name}
          onClick={() => handleOptionClick(option.name)}
        />
      ))}
    </Box>
  );
};

export default PaymentOptions;
