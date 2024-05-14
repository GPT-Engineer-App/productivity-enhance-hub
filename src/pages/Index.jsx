import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { FaTasks, FaUser, FaBook, FaChartLine, FaRobot } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={4} bg="background" color="text">
      <Heading as="h1" size="xl" mb={4} color="blue.800">Welcome to the Productivity App</Heading>
      <Text fontSize="lg" mb={6}>Enhance your productivity and support your personal development goals with our comprehensive tools and resources.</Text>
      <Flex direction="column" align="center" justify="center" p={10}>
        <Button leftIcon={<FaTasks />} colorScheme="blue" variant="solid" mb={4}>Task Management</Button>
        <Button leftIcon={<FaUser />} colorScheme="blue" variant="solid" mb={4}>Personal Development</Button>
        <Button leftIcon={<FaBook />} colorScheme="blue" variant="solid" mb={4}>Educational Management</Button>
        <Button leftIcon={<FaChartLine />} colorScheme="blue" variant="solid" mb={4}>Assessment Tests</Button>
        <Button leftIcon={<FaRobot />} colorScheme="blue" variant="solid">Support Chatbot</Button>
      </Flex>
    </Box>
  );
};

export default Index;