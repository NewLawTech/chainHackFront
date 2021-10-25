import logo from "./newlawlogo.png";
import React, { useState, useEffect } from "react";
import "./App.css";
import { useMoralis } from "react-moralis";
import { Button, Form, Box, Heading, Input, Alert, AlertTitle, AlertIcon, AlertDescription, CloseButton } from "@chakra-ui/react";
import { Container, Center } from "@chakra-ui/react";

const LogoutButton = () => {
  const { logout, isAuthenticating } = useMoralis();

  return (
    <Button
      display={"block"}
      colorScheme="red"
      variant="solid"
      isLoading={isAuthenticating}
      onClick={() => logout()}
      disabled={isAuthenticating}>
      Logout
    </Button>
  );
};

// ---------- APP -------------
function App() {
  const {
    authenticate,
    isWeb3Enabled,
    isAuthenticated,
    isAuthenticating,
    authError,
    user,
    enableWeb3,
    Moralis,
  } = useMoralis();

  // async function authWalletConnect() {
  //   const user = authenticate({
  //     provider: "walletconnect",
  //     chainId: 42,
  //     // mobileLinks: [
  //     //   "metamask",
  //     //   "trust",
  //     //   "rainbow",
  //     //   "argent",
  //     //   "imtoken",
  //     //   "pillar",
  //     // ],
  //     signingMessage: "Welcome!",
  //   });
  //   console.log(user);
  // }

  // useEffect(() => {
  //   if (!isWeb3Enabled && isAuthenticated) {
  //     enableWeb3({ provider: "walletconnect", chainId: 42 });
  //     console.log("web3 activated");
  //   }
  // }, [isWeb3Enabled, isAuthenticated, enableWeb3]);

  // document.addEventListener("visibilitychange", () => {
  //   if (document.visibilityState === "hidden") {
  //     window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  //   }
  // });

  //SignUp component for signing user with e-mail and password to enable oldskool users to use the app
const SignUp = () => {
  const {signup} = useMoralis()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return <Center>
  <Box>
    <Input placeholder="Email" value={email} onChange={(event) => setEmail(event.currentTarget.value)} />
    <Input placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.currentTarget.value)} />
    <br />
    <br />
    <Center>
    <Button 
      colorScheme="green"
      size="lg"
      onClick={() => signup(email, password)}>
      Sign up using e-mail</Button>
      </Center>
    
    </Box>
  </Center>
}

  // ----- Authenticate in Metamask---------
  if (!isAuthenticated && !user) {
    console.log(user);
    return (
       <Container maxW="container.lg">
       <br />
        <Center>
          <img width={500} height={500} src={logo} alt="logo" />
        </Center>
        <br />
        <Center>
          <Heading as="h2" size="2xl" p={10}>
            NewLawTech Chainlink Hackathon
          </Heading>
        </Center>
        <Center>
          <Button
            colorScheme="green"
            size="lg"
            isLoading={isAuthenticating}
            onClick={() => authenticate({ signingMessage: "Hello NewLawTech" })}>
            Sign in using Metamask
          </Button>
        </Center>
        {/* <br />
        <Center>
          <Button
            colorScheme="green"
            size="lg"
            onClick={() => authWalletConnect()}>
            Sign in using Wallet Connect
          </Button>
        </Center> */}
        <br />
        <SignUp />
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
      </Container>
    );
  }

  return (
    <Box display={"block"} p={35} className="App">
      <LogoutButton />
      <Center>
        <img width={500} height={500} src={logo} alt="logo" />
      </Center>

      <Center>
        <Heading as="h2" size="3xl" p={10}>
          Welcome to Chainlink!
        </Heading>
      </Center>
    </Box>
  );
}

export default App;