import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Button, Flex, Icon, Spacer,Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import image1 from '../../../../../public/Ads/InfoBox/image1.jpg'
import image2 from '../../../../../public/Ads/InfoBox/image2.jpg'
import image3 from '../../../../../public/Ads/InfoBox/image3.jpg'
import image4 from '../../../../../public/Ads/InfoBox/image4.jpg'

type InfoBoxProps = {
    
};

const InfoBox:React.FC<InfoBoxProps> = () => {
    const images = [image1,image2,image3,image4]
    const images2 = ['image1','image2','image3','image4']
    const [imageCount, setImageCount] = useState(0)
   
    const clickRight = ()=>{
        setImageCount(imageCount+1)
        if(imageCount>=3){ setImageCount(0) }
        return imageCount
    }

    const clickLeft = ()=>{
        setImageCount(imageCount-1)
        if(imageCount<1){ setImageCount(3) }
        return imageCount
    }
    
    return(
        <Flex border='2px solid red' width='100%' p={5} direction='row'>
            <Icon as={ChevronLeftIcon} onClick={clickLeft} borderRadius='100%'/>
            {<p> {images2[imageCount]}</p> }
            {/* <Image src={images2[imageCount]} alt='Dan Abramov' /> */}
            {/* <Image src='../../../../../public/Ads/InfoBox/image1.jpg' alt="Takealot Logo" width='100%'/>  */}
            <Spacer/>
            <Icon as={ChevronRightIcon} onClick={clickRight} borderRadius='100%'/>
         </Flex>
    )
}
export default InfoBox;