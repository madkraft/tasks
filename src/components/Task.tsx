import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

export const Task = () => {
  const week = 30;
  const days = Array.from(Array(week).keys());

  return (
    <Flex alignItems="center" marginY="1">
      <Box mr="1">Test 1</Box>
      <Box width="100%">
        <SimpleGrid columns={week} spacingX="1">
          {days.map((day) => (
            <Box bg="tomato" height="40px" />
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
