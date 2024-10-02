import { Container, Flex, Text, Link, HStack } from "@chakra-ui/react"


export const Navbar = () => {
  return <Container maxW={"1140px"} px={4}>
        <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
            base: "column",
            sm: "row"
        }}
        >

            <Text
            bgGradient={'linear(red.100 0%, orange.100 25%, yellow.100 50%)'}
            bgClip='text'
            fontSize={{ base: "22", sm: "22"}}
            fontWeight={'bold'}
            textTransform={"uppercase"}
            textAlign={"center"}
            >
                <Link to={"/"}>Generador de productos</Link> 
            </Text>
            <HStack spacing={2} alignItems={"center"}>

            </HStack>
        </Flex>
    </Container>
}

export default Navbar