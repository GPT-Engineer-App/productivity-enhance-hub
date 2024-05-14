import { Box, Heading, Text } from "@chakra-ui/react";

const Contact = () => (
  <Box p={4}>
    <Heading as="h1" size="xl" mb={4} color="blue.800">Contact Us</Heading>
    <Text fontSize="lg" mb={6}>
      If you have any questions or need support, please contact us at support@productivityapp.com.
    </Text>
  </Box>
);

export default Contact;