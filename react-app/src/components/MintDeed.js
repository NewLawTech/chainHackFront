import { useState } from 'react';
import { Link } from "react-router-dom";
import { Input, Button, Center, Stack, Heading, useColorModeValue } from '@chakra-ui/react'; 
import { PdfDeed } from './PdfDeed';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { TestDeed2 } from '../deeds/test_deed_2';

export const MintDeed = () => {
  const [amountOfDeeds, setAmountOfDeeds] = useState(0)
  const handleInputChange = (event) => {
    const newAmount = event.target.value === '' ? '' : event.target.value
    setAmountOfDeeds(newAmount)
    console.log(amountOfDeeds)
  }

  return (
    <div>
       <Heading className="Nlt-header"
      as="h3" size="lg"
      bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        NewLawTech MintDeed
      </Heading>
      <Center>
      <PDFViewer
          width="800" 
          height="600"
          showToolbar = {false}
          >
        <PdfDeed />
      </PDFViewer>
      </Center>
      <br/>
      <Input 
        placeholder="Number of deeds"
        width="150"
        onChange={handleInputChange}>
      </Input>
      <br/>
      <br/>
      <Center>
        <Stack spacing={4} direction="row" align="center">
          <Button>
            <Link to="/">Editor</Link>   
          </Button>
          <Button>
            Mint Deeds
          </Button>
          <Button>
          <PDFDownloadLink document={<TestDeed2 />} fileName="NLTest2.pdf">
            {({ blob, url, loading, error }) =>
              loading ? 'Loading deed...' : 'Download pdf'
            }
          </PDFDownloadLink>
          </Button>
        </Stack>
      </Center>
    </div>
  )
}