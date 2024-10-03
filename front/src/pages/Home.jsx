import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useProductStore } from '../store/products'
import { ProductCard } from '../components/ProductCard'

export const Home = () => {

  const { fetchProducts, products} = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);
  
  
  
  return (
    <Container>
        <VStack spacing={8}>
          <Text
            fontSize={"30"}
            fontWeight={"bold"}
            bgGradient={"linear(to-r, cyan.400, blue.500)"}
            bgClip={"text"}
            textAlign={"center"}>
              Productos 
          </Text>

          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3,
            }}
            spacing={10}
            w={"full"}
            >
              {products.map((product) => (
                <ProductCard key={product.id} product={product}/>
              ))}
          </SimpleGrid>

              {products.length === 0 && (
                          <Text fontSize="x1" textAlign={"center"} fontWeight="bold" color="gray.500">
                          No se encontraron productos{" "}
                          <Link to={"/create"}>
                            <Text as="span" color="blue.500" _hover={{ textDecoration: "underline"}}>
                              ¡Crea un producto!
                            </Text>
                          </Link>
                        </Text>
              )}
        </VStack>
    </Container>
  )
}

