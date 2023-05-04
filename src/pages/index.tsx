import { Flex } from "@chakra-ui/react";
import Products from "../components/Main/Products/Products";
import UpperSection from "../components/Main/UpperSection/Ads/UpperSection";
import { useEffect, useState } from "react";
import { getProducts,Product } from "./api/store";


export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (  
    <>
    <Flex direction='column'>
        <UpperSection/>
        <Products products ={products} />
    </Flex>
</>
  )
}
