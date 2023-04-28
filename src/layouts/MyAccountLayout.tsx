import { Box, Flex, Grid, GridItem, Link, List, ListItem, Spacer, Stack, Text,Image,} from '@chakra-ui/react';
import React from 'react';

interface MyAccountLayoutProps  {
    children: React.ReactNode;
}


const MyAccountLayout:React.FC<MyAccountLayoutProps> = ({children}) => {
    
    return (
        <>      
            <Flex>
                <Box m={2}>
                    <Box border='2px solid gray.50'  width='25vw' bg='white'>
                    <Text p={5} pb='0' pt='1' fontSize={20} fontWeight={700} color=' black'>My Account</Text>
                    <Grid templateColumns='repeat(1,1fr)' p='20px 0'>
                        <GridItem>
                            <Box p='19px 24px 24px' pt='0' bg='white'>
                                <Flex>
                                <Image pr={2} src="https://img.icons8.com/external-anggara-glyph-anggara-putra/20/000000/external-cart-retail-anggara-glyph-anggara-putra-4.png" alt='cart'/>
                                     <Text fontSize='16px' fontWeight={700} mb={2}>Orders</Text>
                                </Flex>
                                <List pl={7} color='#0b79bf' fontSize='14px'>
                                    <Stack spacing={2}>
                                        <Link href='/account/orders'><ListItem>Orders</ListItem></Link>
                                        <Link href='/account/invoices'><ListItem>Invoices</ListItem></Link>
                                        <Link href='/returns'><ListItem>Returns</ListItem></Link>
                                        <Link href='/account/reviews'><ListItem>Product Reviews</ListItem></Link>      
                                    </Stack>
                                </List>
                            </Box>
                        </GridItem>

                        <GridItem>
                            <Box p='19px 24px 24px' pt='0' bg='white'>
                                <Flex>
                                     <Image pr={2} src="https://img.icons8.com/external-anggara-glyph-anggara-putra/20/000000/external-cart-retail-anggara-glyph-anggara-putra-4.png" alt='cart'/>
                                     <Text fontSize='16px' fontWeight={700} mb={2}>Payments & Credit</Text>
                                </Flex>
                                <List pl={7} color='#0b79bf' fontSize='14px'>
                                    <Stack spacing={2}>
                                        <Link href='/account/credits'><ListItem>Credit & Refunds</ListItem></Link>
                                        <Link href='/voucher'><ListItem>Redeem Gift Voucher</ListItem></Link>    
                                    </Stack>
                                </List>
                            </Box>
                        </GridItem>

                        <GridItem>
                            <Box p='19px 24px 24px'  pt='0' bg='white'>
                                <Flex>
                                     <Image pr={2} src="https://img.icons8.com/external-anggara-glyph-anggara-putra/20/000000/external-cart-retail-anggara-glyph-anggara-putra-4.png" alt='cart'/>
                                     <Text fontSize='16px' fontWeight={700} mb={2}>Customer Information</Text>
                                </Flex>
                                <List pl={7} color='#0b79bf' fontSize='14px'>
                                    <Stack spacing={2}>
                                        <Link href='/account/personal-details'><ListItem>Personal Details</ListItem></Link>
                                        <Link href='/address-book'><ListItem>Address Book</ListItem></Link>
                                        <Link href='/newsletter'><ListItem>Newsletter Subscriptions</ListItem></Link>     
                                    </Stack>
                                </List>
                            </Box>
                        </GridItem>

                        <GridItem>
                            <Box  p='19px 24px 24px' pt='0' bg='white'>
                                <Flex>
                                     <Image  pr={2} src="https://img.icons8.com/external-anggara-glyph-anggara-putra/20/000000/external-cart-retail-anggara-glyph-anggara-putra-4.png" alt='cart'/>
                                     <Text fontSize='16px' fontWeight={700} mb={2}>My Lists</Text>
                                </Flex>
                                <List  pl={7} color='#0b79bf' fontSize='14px'>
                                    <Stack spacing={2}>
                                        <Link href='/wishlists'><ListItem>My Lists</ListItem></Link>
                                        <Link href='/wishlists/create-list'><ListItem>Create a List</ListItem></Link>   
                                    </Stack>
                                </List>
                            </Box>
                        </GridItem>
                    </Grid>
                    </Box>
                </Box>
                {children}
            </Flex>     
        </>
) 
}
export default MyAccountLayout;