import { Box, Flex, Link, Button, useColorMode, useColorModeValue, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("blue.800", "black");
  const color = useColorModeValue("white", "orange");

  return (
    <Box bg={bg} px={4} display="flex" flexDirection="column" height="100vh">
      <Box color={color} fontWeight="bold" mb={4}>Productivity App</Box>
      <Button onClick={toggleColorMode} mb={4}>
        {colorMode === "light" ? <FaMoon /> : <FaSun />}
      </Button>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaBars />} colorScheme="blue">
          Menu
        </MenuButton>
        <MenuList>
          <NavLink to="/" exact>
            <MenuItem>Home</MenuItem>
          </NavLink>
          <NavLink to="/about" exact>
            <MenuItem>About</MenuItem>
          </NavLink>
          <NavLink to="/dashboard" exact>
            <MenuItem>Dashboard</MenuItem>
          </NavLink>
          <NavLink to="/start-your-day" exact>
            <MenuItem>Start Your Day</MenuItem>
          </NavLink>
          <NavLink to="/contact" exact>
            <MenuItem>Contact</MenuItem>
          </NavLink>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Navbar;