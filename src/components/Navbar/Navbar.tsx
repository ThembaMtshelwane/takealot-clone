import { Button, Flex, Link,Spacer,Text } from '@chakra-ui/react';
import React from 'react';
import takealot from '../../../public/takealot-logo.svg'

type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {

    const shoppingCart =() => {
        console.log('shoppingCart')
        return 'shoppingCart'
    }

    const wishList =() => {
        console.log('wishList')
        return 'wishList'
    }

    const  home =() =>  {
       
    }

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
                       
                        <Button onClick={home} height='60px' borderRadius={0} bg='white'>
                        <img src="https://shopfront.takealot.com/1dcae9d1083903c04a3a0545f21483c835c8ceed/static/media/src/images/logo.svg-f6ccb489b85bbddf97d6.svg" height="37px" width="180px" alt="Takealot"/>
                        </Button>
                       
                       <Link href="/help" p='3px 15px'>Help Center </Link>
                       <Text >|</Text>
                       <Link href="/sell" p='3px 15px'>Sell on Takealot </Link>
                       
                       <Spacer />
                        <Link  href='/login' p='3px 15px'>Login</Link>
                        <Text >|</Text>
                        <Link  href='/register' p='3px 15px'>Register</Link>
                        <Text>|</Text>
                        <Link  href='/account/orders' p='3px 15px'>Orders</Link>
                        <Text>|</Text>
                        <Link  href='/myAccount' p='3px 15px'>My Account</Link>
                        <Text >|</Text>

                        <Button onClick={wishList} p='8px 6px' mr={1} borderRadius='100%' bg='#f4697a'
                          _hover={{bg: '#f25266' }}>
                             <img src="https://img.icons8.com/ios-filled/20/ffffff/like--v1.png"/>
                        </Button>
                        <Button onClick={shoppingCart} p='8px 6px' mr={1} bg='#1c8644'
                          _hover={{bg: '#15823e' }}>
                             <img src="https://img.icons8.com/external-anggara-glyph-anggara-putra/20/ffffff/external-cart-retail-anggara-glyph-anggara-putra-4.png"/>
                        </Button>
                    </Flex>
            </Flex> 
        </div>
    )
}
export default Navbar;