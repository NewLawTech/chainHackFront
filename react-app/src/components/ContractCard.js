import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { PDFViewer } from '@react-pdf/renderer';
import { TestDeed2 } from '../deeds/test_deed_2';
import { PdfDeed } from './PdfDeed';

export const ContractCard = (props) => {

  //get template in pdf for preview
const getPdfDeed = () => {
  return (
  <Center>
    <PDFViewer
        width="800" 
        height="600"
        showToolbar = {false}
        >
      <PdfDeed />
    </PDFViewer>
  </Center>
  )
}
  
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'144px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={props.img}
            layout={'fill'}
          />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            {props.title}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'1xl'}
            fontFamily={'body'}>
            {props.subtitle}
          </Heading>
          <Text color={'gray.500'}>
            {props.summary}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar 
            size="lg" 
            name={props.author}
            src={props.authorImg}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{props.author}</Text>
            <Text color={'gray.500'}>{props.draftDate} <br/> 2 min read</Text>
          </Stack>
        </Stack>
        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}
            onClick={() => getPdfDeed({TestDeed2})}
            >
            Preview
          </Button>
           <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            <Link href={props.deed} isExternal>
              Template<ExternalLinkIcon mx="2px" />
            </Link>
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}