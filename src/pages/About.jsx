import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

const About = () => {
  const headingColor = useColorModeValue("blue.800", "orange");
  const textColor = useColorModeValue("black", "white");

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4} color={headingColor}>About Us</Heading>
      <Text fontSize="lg" mb={6} color={textColor}>
        Our Productivity App is designed to enhance productivity and support personal development goals for corporate employees. 
        It features an educational management module, assessment tests, and a support chatbot.
      </Text>
    </Box>
  );
};

export default About;