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
          {getCatergories().map((catergory) => (
            <MenuItem border='2px solid white' width ='202px' height='295px' bg='white'key={catergory}>
              <p>${catergory}</p>
            </MenuItem>
          ))}
        </MenuList>
     </Menu>
    )
}
export default ShopByDepartment;