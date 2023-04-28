import MyAccountLayout from '@/src/layouts/MyAccountLayout';
import { Grid, GridItem, Flex, Spacer, List, Stack, ListItem,Box,Link,Text,Image, Button } from '@chakra-ui/react';
import React from 'react';

type indexProps = {
    
};

const index:React.FC<indexProps> = () => {
    
    return (
         <>
         <Flex fontSize='13px' p='20px'>
         <Link href='/account' color='#0b79bf'mr={2}>
            <Text>My Account</Text>
         </Link>
         <Text  color='#4d4d4f'>/</Text>
         <Text color='#4d4d4f' ml={2}>Personal Details</Text>
         </Flex>
         
         <MyAccountLayout>
         <Grid templateColumns='repeat(1,1fr)'>
         <Text fontSize='20px' color='#4d4d4f' fontWeight={600} margin='10px' >Personal Details</Text>
                <GridItem>
                    <Box margin='10px'  p='24px 24px 24px 0px' bg='white' height='90px'  width='100%'>
                        <Flex align='center' >
                            <Flex direction='column' pl='24px'>
                             <Text fontSize='17px' fontWeight={700} mb={2}>Your Name</Text>
                             <Text fontSize='14px' color='#4d4d4f'>Themba Mtshelwane</Text>
                            </Flex>
                            <Spacer/>
                            <Button color='white' borderRadius={0} bg='#0b79bf' p='13px 32px' fontSize='13px' width='150px' height='40px' 
                                _hover={{ bg: '#01568c',}}
                            >Edit</Button>
                        </Flex>
                    </Box>
                </GridItem>

                <GridItem>
                    <Box margin='10px'  p='24px 24px 24px 0px' bg='white' height='90px'  width='100%'>
                        <Flex align='center' >
                            <Flex direction='column' pl='24px'>
                             <Text fontSize='17px' fontWeight={700} mb={2}>Email Address</Text>
                             <Text fontSize='14px' color='#4d4d4f'>thembamtshelwane3@gmail.com</Text>
                            </Flex>
                            <Spacer/>
                            <Button color='white' borderRadius={0} bg='#0b79bf' p='13px 32px' fontSize='13px' width='150px' height='40px' 
                                _hover={{ bg: '#01568c',}}
                            >Edit</Button>
                        </Flex>
                    </Box>
                </GridItem>

                <GridItem>
                    <Box margin='10px'  p='24px 24px 24px 0px' bg='white' height='90px'  width='100%'>
                        <Flex align='center' >
                            <Flex direction='column' pl='24px'>
                             <Text fontSize='17px' fontWeight={700} mb={2}>Password</Text>
                             <Text fontSize='14px' color='#4d4d4f'>******</Text>
                            </Flex>
                            <Spacer/>
                            <Button color='white' borderRadius={0} bg='#0b79bf' p='13px 32px' fontSize='13px' width='150px' height='40px' 
                                _hover={{ bg: '#01568c',}}
                            >Edit</Button>
                        </Flex>
                    </Box>
                </GridItem>

                <GridItem>
                    <Box margin='10px'  p='24px 24px 24px 0px' bg='white' height='90px'  width='100%'>
                        <Flex align='center' >
                            <Flex direction='column' pl='24px'>
                             <Text fontSize='17px' fontWeight={700} mb={2}>Mobile Number</Text>
                             <Text fontSize='14px' color='#4d4d4f'>+27 84 480 4140</Text>
                            </Flex>
                            <Spacer/>
                            <Button color='white' borderRadius={0} bg='#0b79bf' p='13px 32px' fontSize='13px' width='150px' height='40px' 
                                _hover={{ bg: '#01568c',}}
                            >Edit</Button>
                        </Flex>
                    </Box>
                </GridItem>

                <GridItem>
                    <Box margin='10px'  p='24px 24px 24px 0px' bg='white' height='90px'  width='100%'>
                        <Flex align='center' >
                            <Flex direction='column' pl='24px'>
                             <Text fontSize='17px' fontWeight={700} mb={2}>Business Details</Text>
                             <Text fontSize='14px' color='#4d4d4f'><Link color='#0b79bf'>Why add business details</Link></Text>
                            </Flex>
                            <Spacer/>
                            <Button color='#0b79bf' borderRadius={0} bg='white' p='13px 32px' fontSize='13px' width='150px' height='40px' 
                                border='1px solid #0b79bf' 
                                _hover={{ bg: '#0b79bf',color:'white'}}
                            >Add</Button>
                        </Flex>
                    </Box>
                </GridItem>
            </Grid>
            
         </MyAccountLayout>

         </>
    )
}
export default index;