import { Button, Flex, Link,Spacer,Text,Image } from '@chakra-ui/react';
import React from 'react';
import MyAccountMenu from './MyAccountMenu';

type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    return (
        <div>
            <Flex 
                direction='column'  
                width='100%'
                height='60px'
                alignContent='center'
                bg='white'
                >
                    <Flex direction='row' fontSize={13} color='#4d4d4f' alignItems='center'>
                       
                       <Link href='/'>
                            <Button height='60px' borderRadius={0} bg='white'>
                            <Image src="https://shopfront.takealot.com/1dcae9d1083903c04a3a0545f21483c835c8ceed/static/media/src/images/logo.svg-f6ccb489b85bbddf97d6.svg" height="37px" width="180px" alt="Takealot"/>
                            </Button>
                       </Link>
                       
                       <Link href="/help-centre" p='3px 15px'>Help Center </Link>
                       <Text >|</Text>
                       <Link href="/sell" p='3px 15px'>Sell on Takealot </Link>
                       
                       <Spacer />
                        <Link  href='/login' p='3px 15px'>Login</Link>
                        <Text >|</Text>
                        <Link  href='/register' p='3px 15px'>Register</Link>
                        <Text>|</Text>
                        <Link  href='/account/orders' p='3px 15px'>Orders</Link>
                        <Text>|</Text>
                        <MyAccountMenu/>

                        <Link href='/wishlist'>
                             <Button p='8px 6px' mr={1} borderRadius='100%' bg='#f4697a'
                               _hover={{bg: '#f25266' }}>
                                  <Image src="https://img.icons8.com/ios-filled/20/ffffff/like--v1.png" alt='Wishlist'/>
                             </Button>
                        </Link>

                        <Link  href='/cart'>
                            <Button p='8px 6px' mr={1} bg='#1c8644'
                              _hover={{bg: '#15823e' }}>
                                 <Image src="https://img.icons8.com/external-anggara-glyph-anggara-putra/20/ffffff/external-cart-retail-anggara-glyph-anggara-putra-4.png" alt='cart'/>
                            </Button>
                        </Link>

                    </Flex>
            </Flex> 
        </div>
    )
}
export default Navbar;