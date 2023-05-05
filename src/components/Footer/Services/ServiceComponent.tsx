import React from 'react';
import { Service } from './ServiceInfo';
import { Box, Text,Link } from '@chakra-ui/react';

type ServiceComponentProps = {
    
};

type ServicesComponetProps = {
    service:Service
};


const ServiceComponent:React.FC<ServicesComponetProps> = ({service}) => {
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
export default ServiceComponent;