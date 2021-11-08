import { useState } from 'react';
import { Link } from "react-router-dom";
import { Input, Button, Center, Stack } from '@chakra-ui/react'; 
import { PdfDeed } from './PdfDeed';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

export const MintDeed = () => {
  const [amountOfDeeds, setAmountOfDeeds] = useState(0)
  const handleInputChange = (event) => {
    const newAmount = event.target.value === '' ? '' : event.target.value
    setAmountOfDeeds(newAmount)
    console.log(amountOfDeeds)
  }

  return (
    <div>
      <header className="Nlt-header">
        NewLawTech MintDeed
      </header>
      <Center>
      <PDFViewer
          width="850" 
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
        </Stack>
      </Center>
    </div>
  )
}