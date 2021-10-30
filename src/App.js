import logo from "./newlawlogo.png";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { useMoralis } from "react-moralis";
import { Button, Box, Heading } from "@chakra-ui/react";
import { Container, Center } from "@chakra-ui/react";
import { Home } from './Home';
import { NltEditor } from './NltEditor';
import { Auth } from './Auth';
import { Nav } from './Header';

function App() {
  const { isAuthenticated, isAuthUndefined, user } = useMoralis();
  
  const LogoutButton = () => {
    const { logout, isAuthenticating } = useMoralis();
    return (
    <Button
      display={"block"}
      colorScheme="blue"
      variant="solid"
      isLoading={isAuthenticating}
      onClick={() => logout()}
      disabled={isAuthenticating}>
      Logout
    </Button> 
    );
  }

  if (!isAuthenticated) {
    return (
      <Container>
      <div display={"block"} p={35} className="App">
        <img width={500} height={500} src={logo} alt="logo" />
      </div>
      <Center>
        <Heading size="lg" fontSize="30px">
          NewLawTech Chainlink Hackathon
        </Heading>
        </Center>
        <br/>
        <Auth />
      </Container>
      );
    }

  return (
  <Router> 
     <Box display={"block"} p={35} className="App">
      <Nav />     
      <Center>
        <Heading as="h2" size="3xl" p={10}>
          Welcome to Chainlink!
        </Heading>
      </Center>
      <Switch>
      <Route path="/draft" exact>
        <Home />
      </Route>
      <Route path="/" exact>
        <NltEditor />
      </Route>
    </Switch>
    <br/> 
    <LogoutButton />
    </Box>

 
    </Router>
  );
}
  
export default App;

    
      
 


   