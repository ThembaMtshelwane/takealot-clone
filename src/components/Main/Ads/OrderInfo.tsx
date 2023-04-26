import { Flex } from '@chakra-ui/react';
import React from 'react';

type OrderInfoProps = {
    
};

const OrderInfo:React.FC<OrderInfoProps> = () => {
    
    return(
        <Flex border='2px solid red' width='70vw' p={5} direction='column'>
            OrderInfo
         </Flex>
    )
}
export default OrderInfo;