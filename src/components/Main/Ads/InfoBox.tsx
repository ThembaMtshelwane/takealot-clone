import { Flex } from '@chakra-ui/react';
import React from 'react';

type InfoBoxProps = {
    
};

const InfoBox:React.FC<InfoBoxProps> = () => {
    
    return(
        <Flex border='2px solid red' width='100%' p={5} direction='column'>
            InfoBox
         </Flex>
    )
}
export default InfoBox;