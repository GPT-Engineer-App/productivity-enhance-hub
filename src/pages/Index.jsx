import { Box, Heading, Text, Button, Flex, useColorModeValue } from "@chakra-ui/react";
import { FaTasks, FaUser, FaBook, FaChartLine, FaRobot, FaSun } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Index = () => {
  const headingColor = useColorModeValue("blue.800", "orange");
  const textColor = useColorModeValue("black", "white");

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4} color={headingColor}>Welcome to the Productivity App</Heading>
      <Text fontSize="lg" mb={6} color={textColor}>Enhance your productivity and support your personal development goals with our comprehensive tools and resources.</Text>
      <Flex direction="column" align="center" justify="center" p={10}>
        <Button leftIcon={<FaTasks />} colorScheme="blue" variant="solid" mb={4}>Task Management</Button>
        <Button leftIcon={<FaUser />} colorScheme="blue" variant="solid" mb={4}>Personal Development</Button>
        <Button leftIcon={<FaBook />} colorScheme="blue" variant="solid" mb={4}>Educational Management</Button>
        <Button leftIcon={<FaChartLine />} colorScheme="blue" variant="solid" mb={4}>Assessment Tests</Button>
        <Button leftIcon={<FaRobot />} colorScheme="blue" variant="solid" mb={4}>Support Chatbot</Button>
        <NavLink to="/start-your-day" exact>
          <Button leftIcon={<FaSun />} colorScheme="blue" variant="solid">Start Your Day</Button>
        </NavLink>
      </Flex>
    </Box>
  );
};

export default Index;