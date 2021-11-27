import logo from './images/newlawlogo.png';
import chaininkLogo from './images/chainlinkLogo.png'
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import { useMoralis } from "react-moralis";
import { Button, Box, Heading } from "@chakra-ui/react";
import { Container, Center } from "@chakra-ui/react";
import { User } from './User';
import { Home } from './Home';
import { NltEditor } from './components/NltEditor';
import { Auth } from './components/Auth';
import { Nav } from './components/Nav';
import { MintDeed } from './components/MintDeed';
import { AgreementLibrary } from './screens/AgreementLibrary';
import { CocData } from './components/CocData';
import { AxiosData } from './components/AxiosData';

function App() {
  const { 
    isWeb3Enabled,
    enableWeb3,
    isAuthenticated, 
    } = useMoralis();
    
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

  //  const defineNewObject = async () => {
  //   const PrivatePerson = Moralis.Object.extend("PrivatePerson");
  //   const person = new PrivatePerson();
  //   person.set('firstName', 'Ale');
  //   person.set('lastName', 'Couperus');
  //   person.set('street', 'Kalverstraat');
  //   person.set('houseNumber', '1');
  //   person.set('placeOfResidence', 'Amsterdam');

  //   await person.save();
  // }

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);


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
  
  else if (isAuthenticated)
  return (
  <Router> 
     <Box display={"block"} p={35} className="App">
      <Nav />   
      <Center>
        <Heading as="h2" size="3xl" p={10}>
          <div display={"block"} p={35} className="App">
        <img width={250} height={250} src={chaininkLogo} alt="logo" />
      </div>
        </Heading>
      </Center>
      <Switch>
      <Route path="/" exact>
        <NltEditor />
      </Route>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/mint" exact>
        <MintDeed />
      </Route>
      <Route path="/library" exact>
        <AgreementLibrary />
      </Route>
      <Route path="/fetch" exact>
        <CocData />
      </Route>
      <Route path="/axios" exact>
        <AxiosData />
      </Route>
      <Route path="/user/:id" component = { User } />
    </Switch>
    <br/> 
    <LogoutButton />
    </Box>

 
    </Router>
  );
}
  
export default App;

    
      
 


   