import { Box, Flex,Grid,GridItem,Text,Image, Link, Stack } from '@chakra-ui/react';
import React from 'react';
import { account,company,help,Service } from './ServiceInfo';


type ServicesComponetProps = {
    service:Service
};

const ServicesComponet:React.FC<ServicesComponetProps> = ({service}) => {
    return (
        <div>
         <Box margin='10px'>
            <Text fontSize={15} fontWeight={700}>{service.heading}</Text>
            {service.list.map((item) => (
            <Link href={item.link} key={item.name}>
              <p>{item.name}</p>
            </Link>
            ))}
         </Box>
        </div>
    )
}

const Services:React.FC = () => {

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
                <ServicesComponet service ={help}/>
            </GridItem>
            <GridItem>
                <ServicesComponet service ={account}/>
            </GridItem>
            <GridItem>
                <ServicesComponet service ={company}/>
            </GridItem>
            <GridItem>
                <Box margin='10px'>
                    <Text fontSize={15} fontWeight={700} mb={2}>Download Our App</Text>
                    <Flex direction='column'>
                     <Stack>
                         <a href="https://itunes.apple.com/za/app/takealot.com/id606927881"><Image src="https://shopfront.takealot.com/1dcae9d1083903c04a3a0545f21483c835c8ceed/static/media/src/images/app-store.svg-edce310696aa7f6191a1.svg" alt="Apple App Store" width="120px" height="40px"/></a>
                         <a href="https://play.google.com/store/apps/details?id=fi.android.takealot"><Image src="https://shopfront.takealot.com/1dcae9d1083903c04a3a0545f21483c835c8ceed/static/media/src/images/google-play.svg-7a92427373a19e40a662.svg" alt="Google Play Store" width="135px" height="40px"/></a>
                         <a href="https://urldra.cloud.huawei.com/gUKQa1PwKA"><Image src="https://shopfront.takealot.com/1dcae9d1083903c04a3a0545f21483c835c8ceed/static/media/src/images/huawei-appgallery.svg-bb1c8aaa1305360a018d.svg" alt="Huawei AppGallery" width="133px" height="40px"/></a>
                     </Stack>
                    </Flex>
                </Box>
                <GridItem>
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
            </GridItem>
            </GridItem>
        </Grid>
    )
}
export default Services;