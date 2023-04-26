import React from 'react';
import InfoBox from './InfoBox';
import { Flex } from '@chakra-ui/react';
import FeaturedItems from './FeaturedItems';

type AdsProps = {
    
};

const Ads:React.FC<AdsProps> = () => {
    
    return(
        <Flex border='2px solid red' width='70vw' direction='column'>
            <InfoBox/>
            <FeaturedItems/>
         </Flex>
    )
}
export default Ads;