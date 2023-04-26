import { Flex } from '@chakra-ui/react';
import React from 'react';
import LeftSide from '../layout/LeftSide';
import RightSide from '../layout/RightSide';

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