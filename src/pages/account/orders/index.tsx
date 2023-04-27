import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import React from 'react';
import { isBoxedPrimitive } from 'util/types';

type OrdersProps = {
    
};

const Orders:React.FC<OrdersProps> = () => {
    
    return (
        <Flex>
            <Box m={2}>
                <Text fontSize={20} fontWeight={700} color=' #4d4d4f'>My Account</Text>
                <Box border='2px solid gray.50'  height='95vh' width='25vw' bg='white'>
                </Box>
            </Box>

            <Box m={2}>
                <Text fontSize={20} fontWeight={700} color=' #4d4d4f'>Orders</Text>
                <Box border='2px solid gray.50'  height='50vh' width='50vw' bg='white'>
                </Box>
            </Box>
        </Flex>
    )
}
export default Orders;