import React from 'react';
import { Box, Text, Center, Heading } from '@chakra-ui/react';

export default function HomePage() {
  return (
    <Center h="100vh" bgGradient="linear(to-r, teal.500, green.500)">
      <Box textAlign="center" color="white">
        <Heading mb={4}>Welcome to Your Phone Book</Heading>
        <Text fontSize="xl">
          Keep your contacts organized and easily accessible.
        </Text>
        <Text fontSize="md" mt={10}>
      The creator of this book never imagined that at 47, they would conclude their React learning journey.
    </Text>
      </Box>
    </Center>
  );
}
