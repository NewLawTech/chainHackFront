import { Input, Button } from '@chakra-ui/react'; 
import { useState } from 'react';

export const MintDeed = () => {
  const [amountOfDeeds, setAmountOfDeeds] = useState(0)
  const handleInputChange = (event) => {
    const newAmount = event.target.value === '' ? '' : event.target.value
    setAmountOfDeeds(newAmount)
    console.log(amountOfDeeds)
  }

  
  const handleMintSubmit = () => {
    return mintDeeds(amountOfDeeds)
  }


  return (
    <div>
    <header className="Nlt-header">
        NewLawTech MintDeed
      </header>
      <Input 
        placeholder="Number of deeds"
        onChange={handleInputChange}>
      </Input>
      <Button
        onClick={handleMintSubmit}>
        Mint Deeds
      </Button>
    </div>
  )
}