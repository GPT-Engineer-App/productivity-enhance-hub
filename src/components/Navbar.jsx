import { Box, Flex, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isDayMode, setIsDayMode] = useState(true);

  const toggleTheme = () => {
    setIsDayMode(!isDayMode);
  };

  return (
    <Box bg="blue.800" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box color="white" fontWeight="bold">Productivity App</Box>
        <Flex alignItems={"center"}>
          <NavLink to="/" exact>
            <Button variant="link" color="white" mr={4}>Home</Button>
          </NavLink>
          <NavLink to="/about" exact>
            <Button variant="link" color="white" mr={4}>About</Button>
          </NavLink>
          <NavLink to="/dashboard" exact>
            <Button variant="link" color="white" mr={4}>Dashboard</Button>
          </NavLink>
          <NavLink to="/contact" exact>
            <Button variant="link" color="white" mr={4}>Contact</Button>
          </NavLink>
          <Button variant="link" color="white" onClick={toggleTheme}>
            {isDayMode ? "Night Mode" : "Day Mode"}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;