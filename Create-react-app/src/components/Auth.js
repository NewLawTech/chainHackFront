import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import { Button, Center, Container, Stack, Box, Heading, Input, Alert, AlertTitle, AlertIcon, AlertDescription, CloseButton, Text } from "@chakra-ui/react";

    //SignUp component for signing user with e-mail and password to enable oldskool users to use the app
  const SignUp = () => {
    const {signup} = useMoralis()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
  
    return (
    <Stack spacing={3}>
      <Input placeholder="Email" value={email} onChange={(event) => setEmail(event.currentTarget.value)} />
      <Input placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.currentTarget.value)} />
      
      <Button 
        colorScheme="blue"
        size="lg"
        onClick={() => signup(email, password)}>
        Sign up using e-mail</Button>
      </Stack>
    );
  }
  
  const Login = () => {
    const {login} = useMoralis()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
  
    return (
    <Stack spacing={3}>
      <Input placeholder="Email" value={email} onChange={(event) => setEmail(event.currentTarget.value)} />
      <Input placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.currentTarget.value)} />
      <Button 
        colorScheme="blue"
        size="lg"
        onClick={() => login(email, password)}>
        Login using e-mail</Button>
      </Stack>
    );
  };
  
    // ----- Authenticate in Metamask---------
    const MetaMask = () => {
      const {isAuthenticating, authenticate} = useMoralis()

      return (
        
          <Center>
          <Box>
            <Button
              colorScheme="blue"
              size="lg"
              isLoading={isAuthenticating}
              onClick={() => authenticate({ signingMessage: "Hello NewLawTech" })}>
              Sign in using Metamask
            </Button>
          </Box>
        </Center>
      );
    }   

export const Auth = () => {
  const { authError } = useMoralis();

  return <Stack spacing={6}>
    {authError && (
      <Alert status="error">
      <AlertIcon />
      <Box flex="1">
        <AlertTitle>Error!</AlertTitle>
        <AlertDescription display="block">
          Ooh No, we regret to inform you that authentication has failed: {authError.message}
        </AlertDescription>
      </Box>
      <CloseButton position="absolute" right="8px" top="8px" />
    </Alert>
    )}
    <MetaMask /> 
      <Text textAlign="center">
        <em>or</em>
      </Text>
    <SignUp /> 
      <Text textAlign="center">
        <em>or</em>
      </Text>
    <Login />
    <br/>
  </Stack>
};