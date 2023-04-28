import MyAccountLayout from '@/src/layouts/MyAccountLayout';
import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import React from 'react';

type OrdersProps = {
    
};

const Orders:React.FC<OrdersProps> = () => {
    
    return (
        <Flex>
            <MyAccountLayout>
                <Box m={2}>
                    <Text fontSize={20} fontWeight={700} color=' #4d4d4f'>Orders</Text>
                    <Box border='2px solid gray.50'  height='50vh' width='50vw' bg='white'>
                    </Box>
                </Box>
            </MyAccountLayout>
        </Flex>
    )
}
export default Orders;