import {
    Box,
    Alert,
    Code,
    Heading,
    Link as ChakraLink,
    Text,
    Divider,
    useColorMode
} from '@chakra-ui/react'

import Link from 'next/link'

const MDXComponents = {
    h1: (props: any) => <Heading as="h1" size="2xl" {...props}/>
}

export default MDXComponents