import { Flex } from '@chakra-ui/react';
import React from 'react';

type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    
    return (
        <div>
            <Flex 
                direction='column'  
                width='100%'
                height='10vh'
                alignContent='center'
                border='2px solid #265e9e' 
                bg='white'
                >
                Nav
            </Flex> 
        </div>
    )
}
export default Navbar;