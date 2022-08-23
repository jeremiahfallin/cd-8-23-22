import { useState } from "react";
import {
  Button,
  Checkbox,
  Flex,
  Heading,
  Text,
  useCheckboxGroup,
  useToast,
} from "@chakra-ui/react";

const questions = [
  {
    question:
      "Sterling is hiding under the pool table staring straight up. When you say his name he doesn’t respond.",
    answer: ["Emotional", "Survival"],
  },
  {
    question:
      "Twila is screaming and pushing over chairs. When you try to talk to her she hisses at you like a cat.",
    answer: ["Survival"],
  },
  {
    question:
      "Trystan comes into your room and asks what art activity you’re going to be doing today.",
    answer: ["Executive"],
  },
  {
    question:
      "Olivia approaches you in a quiet period and asks you to print out a recipe that you made earlier in the week.",
    answer: ["Executive"],
  },
  {
    question:
      "Alecz yells at Jack for taking a LEGO that he was going to use. When you try to talk to him he says all the staff are against him and don’t want him to have fun.",
    answer: ["Emotional"],
  },
  {
    question:
      "When you ask Gabe to turn his Switch off until Tech Time he starts crying and saying no one likes him or lets him do what he wants.",
    answer: ["Emotional"],
  },
];

export default function () {
  const [questionIndex, setQuestionIndex] = useState(0);
  const { value, setValue, getCheckboxProps } = useCheckboxGroup();
  const toast = useToast();

  return (
    <>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={4}
      >
        <Heading>Name the Brain State</Heading>
        <Text fontSize="lg">{questions[questionIndex].question}</Text>
        <Flex direction="column">
          <Checkbox {...getCheckboxProps({ value: "Survival" })}>
            Survival
          </Checkbox>
          <Checkbox {...getCheckboxProps({ value: "Emotional" })}>
            Emotional
          </Checkbox>
          <Checkbox {...getCheckboxProps({ value: "Executive" })}>
            Executive
          </Checkbox>
          <Button
            onClick={() => {
              let status = "success";
              for (let answer of value) {
                if (!questions[questionIndex].answer.includes(answer)) {
                  status = "error";
                }
              }
              toast({
                title: status === "success" ? "Nice!" : "Oops! Try again.",
                description:
                  status === "success" ? "You got it!" : "You can do this!",
                status: status,
                duration: 5000,
                isClosable: true,
              });
              if (status === "success" && questionIndex < 5) {
                setTimeout(() => {
                  setQuestionIndex((val) => val + 1);
                }, 5000);
              } else if (status === "success") {
                setTimeout(() => {
                  toast({
                    title: "You did it!",
                    description: "You got them all right!",
                    status: status,
                    duration: 5000,
                    isClosable: true,
                  });
                }, 5000);
              }
              setValue([]);
            }}
          >
            Submit
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
