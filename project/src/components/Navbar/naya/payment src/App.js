import PaymentPage from "./components/PaymentPage";
import "./styles.css";

import { ChakraProvider } from "@chakra-ui/react";

export default function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <PaymentPage />
      </ChakraProvider>
    </div>
  );
}
