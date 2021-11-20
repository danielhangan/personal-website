
import Head from "next/head"
import Link from "next/link"
import { Main } from "../components/Main"
import { Naviagation } from "../components/Navigation"
import { Container } from "../components/Container"
import { Date } from "../components/Date"
import readingTime from 'reading-time'
import { 
  Heading,
  Text,
  VStack,
  Image,
  Flex,
  Box,
  Avatar
} from '@chakra-ui/react'


export default function HeaderLayout({
    children,
    home,
    name,
    job_title,
    company,
    description,
    frontMatter
} : {
    children: React.ReactNode,
    home? : boolean,
    name: string,
    job_title: string,
    company: string,
    description: string,
    frontMatter?: any
}) {
    return (
    <>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
            name="description"
            content="Daniel Hangan | Python Engineer | Blockchain Enthusiast"
            />
            {/* <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
                siteTitle
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            /> */}
            <meta name="og:title" content={name + "|" + job_title} />
            <meta name="twitter:card" content="summary_large_image" />
            {home? (
                <title>Daniel Hangan</title>
            ) : (
                <title>{frontMatter.title}</title>
            )}
        </Head>


        <Main>
        {home? (
            <Flex
                direction={{base:'column-reverse', md:'row'}}
                alignItems="flex-start"
                justifyContent="space-between"
                w={{base: '100%', md:'3xl'}}
            >
                <Box w={{base: 'auto', md:'75%'}} p="3">
                <VStack alignItems="flex-start" fontSize="md">
                    <Heading size="xl">{name}</Heading>
                    <Text color="brand.gray600">
                    {job_title} at <b>{company}</b>
                    </Text>
                    <Text color="brand.gray600">
                    {description}
                    </Text> 
                </VStack>
                </Box>
                <Image
                    ml={4}
                    w={{base: 'auto', md:'25%'}}
                    src="/images/profile.jpeg" 
                    alt="Daniel Hangan" 
                    boxSize={[100,100,150]}
                    borderRadius="full"
                />
            </Flex>
            ) : (
            <>
            <Flex
                direction={{base:'column-reverse', md:'row'}}
                alignItems="flex-start"
                justifyContent="space-between"
                w={{base: 'auto', md:'3xl'}}
            >
                <VStack 
                    w={{base:'auto', md:'3xl'}}
                    alignItems="flex-start"
                    pl={[0,3]}
                    spacing={6}
                >
                    <Box>
                        <Heading size="xl" mb={4}>{frontMatter.title}</Heading>
                    </Box>

                <Flex
                    justifyContent="space-between"
                    align={['initial', 'center']}
                    direction={['column', 'row']}
                    w="auto"
                    mb={4}
                >
                    <Flex align="center">
                        <Avatar
                            size="xs"
                            name={name}
                            src="/images/profile.jpeg"
                            mr={2}
                        />
                        <Text fontSize="sm" color="brand.gray600">
                            {name + " / "}
                            <Date dateString={frontMatter.date}/>
                        </Text>

                    </Flex>
                <Text fontSize="sm" textAlign={["start", "start", "end"]} color="brand.gray600" minWidth="100px" mt={[2,0]}>
                    {readingTime(frontMatter.text).text}
                </Text>

                </Flex>
                
                </VStack>
            </Flex>
            </>
            )}
    
            {children}
        
        </Main>

        {!home && (
        <div>
            <Link href="/">
            <a>← Back to home</a>
            </Link>
        </div>
        )}
    </>
    )
}

HeaderLayout.defaultProps = {
  name: 'Daniel Hangan',
  job_title: 'Python Engineer',
  company: 'Radicle Insights',
  description: 'Helping companies build better data apps. Passioante about Blockchain, AI, IoT and Robotics.'
}