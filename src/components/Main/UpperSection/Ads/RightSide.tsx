import React from 'react';
import InfoBox from './InfoBox';
import { Flex } from '@chakra-ui/react';
import FeaturedItems from './FeaturedItems';

type RightSideProps = {
    
};

const RightSide:React.FC<RightSideProps> = () => {
    
    return(
        <Flex border='2px solid red' width='70vw' direction='column' bg='white'> 
            <InfoBox/>
            <FeaturedItems/>
         </Flex>
    )
}
export default RightSide;