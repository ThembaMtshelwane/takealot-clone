import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    Link,
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import React from 'react';

type MyAccountMenuProps = {
  
};

const MyAccountMenu:React.FC<MyAccountMenuProps> = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(     
        <Menu isOpen={isOpen}>
            <MenuButton
                _hover={{ bg:"gray.100"}}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
            >
                My Account {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList  onMouseLeave={onClose}>
                <Link href="/account"><MenuItem>My Account</MenuItem></Link>
                <Link href="/account/orders"><MenuItem>Track Order</MenuItem></Link>
                <Link  href="/returns"><MenuItem>Returns</MenuItem></Link>
                <Link href="/account/credits"><MenuItem>Credit & Refunds</MenuItem></Link> 
                <Link href="/account/reviews"><MenuItem>Product Reviews</MenuItem></Link>
                <Link href="/account/invoices"><MenuItem>Invoices</MenuItem></Link>
                <Link href="/account/personal-details"><MenuItem>Personal Details</MenuItem></Link>
                <Link href="/help-centre"><MenuItem>Help Centre</MenuItem></Link>
            </MenuList>
        </Menu>
       )
}
export default MyAccountMenu;