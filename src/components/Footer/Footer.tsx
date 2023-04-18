import { Flex } from '@chakra-ui/react';
import React from 'react';

type FooterProps = {
    
};

const Footer:React.FC<FooterProps> = () => {
    
    return (
        <div>
            <Flex 
                direction='column'  
                width='100%'
                height='10vh'
                alignContent='center'
                border='2px solid #265e9e' 
                bg='white'
                borderRadius='0px'  
                >
                Footer
            </Flex> 
        </div>
    )
}
export default Footer;