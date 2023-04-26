import { Flex } from '@chakra-ui/react';
import React from 'react';
import OrderInfo from './OrderInfo';

type LeftSideProps = {
    
};

const LeftSide:React.FC<LeftSideProps> = () => {
    
    return(
        <>    
            <Flex border='2px solid red' width='30vw' direction='column' bg='white'> 
            <OrderInfo/>
            </Flex>
        </>

    )
}
export default LeftSide;