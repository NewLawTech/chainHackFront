import React from 'react';
import { Flex, Spacer, Box, Button, Stack } from '@chakra-ui/react'; 
import { ContractCard } from '../components/ContractCard';

import coups from '../images/coups2.jpg';
import tony_lawyer from '../images/tony_lawyer.png';
import ing_lawyer from '../images/ing_lawyer.png';

import car from '../images/skoda.png';
import tonybar from '../images/tonybar.png';
import ing from '../images/ing.png'

export const AgreementLibrary = () => {
  return (
    <Flex>
      <Spacer />
      <Box p="4">
        <ContractCard 
        img={car} 
        title={"Car Sales agreement"}
        subtitle={"Buy or sell your car"}
        summary={"An easy to customize car sale contract. This sample bill of sale template is designed to make your NFT transation more legally binding."} 
        author={"Ale Couperus"}
        authorImg={coups}
        draftDate={"November 14, 2021"}
        deed={"https://github.com/NewLawTech/chainHackFront/blob/main/react-app/src/deeds/CarDeed.js"}
        />
      </Box>
      <Spacer />
      <Box p="4">
        <ContractCard img={tonybar} 
        title={"Employment law"}
        subtitle={"Co-worker agreement"}
        summary={"A beautifully designed co-worker agreement. This is an info-graphic that make legal clauses easy to understand for everyone"} 
        author={"Tony's lawyer"}
        authorImg={tony_lawyer}
        draftDate={"November 22, 2021"} 
        preview={"https://ipfs.moralis.io:2053/ipfs/QmYEZNLsybsAoEEbjLuZJXZ1AdJG2CPFfZzmCoa334P5hZ"}
        deed={"https://github.com/NewLawTech/chainHackFront/blob/main/react-app/src/deeds/TonyDeed.js"} 
        />
      </Box>
      <Spacer />
      <Box p="4">
        <ContractCard img = {ing} 
        title={"Security Rights"}
        subtitle={"Pledge agreements"}
        summary={"It is our mission to make security rights accessible to everyone and everywhere. Arrange everything about security rights."}
        author={"ING's lawyer"}
        authorImg={ing_lawyer}
        draftDate={"October 5, 2021"}
        deed={"https://github.com/NewLawTech/chainHackFront/blob/main/react-app/src/deeds/IngDeed.js"}
        />
      </Box>
      <Spacer />
    </Flex>   
  )
}

