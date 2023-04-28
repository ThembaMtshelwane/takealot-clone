import { Box, Text,} from '@chakra-ui/react';
import React from 'react';

type MyAccountLayoutProps = {
    
};

const MyAccountLayout:React.FC<MyAccountLayoutProps> = () => {
    
    return (
        <>           
            <Box m={2}>
                <Text fontSize={20} fontWeight={700} color=' #4d4d4f'>My Account</Text>
                <Box border='2px solid gray.50'  height='95vh' width='25vw' bg='white'>
                </Box>
            </Box>
        </>
) 
}
export default MyAccountLayout;