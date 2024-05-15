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
        <Button leftIcon={<FaTasks />} colorScheme="blue" variant="solid" mb={4} onClick={() => navigate('/task-management')}>Task Management</Button>
        <Button leftIcon={<FaUser />} colorScheme="blue" variant="solid" mb={4} onClick={() => navigate('/personal-development')}>Personal Development</Button>
        <Button leftIcon={<FaBook />} colorScheme="blue" variant="solid" mb={4} onClick={() => navigate('/educational-management')}>Educational Management</Button>
        <Button leftIcon={<FaChartLine />} colorScheme="blue" variant="solid" mb={4} onClick={() => navigate('/assessment-tests')}>Assessment Tests</Button>
        <Button leftIcon={<FaRobot />} colorScheme="blue" variant="solid" mb={4} onClick={() => navigate('/support-chatbot')}>Support Chatbot</Button>
        <Button leftIcon={<FaSun />} colorScheme="blue" variant="solid" mb={4} onClick={() => navigate('/start-your-day')}>Start Your Day</Button>
      </Flex>
    <StartYourDay isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </Box>
  );
};

export default Index;