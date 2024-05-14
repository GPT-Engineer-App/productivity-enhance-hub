import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
            <Button variant="link" color="white">Contact</Button>
          </NavLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;