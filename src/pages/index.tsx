import { Flex } from "@chakra-ui/react";
import Products from "../components/Main/Products/Products";
import UpperSection from "../components/Main/UpperSection/Ads/UpperSection";

export default function Home() {
  return (  
    <>
    <Flex direction='column'>
        <UpperSection/>
        <Products/>
    </Flex>
</>
  )
}
