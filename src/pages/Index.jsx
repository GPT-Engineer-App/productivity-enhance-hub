import { Box, Heading, Text, Button, SimpleGrid, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import StartYourDay from "./StartYourDay";
import { FaTasks, FaRobot, FaSun } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const headingColor = useColorModeValue("blue.800", "orange");
  const textColor = useColorModeValue("black", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4} color={headingColor}>Welcome to the Productivity App</Heading>
      <Text fontSize="lg" mb={6} color={textColor}>Enhance your productivity and support your personal development goals with our comprehensive tools and resources.</Text>
      <SimpleGrid columns={[1, null, 2]} spacing="40px">
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} w="100%" h="200px">
          <Heading as="h2" size="md" mb={2}>Start Your Day</Heading>
          <Text mb={4}>Take a quiz to assess your stress level and get suggestions for a productive day.</Text>
          <Button leftIcon={<FaSun />} colorScheme="blue" variant="solid" onClick={onOpen}>Start Your Day</Button>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} w="100%" h="200px">
          <Heading as="h2" size="md" mb={2}>Task Management</Heading>
          <Text mb={4}>Manage your tasks efficiently and stay organized.</Text>
          <Button leftIcon={<FaTasks />} colorScheme="blue" variant="solid">Task Management</Button>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} w="100%" h="200px">
          <Heading as="h2" size="md" mb={2}>Support Chatbot</Heading>
          <Text mb={4}>Get support and assistance from our chatbot.</Text>
          <Button leftIcon={<FaRobot />} colorScheme="blue" variant="solid">Support Chatbot</Button>
        </Box>
      </SimpleGrid>
      <StartYourDay isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </Box>
  );
};

export default Index;