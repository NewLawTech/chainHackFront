import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import { Box, Center, Heading, useColorModeValue } from '@chakra-ui/react'; 
import { FileUpload } from './components/FileUpload';

export const Home = () => {
      return (
        <Box>
          <Heading className="Nlt-header"
            as="h3" size="lg"
            bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            Upload to IPFS
          </Heading>
           <FileUpload />
        </Box>
      );
  }

