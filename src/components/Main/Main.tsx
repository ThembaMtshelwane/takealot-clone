import { Flex } from '@chakra-ui/react';
import React from 'react';
import LeftLayout from '@/src/layouts/LeftLayout';
import RightLayout from '@/src/layouts/RightLayout';

type MainProps = {
    
};

const Main:React.FC<MainProps> = () => {
    
    return (  
        <>
            <Flex>
                <RightLayout/>
                <LeftLayout/>
            </Flex>
        </>
      )
}
export default Main;