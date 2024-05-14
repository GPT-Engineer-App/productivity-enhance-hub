import { Box, Flex, Link, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("blue.800", "black");
  const color = useColorModeValue("white", "orange");

  return (
    <Box bg={bg} px={4}>
      <Box color={color} fontWeight="bold">Productivity App</Box>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Button onClick={toggleColorMode} ml={4}>
          {colorMode === "light" ? <FaMoon /> : <FaSun />}
        </Button>
        <Flex alignItems={"center"}>
          <NavLink to="/" exact>
            <Button variant="link" color={color} mr={4}>Home</Button>
          </NavLink>
          <NavLink to="/dashboard" exact>
            <Button variant="link" color={color}>Dashboard</Button>
          </NavLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;