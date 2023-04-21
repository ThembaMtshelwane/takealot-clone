import { Flex } from '@chakra-ui/react';
import React from 'react';
import Services from './Services/Services';
import End from './End/End';
import Crumbs from './Crumbs/Crumbs';

type FooterProps = {
    
};

const Footer:React.FC<FooterProps> = () => {
    
    return (
        <div>
            <Flex 
                direction='column'  
                width='100%'
                height='10vh'
                alignContent='center'
                bg='white'
                borderRadius='0px'  
                >
                <Services/>
                <Crumbs/>
                <End/>
            </Flex> 
        </div>
    )
}
export default Footer;