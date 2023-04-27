import { Box, Flex,Text, Image} from '@chakra-ui/react';
import React from 'react';

type OrderInfoProps = {
    
};

const OrderInfo:React.FC<OrderInfoProps> = () => {
    
    return(
        <>
        <Flex p={5} m={1} boxShadow='md' bg='gray.100' border='1.5px solid gray'>
            <Image src='where-is-my-order.png' alt='where is my order' />
            <Box>
                <Text fontWeight={500} fontSize='15px'>Where's my order </Text>
                <Text fontWeight={400} fontSize='12px'>Check your delivery or collection status</Text>
            </Box>
        </Flex>
        </>
    )
}
export default OrderInfo;