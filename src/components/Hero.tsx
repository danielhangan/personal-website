import { 
  Heading,
  Text,
  VStack,
  Image,
  Flex,
  Box,
} from '@chakra-ui/react'


export const Hero = ({ 
  name,
  job_title,
  company,
  description,
  languages
 }: { 
  name: string, 
  job_title: string,
  company: string,
  description: string,
  languages: string
  }) => {

    return (
      <Flex
        direction={{base:'column-reverse', md:'row'}}
        alignItems="flex-start"
        justifyContent="space-between"
        w={{base: '100%', md:'3xl'}}
      >
        <Box w={{base: '100%', md:'75%'}} p="3">
          <VStack alignItems="flex-start" fontSize="md">
            <Heading size="xl">{name}</Heading>
              <Text>
              {job_title} at <b>{company}</b>
            </Text>
            <Text>
              {description}
            </Text>
          </VStack>
        </Box>
        <Image
          ml={4}
          w={{base: '100%', md:'25%'}}
          src="/images/profile.jpeg" 
          alt="Daniel Hangan" 
          boxSize={[100,100,150]}
          borderRadius="full"
          />
      </Flex>
  )
}

Hero.defaultProps = {
  name: 'Daniel Hangan',
  job_title: 'Software Engineer',
  company: 'Radicle Insights',
  description: 'Helping companies build better data apps. Passioante about Blockchain, AI, IoT and Robotics.',
  languages: "Python, TypeScript"
}
