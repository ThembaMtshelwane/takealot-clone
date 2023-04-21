import { Box, Button,Flex,Input,List,Select,Spacer,Text} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react'; 

type SearchBarProps = {
    
};

const SearchBar:React.FC<SearchBarProps> = () => {
    
    return(
        <Flex bg={'#0b79bf'} height='99.48px' direction='row' align='center'>
             <Box p='9px 64px 9px 15px'>
               <Button  bg='#4d4d4f' color='white' height='32px' width='200px'
                _active={{
                  transform: 'scale(0.98)',
                }}
                _hover={{
                  boxShadow:'0 0 1px 2px rgba(97, 143, 217, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                  bg: 'gray.700',
                  color:'white' 
                }}
                >
                  Shop by department
                </Button>                   
            </Box>
            <Box p='8px 8px 8px 13px' width='90vw'>
                <form action="">
                    <Flex >
                    <Input type="text"height='30px' bg='white'borderRadius='5px 0 0 5px' color='black' placeholder='Search for products, brands ...'/>
                    <Button type='submit' height='30px' width='50px' bg='#4d4d4f' mr={5} borderRadius='0 5px 5px 0' color='white'
                        _active={{
                           transform: 'scale(0.98)',
                         }}
                         _hover={{
                           boxShadow:'0 0 1px 2px rgba(97, 143, 217, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                           bg: 'gray.700',
                           color:'white' 
                         }}
                    >Search </Button>
                    </Flex>
                </form>
            </Box>
        </Flex>
    )
}
export default SearchBar;