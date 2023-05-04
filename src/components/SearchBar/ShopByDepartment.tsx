import { getCatergories } from '@/src/pages/api/store';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
  } from '@chakra-ui/react'

type ShopByDepartmentProps = {
    
};

const ShopByDepartment:React.FC<ShopByDepartmentProps> = () => {

    return(
     <Menu>
        <MenuButton borderRadius={0} as={Button} rightIcon={<ChevronDownIcon />}
        bg='#4d4d4f' color='white' height='32px' width='200px'
          _active={{
            transform: 'scale(0.98)',
          }}
          _hover={{
            boxShadow:'0 0 1px 2px rgba(97, 143, 217, .75), 0 1px 1px rgba(0, 0, 0, .15)',
            bg: 'gray.700',
            color:'white' 
          }}
        >
          Shop by Department
        </MenuButton>
        <MenuList>
          {[
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting"
].map((catergory) => (
            <MenuItem bg='gray.100' width='90%' ml={3} mb={1} key={catergory}>
              <p>{catergory}</p>
            </MenuItem>
          ))}
        </MenuList>
     </Menu>
    )
}
export default ShopByDepartment;