import { Box, Button,Flex,Input,InputGroup,InputLeftElement,InputRightAddon,List,Select,Spacer,Text} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react'; 
import ShopByDepartment from './ShopByDepartment';
import { Search2Icon } from '@chakra-ui/icons';

type SearchBarProps = {
    
};

const SearchBar:React.FC<SearchBarProps> = () => {
    
    return(
      <Flex bg={'#0b79bf'} height='48px' direction='row' align='center'>
       
        <Box p='9px 64px 9px 15px'>
          <ShopByDepartment/>               
        </Box>
        
        <InputGroup borderRadius={5} size="sm" bg={'white'} width='75vw'> 
          <Input type="text" placeholder="Search for products, brands..." border="1px solid #949494" color='#4d4d4f' />
          <InputRightAddon  p={0}  border="none"  >
            <Button size="sm" borderLeftRadius={0} borderRightRadius={3.3} border="1px solid #949494"  bg='#4d4d4f'>
            {<Search2Icon color="gray.50"/>}
            </Button>
         </InputRightAddon>
        </InputGroup>
    
      </Flex>
    )
}
export default SearchBar;