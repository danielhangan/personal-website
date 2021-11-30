
import Head from "next/head"
import Link from "next/link"
import { Main } from "../components/Main"
import ContainerLayout from "./Container"
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


export default function PostLayout({
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
            <title>{frontMatter.title}</title>
        </Head>


    <ContainerLayout>

        <Main>
            <Flex
                direction={{base:'column-reverse', md:'row'}}
                alignItems="flex-start"
                justifyContent="space-between"
                w={{base: '100%', md:'3xl'}}
                pl={3}
            >
                <VStack 
                    w={{base:'100%', md:'3xl'}}
                    alignItems="flex-start"
                    spacing={6}
                >
                    <Box>
                        <Heading size="xl" mb={4}>{frontMatter.title}</Heading>
                    </Box>

                <Flex
                    justifyContent="space-between"
                    align={['initial', 'center']}
                    direction={['column', 'row']}
                    w="100%"
                    mb={4}
                >
                    <Flex alignItems="flex-start">
                        <Avatar
                            size="xs"
                            name={name}
                            src="/images/profile.jpeg"
                            mr={2}
                        />
                        <Text fontSize="sm">
                            {name + " / "}
                            <Date dateString={frontMatter.date}/>
                        </Text>

                    </Flex>

                    <Text fontSize="sm" textAlign={["start", "start", "end"]} minWidth="100px" mt={[2,0]}>
                        {readingTime(frontMatter.text).text}
                    </Text>


                </Flex>
                
                </VStack>
            </Flex>
            {children}
        </Main>
    </ContainerLayout>
    </>
    )
}

PostLayout.defaultProps = {
  name: 'Daniel Hangan',
  job_title: 'Python Engineer',
  company: 'Radicle Insights',
  description: 'Helping companies build better data apps. Passioante about Blockchain, AI, IoT and Robotics.'
}