import React from 'react';
import FeaturedItems from '../components/Main/Ads/FeaturedItems';
import InfoBox from '../components/Main/Ads/InfoBox';
import Products from '../components/Main/Products/Products';
import { Flex } from '@chakra-ui/react';

type RightLayoutProps = {
    
};

const RightLayout:React.FC<RightLayoutProps> = () => {
    
    return (  
        <>
        <Flex direction='column'>
            <InfoBox/>
            <FeaturedItems/>
            <Products/>
        </Flex>
        </>
      )
}

export default RightLayout;