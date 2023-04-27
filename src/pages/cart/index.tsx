import { Box,Button,Flex,Text,Image } from '@chakra-ui/react';
import React from 'react';

type CartProps = {
    
};

const Cart:React.FC<CartProps> = () => {
    
    return(
        <Box m={2} p='0 24px 117px'>
        <Text fontSize={20} fontWeight={700} color=' #4d4d4f'>Shopping Cart</Text>
        <Box bg='white' borderRadius='3px' boxShadow=' 0 2px 2px 0 rgba(77,77,79,0.08), 0 0 2px 0 rgba(77,77,79,0.16)' height='350px' mb='10px'>
            <Flex direction='column' align='center' m='24px 0'>
            <Image mt={50} src="https://shopfront.takealot.com/1dcae9d1083903c04a3a0545f21483c835c8ceed/static/media/src/images/cart/empty-cart.svg-a3f63604a3d49f7b220a.svg" alt="Empty shopping cart" data-ref="empty-box-image" borderRadius='50%'/>
                <Text m='8px 0 24px' color='#0a0a0a' fontSize={16} fontWeight={500} fontFamily='"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif'>Your shopping cart is empty</Text>
                <Button bg='#0b79bf' color='white' p='13px 32px' fontSize={14} borderRadius='3px'
                  _active={{
                      transform: 'scale(0.98)',
                    }}
                    _hover={{
                      boxShadow:'0 0 1px 2px rgba(97, 143, 217, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                    }}
                >Countinue Shopping</Button>
            </Flex>
        </Box>
    </Box>
    )
}
export default Cart;