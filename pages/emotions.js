import { useState } from "react";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";

const emotions = [
  "Happy",
  "Sad",
  "Angry",
  "Scared",
  "Calm",
  "Disappointed",
  "Frustrated",
  "Anxious",
];
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export default function () {
  const [emotion, setEmotion] = useState(emotions[0]);
  return (
    <>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={4}
      >
        <Heading>{emotion}!</Heading>
        <Text>Show this emotion in the game!</Text>
        <Button
          onClick={() =>
            setEmotion((s) => {
              let newEmotion = emotions[random(0, 8)];
              while (newEmotion === s) {
                newEmotion = emotions[random(0, 8)];
              }
              return newEmotion;
            })
          }
        >
          Reroll
        </Button>
      </Flex>
    </>
  );
}
