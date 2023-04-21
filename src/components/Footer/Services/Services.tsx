import { Box, Flex,Grid,GridItem,Text, } from '@chakra-ui/react';
import React from 'react';

type ServicesProps = {
    
};

const Services:React.FC<ServicesProps> = () => {
    
    return(
        <Grid templateColumns='repeat(5,1fr)' p='20px 0'>
            <GridItem>
                <Box margin='10px'>
                    <Text fontSize={15} fontWeight={700}>Shop</Text>
                </Box>
                <GridItem>
                <Box margin='10px'>
                    <Text fontSize={15} fontWeight={700}>Takealot.group</Text>
                </Box>
            </GridItem>
            </GridItem>
            <GridItem>
                <Box margin='10px'>
                    <Text fontSize={15} fontWeight={700}>Help</Text>
                </Box>
            </GridItem>
            <GridItem>
                <Box margin='10px'>
                    <Text fontSize={15} fontWeight={700}>Account</Text>
                </Box>
            </GridItem>
            <GridItem>
                <Box margin='10px'>
                    <Text fontSize={15} fontWeight={700}>Company</Text>
                </Box>
            </GridItem>
            <GridItem>
                <Box margin='10px'>
                    <Text fontSize={15} fontWeight={700}>Download Our App</Text>
                </Box>
                <GridItem>
                <Box margin='10px'>
                    <Text fontSize={15} fontWeight={700}>Follow Us</Text>
                </Box>
            </GridItem>
            </GridItem>
        </Grid>
    )
}
export default Services;