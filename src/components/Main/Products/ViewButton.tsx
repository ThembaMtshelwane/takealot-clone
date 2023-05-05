import { Button } from '@chakra-ui/react';
import React from 'react';

type ViewButtonProps = {
    
};
const ViewButton:React.FC = () => {
    return(    
        <Button fontWeight={600} border='1px solid #4d4d4f' borderRadius={0} p={2} color='#4d4d4f' height='30px'
        _active={{
          transform: 'scale(0.98)',
        }}
        _hover={{
          boxShadow:'0 0 1px 2px, 0 1px 1px rgba(0, 0, 0, .15)',
          bg: 'gray.700',
          color:'white' 
        }}
      >View More 
      </Button>
    )
}
export default ViewButton;