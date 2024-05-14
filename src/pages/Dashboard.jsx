import { Box, Heading, Text, Flex, Grid, GridItem } from "@chakra-ui/react";
import { FaTasks, FaUser, FaBook, FaChartLine, FaRobot } from "react-icons/fa";

const Dashboard = () => {
  return (
    <Box p={4} bg="background" color="text">
      <Heading as="h1" size="xl" mb={4} color="blue.800">Dashboard</Heading>
      <Text fontSize="lg" mb={6}>Access all features from the central hub.</Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem w="100%" h="10" bg="blue.500" color="white" p={4} borderRadius="md">
          <Flex align="center">
            <FaTasks size="24px" />
            <Text ml={2}>Task Management</Text>
          </Flex>
        </GridItem>
        <GridItem w="100%" h="10" bg="blue.500" color="white" p={4} borderRadius="md">
          <Flex align="center">
            <FaUser size="24px" />
            <Text ml={2}>Personal Development</Text>
          </Flex>
        </GridItem>
        <GridItem w="100%" h="10" bg="blue.500" color="white" p={4} borderRadius="md">
          <Flex align="center">
            <FaBook size="24px" />
            <Text ml={2}>Educational Management</Text>
          </Flex>
        </GridItem>
        <GridItem w="100%" h="10" bg="blue.500" color="white" p={4} borderRadius="md">
          <Flex align="center">
            <FaChartLine size="24px" />
            <Text ml={2}>Assessment Tests</Text>
          </Flex>
        </GridItem>
        <GridItem w="100%" h="10" bg="blue.500" color="white" p={4} borderRadius="md">
          <Flex align="center">
            <FaRobot size="24px" />
            <Text ml={2}>Support Chatbot</Text>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Dashboard;