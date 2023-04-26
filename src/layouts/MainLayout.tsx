import { Flex } from '@chakra-ui/react';
import React from 'react';
import Main from '../components/Main/Main';

interface MainLayoutProps{
    children: React.ReactNode;
}

const MainLayout:React.FC<MainLayoutProps> = ({children}) => {
    
    return (
        <>
            <Flex 
            direction='column'  
            width='100%'
            height='100%'
            alignContent='center'
            bg='gray.100'
            >
                {children}
            </Flex> 
        </>
    )
}
export default MainLayout;