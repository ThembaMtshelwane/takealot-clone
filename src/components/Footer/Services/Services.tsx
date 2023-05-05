import { Box, Flex,Grid,GridItem,Text,Image, Stack } from '@chakra-ui/react';
import React from 'react';
import { account,company,help, shop, takealotGroup } from './ServiceInfo';
import SocialMedia from './SocialMedia';
import ServiceComponent from './ServiceComponent';

const Services:React.FC = () => {

    return(
        <Grid templateColumns='repeat(5,1fr)' p='20px 0'>
            
            <GridItem>
                <ServiceComponent service ={shop}/>
                <GridItem>
                    <ServiceComponent service ={takealotGroup}/>
                 </GridItem>
            </GridItem>

            <GridItem>
                <ServiceComponent service ={help}/>
            </GridItem>

            <GridItem>
                <ServiceComponent service ={account}/>
            </GridItem>

            <GridItem>
                <ServiceComponent service ={company}/>
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
                    <SocialMedia/>
                </GridItem>
            </GridItem>
        </Grid>
    )
}
export default Services;