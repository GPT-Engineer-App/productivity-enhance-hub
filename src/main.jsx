import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const dayTheme = extendTheme({
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
    background: "#ffffff",
    text: "#000000",
  },
});

const nightTheme = extendTheme({
  colors: {
    brand: {
      900: "#ff8c00",
      800: "#ff7f00",
      700: "#ff6f00",
    },
    background: "#000000",
    text: "#ffffff",
  },
});

const [isDayMode, setIsDayMode] = useState(true);

const toggleTheme = () => {
  setIsDayMode(!isDayMode);
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={isDayMode ? dayTheme : nightTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
