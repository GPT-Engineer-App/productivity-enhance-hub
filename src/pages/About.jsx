import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <Heading as="h1" size="xl" mb={4} color="blue.800">About Us</Heading>
    <Text fontSize="lg" mb={6}>
      Our Productivity App is designed to enhance productivity and support personal development goals for corporate employees. 
      It features an educational management module, assessment tests, and a support chatbot.
    </Text>
  </Box>
);

export default About;