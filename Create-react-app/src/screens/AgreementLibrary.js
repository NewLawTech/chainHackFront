import React from 'react';
import { Link } from "react-router-dom";
import { Input, Button, Center, Flex, Spacer, Box } from '@chakra-ui/react'; 
import { ContractCard } from '../components/ContractCard';


export const AgreementLibrary = () => {
  return (
    <Flex>
      <Spacer />
      <Box p="4">
      <ContractCard />
      </Box>
      <Spacer />
      <Box p="4">
        <ContractCard />
      </Box>
      <Spacer />
      <Box p="4">
        <ContractCard />
      </Box>
      <Spacer />
    </Flex>
  )
}

