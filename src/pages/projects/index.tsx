import ContainerLayout from '../../layouts/Container'
import { Main } from '../../components/Main'
import {
    VStack,
    Heading,
    Box,
    Text,
    Image,
    Badge,
    GridItem,
    Grid,
    useColorMode,
    Link as ChakraLink,
} from '@chakra-ui/react'

import { ProjectModal } from '../../components/ProjectModal'



export default function Projects () {

    const { colorMode } = useColorMode()
    const bgColor = { light: 'white', dark: 'brand.gray600' }


    const ProjectExample = [
    {
        title: "Open Source Project",
        slug: "open-source",
        stack: "Python,Django,React,Material UI,Docker,GCP,Cloud Functions",
        short_description: "short description 1, awesome open source project, developed with ebay",
        description: "Open source project for ebay",
        imageUrl: "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80",
        date: "22/11/2021",
        badge: "open-source",
        link: "https://ebay.com"
    },
    {
        title: "Machine Learning",
        slug: "machine-learning",
        stack: "Python,pandas,numpy,jupyter notebook,scipy,NLP",
        short_description: "short description 2",
        description: "Mega Machine Learning algortihm written for Amazon. Awesome experience.",
        imageUrl: "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80",
        date: "22/11/2021",
        badge: "Machine Learning",
        link: "https://amazon.com"
    },
    {
        title: "Full Stack project",
        slug: "full-stack",
        stack: "Python,Django,FastAPI,NextJS,Chakra UI",
        short_description: "short description 3",
        description: "Full-Stack project for google. I called it Google Cloud Platform.",
        imageUrl: "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80",
        date: "22/11/2021",
        badge: "Full-Stack",
        link: "https://google.com"
    },
    {
        title: "Blockchain",
        slug: "blockchain",
        stack: "TypeScript,Nodejs,Solidity,Solana,Ethereum",
        short_description: "short description 4",
        description: "Built my own blockchain for finance. Making cheap transactions back and forth to Moldova.",
        imageUrl: "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80",
        date: "02/01/2021",
        badge: "Blockchain",
        link: "https://danielhangan.com"
    }
]

    return (
        <ContainerLayout>
            <Main>
                <VStack
                    w={{base: '100%', md:'3xl'}}
                    alignItems="flex-start"
                    pl={3}
                    spacing={12}
                >
                <Box w="100%">
                    <Heading size="xl" mb={4}>Projects</Heading>
                    <Text>
                        I am passionate about Full-Stack Development and Data Science with Python and JavaScript.
                    </Text>
                </Box>

                <Box w="100%" mb={4}>
                <Heading size="xl" mb={4}>All Projects</Heading>
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>

                {ProjectExample.map((project, index) => (
                    <GridItem colSpan={[2,1]} key={project.slug}>
                        <Box 
                            bg={bgColor[colorMode]}
                            borderWidth="1px"
                            borderRadius="lg"
                            align="center"
                            p={4}
                        >

                            <Heading size="md" pb={2}>{project.title}</Heading>

                            <Image src={project.imageUrl} alt="hello" borderRadius="md"/>

                            <VStack m={0} alignItems="flex-start">
                            <Box pt={4} mb={0} w="100">
                                <Box display="flex">
                                    <Badge borderRadius="10px" fontSize="10px" p={1.5} colorScheme="teal">
                                            {project.badge}
                                    </Badge>
                                </Box>
                                <Box mt={2} align="left" minH={12}>
                                    <Text>{project.short_description}</Text>
                                </Box>
                            </Box>

                            {/* MODAL COMPONENT */}
                            <Box w="100%">
                                <ProjectModal key={project.slug} project={project} />
                            </Box>
                            
                            </VStack>
                        </Box>
                            
                    </GridItem>
                ))}


                </Grid>
                </Box>
                </VStack>
            </Main>
        </ContainerLayout>
    )
}