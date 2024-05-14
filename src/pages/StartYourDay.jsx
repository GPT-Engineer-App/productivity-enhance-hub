import { Box, Heading, Text, RadioGroup, Radio, Stack, Button, useColorModeValue, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import { useState, Fragment } from "react";

const StartYourDay = () => {
  const headingColor = useColorModeValue("blue.800", "orange");
  const textColor = useColorModeValue("black", "white");

  const [physicalCondition, setPhysicalCondition] = useState("");
  const [emotionalState, setEmotionalState] = useState("");
  const [mentalState, setMentalState] = useState("");
  const [externalFactors, setExternalFactors] = useState("");
  const [result, setResult] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = () => {
    const answers = [physicalCondition, emotionalState, mentalState, externalFactors];
    const counts = answers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {});

    if (counts["1"] >= 2 && (counts["2"] <= 2 || counts["1"] >= 2)) {
      setResult("Low Stress");
    } else if (counts["2"] >= 2 && (counts["3"] < 2 || counts["2"] >= 2)) {
      setResult("Medium Stress");
    } else if (counts["3"] >= 2) {
      setResult("High Stress");
    } else {
      setResult("Medium Stress");
    }
  };

  return (
    <Fragment>
      <Button colorScheme="blue" onClick={onOpen}>Start Your Day</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Start Your Day</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="lg" mb={6} color={textColor}>Take this quiz to assess your stress level and get suggestions for a productive day.</Text>
            
            <Box mb={4}>
              <Text mb={2} color={textColor}>How's Your Physical Condition?</Text>
              <RadioGroup onChange={setPhysicalCondition} value={physicalCondition}>
                <Stack direction="column">
                  <Radio value="1">I feel energetic and vigorous.</Radio>
                  <Radio value="2">I'm slightly tired or fatigued than usual.</Radio>
                  <Radio value="3">I feel very tired or exhausted.</Radio>
                </Stack>
              </RadioGroup>
            </Box>

            <Box mb={4}>
              <Text mb={2} color={textColor}>How's Your Emotional State?</Text>
              <RadioGroup onChange={setEmotionalState} value={emotionalState}>
                <Stack direction="column">
                  <Radio value="1">I'm generally calm or happy.</Radio>
                  <Radio value="2">I'm a bit anxious or restless.</Radio>
                  <Radio value="3">I feel very anxious or sad.</Radio>
                </Stack>
              </RadioGroup>
            </Box>

            <Box mb={4}>
              <Text mb={2} color={textColor}>How's Your Mental State?</Text>
              <RadioGroup onChange={setMentalState} value={mentalState}>
                <Stack direction="column">
                  <Radio value="1">My mind is clear and focused.</Radio>
                  <Radio value="2">I'm somewhat scattered or indecisive.</Radio>
                  <Radio value="3">I feel mentally under a lot of pressure or confused.</Radio>
                </Stack>
              </RadioGroup>
            </Box>

            <Box mb={4}>
              <Text mb={2} color={textColor}>External Factors: What Awaits You Today?</Text>
              <RadioGroup onChange={setExternalFactors} value={externalFactors}>
                <Stack direction="column">
                  <Radio value="1">I expect a normal workday.</Radio>
                  <Radio value="2">It will be a busy day, but manageable.</Radio>
                  <Radio value="3">It's a day filled with important meetings or pressures.</Radio>
                </Stack>
              </RadioGroup>
            </Box>

            {result && (
              <Box mt={6}>
                <Heading as="h2" size="lg" mb={4} color={headingColor}>Stress Assessment Result: {result}</Heading>
                <Text fontSize="lg" color={textColor}>
                  {result === "Low Stress" && "You are in a good state to have a productive day. Keep up the good work!"}
                  {result === "Medium Stress" && "You might face some challenges today. Take short breaks and stay focused."}
                  {result === "High Stress" && "Today might be tough. Prioritize your tasks and don't hesitate to ask for help if needed."}
                </Text>
                <Button colorScheme="teal" mt={4}>Get Suggestions</Button>
              </Box>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>Submit</Button>
            <Button variant="ghost" onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default StartYourDay;