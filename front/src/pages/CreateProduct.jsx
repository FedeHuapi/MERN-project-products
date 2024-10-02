import { Box, Container, Heading, Input, useColorModeValue, VStack } from "@chakra-ui/react";
import { useState } from "react";

export const CreateProduct = () => {
  const[ newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Crea un nuevo producto
        </Heading>
        <Box w={"full"} bg={useColorModeValue("white", "gray.800")} 
        p={6} rounded={"lg"} shadow={"md"}>
            <VStack spacing={4}>
              <Input  placeholder="Nombre del producto" name="name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}/>
              <Input  placeholder="Precio del producto" name="price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}/>
              <Input  placeholder="URL de la imagen" name="image" value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}/>
              
            </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

