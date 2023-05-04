import { Product } from '@/src/pages/api/store';
import { Button, Flex, Grid, GridItem, Heading,Spacer,Text } from '@chakra-ui/react';
import React from 'react';

type ProductsProps = {
    products: Product[]  
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
      >View More </Button>
    )
}
const Products:React.FC<ProductsProps> = ({ products}) => {
  
    return(
        <Flex  width='70vw' p={5} direction='column'>
            
            <Flex direction='row' align='center'>
            <Heading fontSize='20px' height='30px' color='#4d4d4f'>Men's clothing</Heading>
            <Spacer/>
            <ViewButton/>
            </Flex>
            <Grid templateColumns='repeat(4,1fr)' p='20px 0'>
                {products.map((product) => (
                    <GridItem border='2px solid white' width ='202px' height='295px' bg='white'key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>${product.price}</p>
                    </GridItem>
                ))}
            </Grid>

            <Flex direction='row' align='center'>
            <Heading fontSize='20px' height='30px' color='#4d4d4f'>Women's clothing</Heading>
            <Spacer/>
            <ViewButton/>
            </Flex>
            <Grid templateColumns='repeat(4,1fr)' p='20px 0'>
                <GridItem border='2px solid white' width ='202px' height='295px' bg='white' ></GridItem>
                <GridItem border='2px solid white' width ='202px' height='295px' bg='white' ></GridItem>
                <GridItem border='2px solid white' width ='202px' height='295px' bg='white' ></GridItem>
                <GridItem border='2px solid white' width ='202px' height='295px' bg='white' ></GridItem>
            </Grid>

            <Flex direction='row' align='center'>
            <Heading fontSize='20px' height='30px' color='#4d4d4f'>Jewelery</Heading>
            <Spacer/>
            <ViewButton/>
            </Flex>
            <Grid templateColumns='repeat(4,1fr)' p='20px 0'>
                <GridItem border='2px solid white' width ='202px' height='295px' bg='white' ></GridItem>
                <GridItem border='2px solid white' width ='202px' height='295px' bg='white' ></GridItem>
                <GridItem border='2px solid white' width ='202px' height='295px' bg='white' ></GridItem>
                <GridItem border='2px solid white' width ='202px' height='295px' bg='white' ></GridItem>
            </Grid>

            <Flex direction='row' align='center'>
            <Heading fontSize='20px' height='30px' color='#4d4d4f'>Gardern Appliances</Heading>
            <Spacer/>
            <ViewButton/>
            </Flex>
            <Grid templateColumns='repeat(4,1fr)' p='20px 0'>
                <GridItem border='2px solid white' width ='202px' height='295px' bg='white' ></GridItem>
                <GridItem border='2px solid white' width ='202px' height='295px' bg='white' ></GridItem>
                <GridItem border='2px solid white' width ='202px' height='295px' bg='white' ></GridItem>
                <GridItem border='2px solid white' width ='202px' height='295px' bg='white' ></GridItem>
            </Grid>

            <Flex direction='row' align='center'>
            <Heading fontSize='20px' height='30px' color='#4d4d4f'>Electronics</Heading>
            <Spacer/>
            <ViewButton/>
            </Flex>
            <Grid templateColumns='repeat(4,1fr)' p='20px 0'>
                <GridItem border='2px solid white' width ='202px' height='295px' bg='white' ></GridItem>
                <GridItem border='2px solid white' width ='202px' height='295px' bg='white' ></GridItem>
                <GridItem border='2px solid white' width ='202px' height='295px' bg='white' ></GridItem>
                <GridItem border='2px solid white' width ='202px' height='295px' bg='white' ></GridItem>
            </Grid>

            <Flex direction='row' align='center'>
            <Heading fontSize='20px' height='30px' color='#4d4d4f'>Hygine</Heading>
            <Spacer/>
            <ViewButton/>
            </Flex>
            <Grid templateColumns='repeat(4,1fr)' p='20px 0'>
                <GridItem border='2px solid white' width ='202px' height='295px' bg='white' ></GridItem>
                <GridItem border='2px solid white' width ='202px' height='295px' bg='white' ></GridItem>
                <GridItem border='2px solid white' width ='202px' height='295px' bg='white' ></GridItem>
                <GridItem border='2px solid white' width ='202px' height='295px' bg='white' ></GridItem>
            </Grid>

        </Flex>
    )
}
export default Products;