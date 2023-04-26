import { Flex } from '@chakra-ui/react';
import React from 'react';

type FeaturedItemsProps = {
    
};

const FeaturedItems:React.FC<FeaturedItemsProps> = () => {
    
    return(
        <Flex border='2px solid red' width='70vw' p={5} direction='column'>
            FeaturedItems
         </Flex>
    )
}
export default FeaturedItems;