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
} from '@chakra-ui/react'

import { ProjectModal } from '../../components/ProjectModal'
import { GetStaticProps } from 'next'
import { getAllProjectsData } from '../../../lib/projects'



export default function Projects ( { allprojects } : { allprojects: any }) {

    const { colorMode } = useColorMode()
    const bgColor = { light: 'white', dark: 'brand.gray600' }


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

                {allprojects.map((project, index) => (
                    <GridItem colSpan={[2,1]} key={project.slug}>
                        <Box 
                            bg={bgColor[colorMode]}
                            borderWidth="1px"
                            borderRadius="lg"
                            align="center"
                            p={4}
                            h="100%" 
                        >

                            <Heading size="md" pb={2}>{project.title}</Heading>
                            <Box display="flex" alignItems="center" minH="200px">
                                <Image src={project.images.url} alt="hello" borderRadius="md" />
                            </Box>

                            <VStack m={0} minH="180px" alignItems="flex-start" justify="space-between">
                            <Box pt={4} mb={0} w="100">
                                <Box display="flex">
                                    <Badge borderRadius="10px" fontSize="10px" p={1.5} colorScheme="teal">
                                            {project.badge}
                                    </Badge>
                                </Box>
                                <Box mt={2} align="left" minH={12}>
                                    <Text>{project.description}</Text>
                                </Box>
                            </Box>

                            {/* MODAL COMPONENT */}
                            <Box w="100%" h="100%">
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


export const getStaticProps: GetStaticProps = async () => {
    const allprojects = await getAllProjectsData()

    return {
        props: { 
            allprojects: allprojects.projects,
        },
        revalidate: 60 * 60
    }
}
