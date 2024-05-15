import { Box, Heading, Text, Button, Flex, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import StartYourDay from "./StartYourDay";
import { FaTasks, FaUser, FaBook, FaChartLine, FaRobot, FaSun } from "react-icons/fa";
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
      <Flex direction="column" align="center" justify="center" p={10}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} mb={4} w="100%">
          <Heading as="h2" size="md" mb={2}>Start Your Day</Heading>
          <Text mb={4}>Take a quiz to assess your stress level and get suggestions for a productive day.</Text>
          <Button leftIcon={<FaSun />} colorScheme="blue" variant="solid" onClick={onOpen}>Start Your Day</Button>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} mb={4} w="100%">
          <Heading as="h2" size="md" mb={2}>Task Management</Heading>
          <Text mb={4}>Manage your tasks efficiently and stay organized.</Text>
          <Button leftIcon={<FaTasks />} colorScheme="blue" variant="solid">Task Management</Button>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} mb={4} w="100%">
          <Heading as="h2" size="md" mb={2}>Personal Development</Heading>
          <Text mb={4}>Focus on your personal growth and development.</Text>
          <Button leftIcon={<FaUser />} colorScheme="blue" variant="solid">Personal Development</Button>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} mb={4} w="100%">
          <Heading as="h2" size="md" mb={2}>Educational Management</Heading>
          <Text mb={4}>Access educational resources and manage your learning.</Text>
          <Button leftIcon={<FaBook />} colorScheme="blue" variant="solid">Educational Management</Button>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} mb={4} w="100%">
          <Heading as="h2" size="md" mb={2}>Assessment Tests</Heading>
          <Text mb={4}>Take assessment tests to evaluate your knowledge and skills.</Text>
          <Button leftIcon={<FaChartLine />} colorScheme="blue" variant="solid">Assessment Tests</Button>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} mb={4} w="100%">
          <Heading as="h2" size="md" mb={2}>Support Chatbot</Heading>
          <Text mb={4}>Get support and assistance from our chatbot.</Text>
          <Button leftIcon={<FaRobot />} colorScheme="blue" variant="solid">Support Chatbot</Button>
        </Box>
      </Flex>
    <StartYourDay isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </Box>
  );
};

export default Index;