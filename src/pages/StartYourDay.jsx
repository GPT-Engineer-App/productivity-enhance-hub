import { Box, Heading, Text, RadioGroup, Radio, Stack, Button, useColorModeValue, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, SimpleGrid } from "@chakra-ui/react";
import { useState, Fragment } from "react";

const StartYourDay = ({ isOpen, onClose, onOpen }) => {
  const headingColor = useColorModeValue("blue.800", "orange");
  const textColor = useColorModeValue("black", "white");

  const [stressLevel, setStressLevel] = useState({
    physical: "",
    emotional: "",
    mental: "",
    workEnvironment: ""
  });

  const [attentionLevel, setAttentionLevel] = useState({
    focus: "",
    productivity: "",
    mindClarity: "",
    motivation: ""
  });

  const [energyLevel, setEnergyLevel] = useState({
    physicalEnergy: "",
    currentFeeling: "",
    dailyTasksEnergy: "",
    overallEnergy: ""
  });

  const [sleepQuality, setSleepQuality] = useState("");

  const [result, setResult] = useState("");

  const handleSubmit = () => {
    // Logic to calculate the result based on the answers
    // This is a placeholder logic, you can update it as needed
    const stressCount = Object.values(stressLevel).filter(val => val === "3" || val === "4").length;
    const attentionCount = Object.values(attentionLevel).filter(val => val === "3" || val === "4").length;
    const energyCount = Object.values(energyLevel).filter(val => val === "3" || val === "4").length;
    const sleepCount = sleepQuality === "No" ? 1 : 0;

    if (stressCount + attentionCount + energyCount + sleepCount >= 8) {
      setResult("High Stress");
    } else if (stressCount + attentionCount + energyCount + sleepCount >= 4) {
      setResult("Medium Stress");
    } else {
      setResult("Low Stress");
    }
  };

  return (
    <Fragment>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Start Your Day</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="lg" mb={6} color={textColor}>Take this quiz to assess your stress level and get suggestions for a productive day.</Text>
            
            <SimpleGrid columns={[1, null, 2]} spacing="40px">
              <Box>
                <Heading as="h3" size="md" mb={4} color={headingColor}>Stress Level</Heading>
                <Box mb={4}>
                  <Text mb={2} color={textColor}>How do you feel physically?</Text>
                  <RadioGroup onChange={(val) => setStressLevel(prev => ({ ...prev, physical: val }))} value={stressLevel.physical}>
                    <Stack direction="column">
                      <Radio value="1">Relaxed and energetic</Radio>
                      <Radio value="2">Slightly tense</Radio>
                      <Radio value="3">Moderately tense</Radio>
                      <Radio value="4">Very tense and stressed</Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
                <Box mb={4}>
                  <Text mb={2} color={textColor}>How do you feel emotionally?</Text>
                  <RadioGroup onChange={(val) => setStressLevel(prev => ({ ...prev, emotional: val }))} value={stressLevel.emotional}>
                    <Stack direction="column">
                      <Radio value="1">Happy and calm</Radio>
                      <Radio value="2">Slightly anxious</Radio>
                      <Radio value="3">Moderately anxious</Radio>
                      <Radio value="4">Very anxious and uneasy</Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
                <Box mb={4}>
                  <Text mb={2} color={textColor}>How do you feel mentally?</Text>
                  <RadioGroup onChange={(val) => setStressLevel(prev => ({ ...prev, mental: val }))} value={stressLevel.mental}>
                    <Stack direction="column">
                      <Radio value="1">Focused and clear</Radio>
                      <Radio value="2">Slightly scattered</Radio>
                      <Radio value="3">Moderately scattered</Radio>
                      <Radio value="4">Mentally overwhelmed</Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
                <Box mb={4}>
                  <Text mb={2} color={textColor}>How do you feel about your work environment?</Text>
                  <RadioGroup onChange={(val) => setStressLevel(prev => ({ ...prev, workEnvironment: val }))} value={stressLevel.workEnvironment}>
                    <Stack direction="column">
                      <Radio value="1">Comfortable and suitable</Radio>
                      <Radio value="2">Slightly uncomfortable</Radio>
                      <Radio value="3">Moderately uncomfortable</Radio>
                      <Radio value="4">Very uncomfortable and stressful</Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
              </Box>

              <Box>
                <Heading as="h3" size="md" mb={4} color={headingColor}>Attention Level</Heading>
                <Box mb={4}>
                  <Text mb={2} color={textColor}>How focused do you feel on your work right now?</Text>
                  <RadioGroup onChange={(val) => setAttentionLevel(prev => ({ ...prev, focus: val }))} value={attentionLevel.focus}>
                    <Stack direction="column">
                      <Radio value="1">Completely focused</Radio>
                      <Radio value="2">Slightly distracted</Radio>
                      <Radio value="3">Moderately distracted</Radio>
                      <Radio value="4">Very distracted</Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
                <Box mb={4}>
                  <Text mb={2} color={textColor}>How productive do you feel in completing tasks?</Text>
                  <RadioGroup onChange={(val) => setAttentionLevel(prev => ({ ...prev, productivity: val }))} value={attentionLevel.productivity}>
                    <Stack direction="column">
                      <Radio value="1">Highly productive</Radio>
                      <Radio value="2">Slightly productive</Radio>
                      <Radio value="3">Moderately productive</Radio>
                      <Radio value="4">Not productive at all</Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
                <Box mb={4}>
                  <Text mb={2} color={textColor}>How clear is your mind?</Text>
                  <RadioGroup onChange={(val) => setAttentionLevel(prev => ({ ...prev, mindClarity: val }))} value={attentionLevel.mindClarity}>
                    <Stack direction="column">
                      <Radio value="1">Very clear</Radio>
                      <Radio value="2">Slightly foggy</Radio>
                      <Radio value="3">Moderately foggy</Radio>
                      <Radio value="4">Very foggy and confused</Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
                <Box mb={4}>
                  <Text mb={2} color={textColor}>How motivated are you to start your tasks?</Text>
                  <RadioGroup onChange={(val) => setAttentionLevel(prev => ({ ...prev, motivation: val }))} value={attentionLevel.motivation}>
                    <Stack direction="column">
                      <Radio value="1">Very motivated</Radio>
                      <Radio value="2">Slightly motivated</Radio>
                      <Radio value="3">Moderately motivated</Radio>
                      <Radio value="4">Not motivated at all</Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
              </Box>

              <Box>
                <Heading as="h3" size="md" mb={4} color={headingColor}>Energy Level</Heading>
                <Box mb={4}>
                  <Text mb={2} color={textColor}>How is your physical energy?</Text>
                  <RadioGroup onChange={(val) => setEnergyLevel(prev => ({ ...prev, physicalEnergy: val }))} value={energyLevel.physicalEnergy}>
                    <Stack direction="column">
                      <Radio value="1">Very energetic</Radio>
                      <Radio value="2">Slightly tired</Radio>
                      <Radio value="3">Moderately tired</Radio>
                      <Radio value="4">Very tired and exhausted</Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
                <Box mb={4}>
                  <Text mb={2} color={textColor}>How do you feel right now?</Text>
                  <RadioGroup onChange={(val) => setEnergyLevel(prev => ({ ...prev, currentFeeling: val }))} value={energyLevel.currentFeeling}>
                    <Stack direction="column">
                      <Radio value="1">Alert and awake</Radio>
                      <Radio value="2">Slightly sleepy</Radio>
                      <Radio value="3">Moderately sleepy</Radio>
                      <Radio value="4">Very sleepy and lethargic</Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
                <Box mb={4}>
                  <Text mb={2} color={textColor}>How is your energy for daily tasks?</Text>
                  <RadioGroup onChange={(val) => setEnergyLevel(prev => ({ ...prev, dailyTasksEnergy: val }))} value={energyLevel.dailyTasksEnergy}>
                    <Stack direction="column">
                      <Radio value="1">Very high</Radio>
                      <Radio value="2">Slightly high</Radio>
                      <Radio value="3">Moderate</Radio>
                      <Radio value="4">Very low</Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
                <Box mb={4}>
                  <Text mb={2} color={textColor}>How is your overall energy?</Text>
                  <RadioGroup onChange={(val) => setEnergyLevel(prev => ({ ...prev, overallEnergy: val }))} value={energyLevel.overallEnergy}>
                    <Stack direction="column">
                      <Radio value="1">Very high</Radio>
                      <Radio value="2">Slightly high</Radio>
                      <Radio value="3">Moderate</Radio>
                      <Radio value="4">Very low</Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
              </Box>

              <Box>
                <Heading as="h3" size="md" mb={4} color={headingColor}>Sleep Quality</Heading>
                <Box mb={4}>
                  <Text mb={2} color={textColor}>Did you sleep well last night?</Text>
                  <RadioGroup onChange={setSleepQuality} value={sleepQuality}>
                    <Stack direction="column">
                      <Radio value="Yes">Yes</Radio>
                      <Radio value="No">No</Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
              </Box>
            </SimpleGrid>

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