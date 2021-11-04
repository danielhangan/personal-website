import { 
  Heading,
  Text,
  VStack,
  SimpleGrid,
  GridItem,
  Image
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
  }) => (
  <SimpleGrid columns={3} columnGap={3} rowGap={6} w="full">
    <GridItem colSpan={2}>
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="xl">{name}</Heading>
        <Text>
          {job_title} at {company}
        </Text> 
        <Text>
          {description}
        </Text>
      </VStack>
    </GridItem>
    <GridItem colSpan={1} align="right">
      <Image 
        src="/images/profile.jpeg" 
        alt="Daniel Hangan" 
        boxSize={150}
        borderRadius="full"
        />

    </GridItem>
  </SimpleGrid> 
)

Hero.defaultProps = {
  name: 'Daniel Hangan',
  job_title: 'Python Engineer',
  company: 'Radicle Insights',
  description: 'Helping companies build better data apps. Passioante about Blockchain, AI, IoT and Robotics.'
}
