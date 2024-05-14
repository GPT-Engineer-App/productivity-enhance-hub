import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

const Contact = () => {
  const headingColor = useColorModeValue("blue.800", "blue.800");
  const textColor = useColorModeValue("black", "blue.800");

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4} color={headingColor}>Contact Us</Heading>
      <Text fontSize="lg" mb={6} color={textColor}>
        If you have any questions or need support, please contact us at support@productivityapp.com.
      </Text>
    </Box>
  );
};

export default Contact;