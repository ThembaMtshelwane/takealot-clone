import { Button, Flex, Link,Spacer,Text } from '@chakra-ui/react';
import React from 'react';
import TakealotLogo from '../../../public/takealot-logo.svg'
import About from '@/src/pages/About/About';

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
                border='2px solid #265e9e' 
                bg='white'
                >
                    <Flex direction='row' fontSize={13} color='#4d4d4f' alignItems='center'>
                       
                        <Button onClick={home} height='60px' borderRadius={0} >
                             <img src={TakealotLogo} alt="Takealot Logo" />                             
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

                        <Button onClick={shoppingCart} p='8px 6px' mr={1}>
                             <img src="./public/shopping-cart.png" alt="shopping cart"/>
                        </Button>
                        <Button onClick={wishList} p='8px 6px' mr={1}>
                            <img src="./public/heart.png" alt="wishList" />
                        </Button>
                    </Flex>
            </Flex> 
        </div>
    )
}
export default Navbar;