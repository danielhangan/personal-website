import React from 'react'

import {
    Heading,
    Box,
    Text,
    Flex,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalFooter,
    ModalBody,
    Link as ChakraLink,
    Badge,
    Button
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/hooks'
import { Github } from '@emotion-icons/fa-brands'



export const ProjectModal = ({project} : {project : any}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box as="section">
        <Button 
            onClick={onOpen}
            _hover={{ bg: 'brand.gray300'}}
            w="100%"
            p={0}
            m={0}
            mt={2}
            bg="brand.gray100"
            color="brand.gray600"
            >
                More details {project.title}
        </Button>
        {/* MODAL SECTION */}
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent m={[4, 0, 0]} pb={2}>
                <ModalHeader pb={0} textAlign="center">{project.title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box>
                        <Image src={project.imageUrl} alt={project.slug} borderRadius="md" />
    
                        {/* TECHNOLOGIES */}
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
    
                        {/* DESCRIPTION */}
                        <Text mb={2}>
                            {/* TODO: convert markup to Chakra UI */}
                            {project.description}
                        </Text>
    
                        {/* PROJECT LINK */}
                        <Box>
                            <Flex direction="row" w="100%">
                                <ChakraLink href={project.link} isExternal>
                                    <Github size="25px" />
                                </ChakraLink>
                            </Flex>
                        </Box>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
        </Box>
    )
}