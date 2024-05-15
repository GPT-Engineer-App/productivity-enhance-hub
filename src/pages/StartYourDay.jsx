import { Box, Heading, Text, RadioGroup, Radio, Stack, Button, useColorModeValue, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { useState, Fragment } from "react";

const StartYourDay = ({ isOpen, onClose, onOpen }) => {
  const headingColor = useColorModeValue("blue.800", "orange");
  const textColor = useColorModeValue("black", "white");

  const [physicalCondition, setPhysicalCondition] = useState("");
  const [emotionalState, setEmotionalState] = useState("");
  const [mentalState, setMentalState] = useState("");
  const [externalFactors, setExternalFactors] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    const stressAnswers = [physicalCondition, emotionalState, mentalState, externalFactors];
    const stressScore = stressAnswers.reduce((acc, answer) => acc + parseInt(answer), 0);

    if (stressScore >= 8 && stressScore <= 12) {
      setResult("Low Stress");
    } else if (stressScore >= 13 && stressScore <= 20) {
      setResult("Moderate Stress");
    } else if (stressScore >= 21 && stressScore <= 28) {
      setResult("High Stress");
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
            
            <Box mb={4}>
              <Text mb={2} color={textColor}>How do you feel physically?</Text>
              <RadioGroup onChange={setPhysicalCondition} value={physicalCondition}>
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
              <RadioGroup onChange={setEmotionalState} value={emotionalState}>
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
              <RadioGroup onChange={setMentalState} value={mentalState}>
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
              <RadioGroup onChange={setExternalFactors} value={externalFactors}>
                <Stack direction="column">
                  <Radio value="1">Comfortable and suitable</Radio>
                  <Radio value="2">Slightly uncomfortable</Radio>
                  <Radio value="3">Moderately uncomfortable</Radio>
                  <Radio value="4">Very uncomfortable and stressful</Radio>
                </Stack>
              </RadioGroup>
            </Box>

            {result && (
              <Box mt={6}>
                <Heading as="h2" size="lg" mb={4} color={headingColor}>Assessment Result: {result}</Heading>
                <Text fontSize="lg" color={textColor}>
                  {result === "Low Stress" && "You're starting your day in a great state! Keep this momentum by scheduling your most challenging tasks first. Remember to take short breaks to maintain your positive energy."}
                  {result === "Moderate Stress" && "It seems like there's some stress on your mind. Take a moment to practice deep breathing. Inhale deeply, hold for a few seconds, and exhale slowly. Ask yourself: 'What is one thing I can let go of today?' Write it down and plan how you will handle it."}
                  {result === "High Stress" && "It's okay to feel stressed. Let's tackle this together. Find a quiet place to do a quick stretching exercise. As you stretch, think about: 'What is one achievable goal I can focus on right now?' Breaking down tasks into smaller, manageable steps can help reduce overwhelm."}
                  {result === "High Attention" && "Your focus is sharp today! Utilize this by diving into tasks that require deep concentration. Consider setting a timer for 25 minutes of focused work followed by a 5-minute break to keep your momentum going."}
                  {result === "Moderate Attention" && "Your attention could use a little boost. Start with a brief mental exercise: close your eyes and take three deep breaths. Then, write down the top three tasks you need to accomplish today. Focus on completing one task at a time."}
                  {result === "Low Attention" && "Distractions are natural, but let's refocus. Clear your workspace of unnecessary items. Ask yourself: 'What is my priority for the next hour?' Set a small, achievable goal and commit to working on it for just 10 minutes. Often, starting is the hardest part."}
                  {result === "High Energy" && "Your energy levels are high—perfect for tackling big projects. Start with the most demanding tasks. Remember to stay hydrated and take short breaks to sustain your energy throughout the day."}
                  {result === "Moderate Energy" && "You have a decent energy level today. To keep it up, take a moment to stand up and stretch. Grab a healthy snack to boost your energy. Think about: 'What is one thing I can do to feel more energized?' Small changes can make a big difference."}
                  {result === "Low Energy" && "Low energy can be challenging, but we can improve it. Begin with a 5-minute walk, even if it's just around your office. Drink a glass of water and consider a light, healthy snack. Ask yourself: 'What small task can I accomplish right now to build momentum?' Starting small can help regain your energy."}
                  {result === "Yes" && "Great to hear you slept well! Use this restfulness to your advantage by tackling the most important tasks first. Your clear mind will help you achieve more."}
                  {result === "No" && "A restless night can affect your day, but we can counter this. Begin with gentle stretches or a short meditation to wake up your body and mind. Throughout the day, take brief breaks to rest your eyes and mind. Drink plenty of water to stay hydrated and alert."}
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