import React from 'react'
import {
    Flex,
    Heading,
    VStack,
    Box,
    Divider,
    Badge,
    Text,
    Link as ChakraLink
} from '@chakra-ui/react'

import Link from 'next/link'

import { ArrowRight } from "@emotion-icons/bootstrap";
import { SmallCloseIcon } from '@chakra-ui/icons';

export const ProjectsMain = ( {projects} : { projects: any} ) => {
    return (
            <Flex 
                direction="column"
                w={{base: "100%", md: "3xl"}}
                pl={3}
                spacing={12}
            >
                <Heading>Featured Projects</Heading>
                <VStack
                    my={4}
                    spacing={2}
                    alignItems="flex-start"
                >
                    {/* add a line after each project */}
                    {/* on hover link cursor */}
                {projects.map((project, index) => (
                   <Link href="/projects" key={project.slug}>
                    <Box w="100%">
                    <ChakraLink w="100%" my={2} display="flex" flexDirection="row">
                        <Box mr={2}>
                            <Text fontWeight="normal" fontSize="18px">
                                    0{index+1}
                                </Text>
                            </Box> 

                            <Flex w="100%" direction={["column", "row"]} justify="space-between">
                            <Box>
                                <Text fontWeight="bold" fontSize="18px">
                                    {project.title}
                                    </Text>
                                    
                                </Box> 

                            <Box>
                                <Badge colorScheme="teal" p={1.5} fontSize="10px" fontWeight="bold" borderRadius="10px">
                                    {project.badge}
                                    </Badge>
                                </Box> 
                            </Flex>
                    </ChakraLink>
                    <Divider />
                    </Box>
                   </Link> 
                ))}
                </VStack>
                    <Link href="/projects">
                        <Flex alignItems="center">
                                <ChakraLink>
                                    Explore more projects <ArrowRight size="18px" />
                                </ChakraLink>
                        </Flex>
                    </Link>
            </Flex>
    )
}
