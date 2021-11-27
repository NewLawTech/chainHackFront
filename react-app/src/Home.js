import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import { Box, Center } from '@chakra-ui/react'; 
import { FileUpload } from './components/FileUpload';

export const Home = () => {
      return (
          <Box>
        <header className="Nlt-header">
        Upload to IPFS
        <FileUpload />
        </header>
        </Box>
      );
  }

