import { Container, Flex, Text, HStack, Button, useColorMode } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { CgAddR } from "react-icons/cg";
import { LuSun } from 'react-icons/lu';
import { IoMoon } from 'react-icons/io5'




export const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();



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
                <Link to={"/create"}>
                    <Button>
                        <CgAddR fontSize={20}/>
                    </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
                    
                </Button>
            </HStack>
        </Flex>
    </Container>
}

export default Navbar