import logo from "./newlawlogo.png";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import { useMoralis } from "react-moralis";
import { Button, Box, Heading } from "@chakra-ui/react";
import { Container, Center } from "@chakra-ui/react";
import { Auth } from './Auth';
import { Nav } from './Header';

function App() {
  const { isAuthenticated } = useMoralis();

  if (isAuthenticated) {

    const LogoutButton = () => {
      const { logout, isAuthenticating } = useMoralis();
    
      return (
        
        <><Button
          display={"block"}
          colorScheme="red"
          variant="solid"
          isLoading={isAuthenticating}
          onClick={() => logout()}
          disabled={isAuthenticating}>
          Logout
        </Button>
        <Router>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
          </Router></>   
      );
    };

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

  return (
     <Box display={"block"} p={35} className="App">
      <Nav />
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
    
export default App;
