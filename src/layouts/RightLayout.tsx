import React from 'react';
import Products from '../components/Main/Products/Products';
import Ads from '../components/Main/Ads/Ads';
import { Flex } from '@chakra-ui/react';

type RightLayoutProps = {
    
};

const RightLayout:React.FC<RightLayoutProps> = () => {
    
    return (  
        <>
         <Flex direction='column'>
            <Ads/>
            <Products/>     
         </Flex>
        </>
    )
}

export default RightLayout;