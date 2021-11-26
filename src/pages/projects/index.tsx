import { Container } from '../../components/Container'
import ContainerLayout from '../../layouts/Container'
import { Main } from '../../components/Main'
import { Naviagation } from '../../components/Navigation'
import { Footer } from '../../components/Footer'
import {
    VStack,
    Heading,
    Box,
    Flex,
    Button,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalContent,
    ModalCloseButton,
    Text,
    Spacer,
    Image,
    Badge,
    GridItem,
    Grid,
    Link as ChakraLink,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/hooks'


export default function Projects () {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const ProjectExample = [
    {
        title: "project example",
        slug: "project-example",
        stack: "Python,Django,React,Material UI,Docker,GCP,Cloud Functions",
        description: "Second-hand mechanical keyboard marketplace using smart contracts",
        imageUrl: "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80",
        date: "22/11/2021",
        badge: "open-source",
        link: "https://github.com"
    },
    {
        title: "project example",
        slug: "project-example",
        stack: "Python,Django,React,Material UI,Docker,GCP,Cloud Functions",
        description: "Second-hand mechanical keyboard marketplace using smart contracts",
        imageUrl: "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80",
        date: "22/11/2021",
        badge: "Machine Learning",
        link: "https://github.com"
    },
    {
        title: "project example",
        slug: "project-example",
        stack: "Python,Django,React,Material UI,Docker,GCP,Cloud Functions",
        description: "Second-hand mechanical keyboard marketplace using smart contracts",
        imageUrl: "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80",
        date: "22/11/2021",
        badge: "open-source",
        link: "https://github.com"
    },
    {
        title: "project example",
        slug: "project-example",
        stack: "Python,Django,React,Material UI,Docker,GCP,Cloud Functions",
        description: "Second-hand mechanical keyboard marketplace using smart contracts",
        imageUrl: "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80",
        date: "22/11/2021",
        badge: "Machine Learning",
        link: "https://github.com"
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
                    <Text color="brand.gray600">
                        I am passionate about Full-Stack Development and Data Science with Python and JavaScript.
                    </Text>
                </Box>

                <Box w="100%" mb={4}>
                <Heading size="xl" mb={4}>All Projects</Heading>
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>

                {ProjectExample.map((project, index) => (
                    <GridItem colSpan={[2,1]}>
                        <Box 
                            borderWidth="1px"
                            borderRadius="lg"
                            align="center"
                            p={4}
                            bg="white"
                            >
                            <Image src={project.imageUrl} alt="hello" borderRadius="md"/>
    
                            <Spacer />
                            <Box pt={4} mb={0} alignItems="baseline">
                                <Box display="flex">
                                    <Badge borderRadius="10px" fontSize="10px" p={1.5} colorScheme="teal">
                                            {project.badge}
                                    </Badge>
                                </Box>
                            <Box display="flex" mt={2} align="left">
                                    <Text>{project.description}</Text>
                                </Box>
                            </Box>
                            <Button 
                                key={index} 
                                onClick={onOpen}
                                w="100%"
                                p={0}
                                m={0}
                                mt={2}
                                align="left"
                                >
                                     More details
                            </Button>
                        </Box> 

                        <Modal onClose={onClose} isOpen={isOpen} isCentered>
                            <ModalOverlay />
                            <ModalContent m={[4, 0, 0]}>
                                <ModalHeader>{project.title}</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Box>
                                        <Image src={project.imageUrl} alt={project.slug} borderRadius="md" />
                                        <Box flexDirection="row" my={2}>
                                            {project.stack.split(",").map((technology) => (
                                                    <Badge 
                                                        m={1}
                                                        ml={0}
                                                        p={1.5}
                                                        fontSize="10px"
                                                        borderRadius="10px"
                                                        colorScheme="teal"
                                                        fontWeight="semibold"
                                                        letterSpacing="wide"
                                                    >{technology}</Badge>
                                                )                                      
                                            )}
                                        </Box>
                                        <Text mb={2}>
                                            {project.description}
                                        </Text>

                                        <Box>
                                            <Text>Links</Text>
                                            <Flex direction="row" w="100%">
                                                <ChakraLink>Github</ChakraLink>
                                                {/* TODO: ADD ICONS */}
                                                {/* <FontAwesome icon="fa-brands fa-github" /> */}
                                            </Flex>
                                        </Box>
                                    </Box>
                                </ModalBody>
                                <ModalFooter>
                                    <Button onClick={onClose}>Close</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </GridItem>
                ))}

                </Grid>
                </Box>
                </VStack>
            </Main>
        </ContainerLayout>
    )
}