import { 
  Heading,
  Text,
  VStack,
  Image,
  Flex,
  Box,
  Spacer,
  Center
} from '@chakra-ui/react'



export const Hero = ({ 
  name,
  job_title,
  company,
  description
 }: { 
  name: string, 
  job_title: string,
  company: string,
  description: string
  }) => {

    return (
      <Flex
        direction={{base:'column-reverse', md:'row'}}
        alignItems="flex-start"
        // px={[4,0,0]}
      >
        <Box w={{base: 'auto', md:'75%'}} p="4">
          <VStack alignItems="flex-start" fontSize="md">
            <Heading size="xl">{name}</Heading>
            <Text>
              {job_title} at {company}
            </Text> 
            <Text>
              {description}
            </Text> 
          </VStack>
        </Box>
        <Spacer />
        <Center w={{base: 'auto', md:'25%'}} p="4">
          <Image 
            src="/images/profile.jpeg" 
            alt="Daniel Hangan" 
            boxSize={[100,100,150]}
            borderRadius="full"
            />
        </Center>
      </Flex>
  )
}

Hero.defaultProps = {
  name: 'Daniel Hangan',
  job_title: 'Python Engineer',
  company: 'Radicle Insights',
  description: 'Helping companies build better data apps. Passioante about Blockchain, AI, IoT and Robotics.'
}
