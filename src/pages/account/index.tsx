import { Grid, GridItem,Text,Box, List, ListItem, Link, Stack,Image, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';

type indexProps = {
    
};

const index:React.FC<indexProps> = () => {
    
    return (
        <>                
            <Text fontSize='20px' fontWeight={700} pl='10px' pt='10px' color='#4d4d4f'>My Account</Text>
            <Grid templateColumns='repeat(3,1fr)' p='20px 0'>
                <GridItem>
                    <Box margin='10px'  p='19px 24px 24px' bg='white' height='185px'>
                        <Flex>
                             <Text fontSize='16px' fontWeight={700} mb={2}>Orders</Text>
                             <Spacer/>
                             <Image src="https://img.icons8.com/external-anggara-glyph-anggara-putra/20/4d4d4f/external-cart-retail-anggara-glyph-anggara-putra-4.png" alt='cart'/>
                        </Flex>
                        <List color='#0b79bf' fontSize='14px'>
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
                    <Box margin='10px'  p='19px 24px 24px' bg='white' height='185px'>
                        <Flex>
                             <Text fontSize='16px' fontWeight={700} mb={2}>Payments & Credit</Text>
                             <Spacer/>
                             <Image src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/20/4d4d4f/external-glyph-travel-tanah-basah-glyph-tanah-basah-7.png" alt='card'/>
                        </Flex>
                        <List color='#0b79bf' fontSize='14px'>
                            <Stack spacing={2}>
                                <Link href='/account/credits'><ListItem>Credit & Refunds</ListItem></Link>
                                <Link href='/voucher'><ListItem>Redeem Gift Voucher</ListItem></Link>    
                            </Stack>
                        </List>
                    </Box>
                </GridItem>

                <GridItem>
                    <Box margin='10px'  p='19px 24px 24px' bg='white' height='185px'>
                        <Flex>
                             <Text fontSize='16px' fontWeight={700} mb={2}>Customer Information</Text>
                             <Spacer/>
                             <Image bg='#4d4d4f'borderRadius='100%' p={1} src="https://img.icons8.com/fluency-systems-filled/20/ffffff/null/guest-male.png" alt='account'/>
                        </Flex>
                        <List color='#0b79bf' fontSize='14px'>
                            <Stack spacing={2}>
                                <Link href='/account/personal-details'><ListItem>Personal Details</ListItem></Link>
                                <Link href='/address-book'><ListItem>Address Book</ListItem></Link>
                                <Link href='/newsletter'><ListItem>Newsletter Subscriptions</ListItem></Link>     
                            </Stack>
                        </List>
                    </Box>
                </GridItem>

                <GridItem>
                    <Box margin='10px'  p='19px 24px 24px' bg='white' height='185px'>
                        <Flex>
                             <Text fontSize='16px' fontWeight={700} mb={2}>My Lists</Text>
                             <Spacer/>
                             <Image src="https://img.icons8.com/ios-filled/20/4d4d4f/null/like--v1.png" alt='heart'/>
                        </Flex>
                        <List color='#0b79bf' fontSize='14px'>
                            <Stack spacing={2}>
                                <Link href='/wishlists'><ListItem>My Lists</ListItem></Link>
                                <Link href='/wishlists/create-list'><ListItem>Create a List</ListItem></Link>   
                            </Stack>
                        </List>
                    </Box>
                </GridItem>

                <GridItem>
                    <Box margin='10px'  p='19px 24px 24px' bg='white' height='185px'>
                        <Flex>
                             <Text fontSize='16px' fontWeight={700} mb={2}>Support</Text>
                             <Spacer/>
                             <Image bg='#4d4d4f' p={1} borderRadius='100%' src="https://img.icons8.com/ios-filled/20/ffffff/null/question-mark.png" alt='question'/>
                        </Flex>
                        <List color='#0b79bf' fontSize='14px'>
                            <Stack spacing={2}>
                                <Link href='/help-centre'><ListItem>Help Cntre</ListItem></Link>
                                <Link href='/'><ListItem>Logout</ListItem></Link>      
                            </Stack>
                        </List>
                    </Box>
                </GridItem>
            </Grid>
        
        </>
    )
}
export default index;