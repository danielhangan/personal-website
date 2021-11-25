import { Container } from '../../components/Container'
import { Main } from '../../components/Main'
import { Naviagation } from '../../components/Navigation'
import { Footer } from '../../components/Footer'
import {
    VStack,
    Heading,
    Box,
    Flex,
    Modal,
    Text,
    Image,
    Badge,
    Link as ChakraLink,
} from '@chakra-ui/react'


export default function Projects () {

    const ProjectExample = [
    {
        title: "project example",
        slug: "project-example",
        stack: "Python,Django,React,Material UI,Docker,GCP,Cloud Functions",
        description: "Second-hand mechanical keyboard marketplace using smart contracts",
        imageUrl: "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80",
        date: "22/11/2021",
        badge: "open-source"
    },
    {
        title: "project example",
        slug: "project-example",
        stack: "Python,Django,React,Material UI,Docker,GCP,Cloud Functions",
        description: "Second-hand mechanical keyboard marketplace using smart contracts",
        imageUrl: "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80",
        date: "22/11/2021",
        badge: "Machine Learning"
    }
]

    return (
        <Container>
            <Naviagation />
            <Main>
                <VStack
                    w={{base: '100%', md:'3xl'}}
                    alignItems="flex-start"
                    pl={3}
                    spacing={12}
                >
                <Box w="100%">
                    <Heading size="xl" mb={4}>Projects</Heading>
                    <Text color="brand.gray600">
                        I am passionate about Full-Stack Development and Data Science with Python and JavaScript.
                    </Text>
                </Box>

                <Box w="100%">
                    <Heading size="xl" mb={4}>All Projects</Heading>
                <Flex w="100%" justifyContent="space-between">

                {ProjectExample.map((project, index) => (
                        <Box 
                            w="360px" 
                            h="100%"
                            borderWidth="1px"
                            borderRadius="lg"
                            maxW="sm"
                            align="center"
                            p={4}
                        >
                            <Image src={project.imageUrl} alt="hello" boxSize="95%" borderRadius="md"/>

                            <Box py={4} ml={2}>
                                <Box display="flex">
                                    <Badge borderRadius="10px" fontSize="10px" p={1.5} colorScheme="teal">
                                            {project.badge}
                                    </Badge>
                                </Box>
                            <Box display="flex" mt={2} align="left">
                                    <Text>{project.description}</Text>
                                </Box>
                            </Box>
                        </Box> 
                ))}

                </Flex>
                </Box>
                </VStack>
            </Main>
        </Container>
    )
}