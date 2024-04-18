import React from "react";
import { Box, Button, Container, Heading, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaGoogle, FaMapMarkedAlt } from "react-icons/fa";

const Index = () => {
  const handleSignUp = () => {
    // Placeholder for sign-up logic
    console.log("Sign-Up with Google");
  };

  const handleLogin = () => {
    // Placeholder for login logic
    console.log("Login with Google");
  };

  const handleFreeBrowsing = () => {
    // Placeholder for free browsing logic
    console.log("Free Browsing Mode");
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8} as={Stack} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
          <Heading fontSize="xl">Welcome to Eventify!</Heading>
          <Text mt={4}>Connect and participate in events around you.</Text>
        </Box>

        <Button leftIcon={<FaGoogle />} colorScheme="red" onClick={handleSignUp}>
          Sign-Up with Google
        </Button>

        <Button leftIcon={<FaGoogle />} colorScheme="green" onClick={handleLogin}>
          Member Login
        </Button>

        <Button leftIcon={<FaMapMarkedAlt />} colorScheme="blue" onClick={handleFreeBrowsing}>
          Free Browsing
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
