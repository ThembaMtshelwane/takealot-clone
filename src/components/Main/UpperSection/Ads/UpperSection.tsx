import { Flex } from '@chakra-ui/react';
import React from 'react';
import RightSide from './RightSide';
import LeftSide from './LeftSide';

type UpperSectionProps = {
    
};

const UpperSection:React.FC<UpperSectionProps> = () => {
    
    return(
        <Flex direction='row' bg='white'>
           <RightSide/>
           <LeftSide/>
         </Flex>
    )
}
export default UpperSection;