import { Box, Flex, Link,Text,Image } from '@chakra-ui/react';
import React from 'react';

type SocialMediaProps = {
    
};

const SocialMedia:React.FC<SocialMediaProps> = () => {
    
    return (
        <>
            <Box margin='10px'>
                <Text fontSize={15} fontWeight={700}>Follow Us</Text>
                <Flex>
                    <Link href='https://facebook.com'>
                    <Image src="https://img.icons8.com/fluency/25/null/facebook.png" alt='Facebook'/>
                    </Link>
                    
                    <Link href='https://twitter.com'>
                    <Image src="https://img.icons8.com/fluency/25/null/twitter-circled.png" alt='Twitter'/>
                    </Link>
            
                    <Link href='https://instagram.com' bg='#0b79bf' borderRadius='100%'>
                    <Image src="https://img.icons8.com/ios/25/ffffff/null/instagram-new--v1.png" alt='Instagram'/>
                    </Link>
                </Flex>
            </Box>
        </>
    )
}
export default SocialMedia;