import { Box, Flex,Text, Image} from '@chakra-ui/react';
import React from 'react';

type OrderInfoProps = {
    
};

const OrderInfo:React.FC<OrderInfoProps> = () => {
    
    return(
        <>
        <Flex m={2} boxShadow='md' bg='gray.100' border='1.5px solid gray' align='center'>
           
            <Box bg='#7fc7f5' p={5} height='100%' borderRadius='50%'>
                <Image src="https://shopfront.takealot.com/1dcae9d1083903c04a3a0545f21483c835c8ceed/static/media/src/images/icon-delivery.svg-289ec5f71b25443056af.svg" alt="Where's my order?"/>
            </Box>
           
            <Box ml={5} mt={0}>
                <Text fontWeight={700} fontSize='15px'>Where's my order </Text>
                <Text mt={1} fontWeight={400} fontSize='12px'>Check your delivery or collection status</Text>
            </Box>
        </Flex>
        </>
    )
}
export default OrderInfo;