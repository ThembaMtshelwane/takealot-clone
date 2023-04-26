import { Flex } from '@chakra-ui/react';
import React from 'react';

type ProductsProps = {
    
};

const Products:React.FC<ProductsProps> = () => {
    
    return(
        <Flex border='2px solid red' width='70vw' p={5} direction='column'>
            Products
         </Flex>
    )
}
export default Products;