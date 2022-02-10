
import Head from "next/head"
import Link from "next/link"
import { Main } from "../components/Main"
import ContainerLayout from "./Container"
import { Date } from "../components/Date"
import { 
  Heading,
  Text,
  VStack,
  Image,
  Flex,
  Box,
  Avatar,
  Link as ChakraLink
} from '@chakra-ui/react'

import { ArrowLeft } from "emotion-icons/bootstrap"

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
            <meta name="og:title" content={name + "|" + job_title} />
            <meta name="twitter:card" content="summary_large_image" />
            <title>{frontMatter.slug}</title>
        </Head>


    <ContainerLayout>

        <Main>
            <Flex
                direction={{base:'column-reverse', md:'row'}}
                alignItems="flex-start"
                justifyContent="space-between"
                w={{base: '100%', md:'2xl'}}
            >
                <VStack 
                    w={{base:'100%', md:'2xl'}}
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
                        {frontMatter.readingTime.text}
                    </Text>


                </Flex>
                
                </VStack>
            </Flex>
            {children}
        <Link href="/posts" passHref>
            <ChakraLink py={4}>
                <ArrowLeft size="20px" /> All Posts
            </ChakraLink>
        </Link>
        </Main>
    </ContainerLayout>
    </>
    )
}

PostLayout.defaultProps = {
  name: 'Daniel Hangan',
  job_title: 'Python Software Engineer',
  company: 'Radicle Insights',
  description: 'Hey there. Welcome to my digital garden. By day I am probably busy building the next startup market intelligence tech @ Radicle Insights, and by night learning and contributing.'
}