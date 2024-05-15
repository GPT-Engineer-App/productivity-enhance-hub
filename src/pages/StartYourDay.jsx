```jsx
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
  const [recommendations, setRecommendations] = useState("");

  const handleSubmit = () => {
    // Calculate Stress Level Score
    const stressScore = Object.values(stressLevel).reduce((acc, val) => acc + parseInt(val), 0);
    let stressResult = "";
    if (stressScore >= 4 && stressScore <= 8) {
      stressResult = "Low Stress";
    } else if (stressScore >= 9 && stressScore <= 12) {
      stressResult = "Moderate Stress";
    } else if (stressScore >= 13 && stressScore <= 16) {
      stressResult = "High Stress";
    }

    // Calculate Attention Level Score
    const attentionScore = Object.values(attentionLevel).reduce((acc, val) => acc + parseInt(val), 0);
    let attentionResult = "";
    if (attentionScore >= 4 && attentionScore <= 8) {
      attentionResult = "High Attention";
    } else if (attentionScore >= 9 && attentionScore <= 12) {
      attentionResult = "Moderate Attention";
    } else if (attentionScore >= 13 && attentionScore <= 16) {
      attentionResult = "Low Attention";
    }

    // Calculate Energy Level Score
    const energyScore = Object.values(energyLevel).reduce((acc, val) => acc + parseInt(val), 0);
    let energyResult = "";
    if (energyScore >= 4 && energyScore <= 8) {
      energyResult = "High Energy";
    } else if (energyScore >= 9 && energyScore <= 12) {
      energyResult = "Moderate Energy";
    } else if (energyScore >= 13 && energyScore <= 16) {
      energyResult = "Low Energy";
    }

    // Calculate Sleep Quality Result
    const sleepResult = sleepQuality === "Yes" ? "Yes" : "No";

    // Set the result
    setResult({
      stress: stressResult,
      attention: attentionResult,
      energy: energyResult,
      sleep: sleepResult
    });

    // Generate recommendations based on the results
    let recommendationsText = "";

    // Stress Level Recommendations
    if (stressScore >= 4 && stressScore <= 8) {
      recommendationsText += "You're starting your day in a great state! Keep this momentum by scheduling your most challenging tasks first. Remember to take short breaks to maintain your positive energy.\n";
      if (attentionScore >= 13 && attentionScore <= 16) {
        recommendationsText += "Your low stress is great, but if you find your attention wavering, try breaking your tasks into smaller chunks and focus on one at a time.\n";
      }
      if (energyScore >= 13 && energyScore <= 16) {
        recommendationsText += "Although your stress is low, if your energy levels are not as high, take brief, active breaks to stay energized.\n";
      }
    } else if (stressScore >= 9 && stressScore <= 12) {
      recommendationsText += "It seems like there's some stress on your mind. Take a moment to practice deep breathing. Inhale deeply, hold for a few seconds, and exhale slowly. Ask yourself: 'What is one thing I can let go of today?' Write it down and plan how you will handle it.\n";
      if (attentionScore >= 13 && attentionScore <= 16) {
        recommendationsText += "With moderate stress, focusing might be hard. Write down a clear to-do list and prioritize tasks that need immediate attention.\n";
      }
      if (energyScore >= 13 && energyScore <= 16) {
        recommendationsText += "Stress combined with low energy can be tough. Ensure you're staying hydrated and take short, restorative breaks to maintain your energy.\n";
      }
    } else if (stressScore >= 13 && stressScore <= 16) {
      recommendationsText += "It's okay to feel stressed. Let's tackle this together. Find a quiet place to do a quick stretching exercise. As you stretch, think about: 'What is one achievable goal I can focus on right now?' Breaking down tasks into smaller, manageable steps can help reduce overwhelm.\n";
      if (attentionScore >= 13 && attentionScore <= 16) {
        recommendationsText += "High stress can scatter your focus. Practice mindfulness by setting small, clear goals and celebrating each small win.\n";
      }
      if (energyScore >= 13 && energyScore <= 16) {
        recommendationsText += "High stress paired with low energy needs careful management. Take a few minutes to relax and recharge with deep breathing or a brief walk.\n";
      }
    }

    // Attention Level Recommendations
    if (attentionScore >= 4 && attentionScore <= 8) {
      recommendationsText += "Your focus is sharp today! Utilize this by diving into tasks that require deep concentration. Consider setting a timer for 25 minutes of focused work followed by a 5-minute break to keep your momentum going.\n";
      if (stressScore >= 13 && stressScore <= 16) {
        recommendationsText += "High attention is great, but if you're feeling stressed, ensure you're not overworking. Balance your focus with relaxing breaks.\n";
      }
      if (energyScore >= 13 && energyScore <= 16) {
        recommendationsText += "Use your high attention to tackle important tasks first, but also schedule short breaks to maintain your energy levels.\n";
      }
    } else if (attentionScore >= 9 && attentionScore <= 12) {
      recommendationsText += "Your attention could use a little boost. Start with a brief mental exercise: close your eyes and take three deep breaths. Then, write down the top three tasks you need to accomplish today. Focus on completing one task at a time.\n";
      if (stressScore >= 13 && stressScore <= 16) {
        recommendationsText += "Moderate attention with high stress means you should prioritize calming activities. Break tasks into smaller steps and take mindful breaks.\n";
      }
      if (energyScore >= 13 && energyScore <= 16) {
        recommendationsText += "Moderate attention and low energy can slow you down. Incorporate light physical activities to boost both attention and energy.\n";
      }
    } else if (attentionScore >= 13 && attentionScore <= 16) {
      recommendationsText += "Distractions are natural, but let's refocus. Clear your workspace of unnecessary items. Ask yourself: 'What is my priority for the next hour?' Set a small, achievable goal and commit to working on it for just 10 minutes. Often, starting is the hardest part.\n";
      if (stressScore >= 13 && stressScore <= 16) {
        recommendationsText += "Low attention and high stress need immediate action. Find a quiet place, clear your mind with a short meditation, and start with simple tasks.\n";
      }
      if (energyScore >= 13 && energyScore <= 16) {
        recommendationsText += "Boost low attention and energy with a quick walk or a brief stretching session. Refocus by setting clear, short-term goals.\n";
      }
    }

    // Energy Level Recommendations
    if (energyScore >= 4 && energyScore <= 8) {
      recommendationsText += "Your energy levels are high—perfect for tackling big projects. Start with the most demanding tasks. Remember to stay hydrated and take short breaks to sustain your energy throughout the day.\n";
      if (stressScore >= 13 && stressScore <= 16) {
        recommendationsText += "Even with high energy, high stress can be draining. Balance your energy with stress-relief activities like deep breathing or short walks.\n";
      }
      if (attentionScore >= 13 && attentionScore <= 16) {
        recommendationsText += "High energy and low attention? Use your energy to tackle physical tasks and set clear, focused time slots for detailed work.\n";
      }
    } else if (energyScore >= 9 && energyScore <= 12) {
      recommendationsText += "You have a decent energy level today. To keep it up, take a moment to stand up and stretch. Grab a healthy snack to boost your energy. Think about: 'What is one thing I can do to feel more energized?' Small changes can make a big difference.\n";
      if (stressScore >= 13 && stressScore <= 16) {
        recommendationsText += "Moderate energy with high stress calls for careful management. Use your energy for essential tasks and incorporate stress-relief techniques.\n";
      }
      if (attentionScore >= 13 && attentionScore <= 16) {
        recommendationsText += "Moderate energy but low attention? Use structured breaks to maintain both energy and focus.\n";
      }
    } else if (energyScore >= 13 && energyScore <= 16) {
      recommendationsText += "Low energy can be challenging, but we can improve it. Begin with a 5-minute walk, even if it's just around your office. Drink a glass of water and consider a light, healthy snack. Ask yourself: 'What small task can I accomplish right now to build momentum?' Starting small can help regain your energy.\n";
      if (stressScore >= 13 && stressScore <= 16) {
        recommendationsText += "Low energy and high stress need immediate care. Focus on calming activities and start with the smallest, most manageable tasks.\n";
      }
      if (attentionScore >= 13 && attentionScore <= 16) {
        recommendationsText += "Both low energy and low attention require a structured approach. Take short, frequent breaks and set clear, achievable goals.\n";
      }
    }

    setRecommendations(recommendationsText);
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

              <