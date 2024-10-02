import { Box } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar"
import { CreateProduct } from "./pages/CreateProduct";

function App() {
  return (
  <>
  <Box minH={"100vh"}>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateProduct />} />
    </Routes>
  </Box>

</>

  );

}

export default App
