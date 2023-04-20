import { Flex } from '@chakra-ui/react';
import React from 'react';

interface MainLayoutProps{
    children: React.ReactNode;
}

const MainLayout:React.FC<MainLayoutProps> = ({children}) => {
    
    return (
        <>
            <Flex 
            direction='column'  
            width='100%'
            height='90vh'
            alignContent='center'
            border='2px solid #265e9e' 
            bg='gray.100'
            borderRadius='0px'  
            >
                {children}
            </Flex> 
        </>
    )
}
export default MainLayout;