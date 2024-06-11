import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Flex, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FC } from "react";


const Header: FC = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" h={20} px={4}>
      <Flex w={40} fontSize={20} fontWeight="semibold">Save the SEA</Flex>
      <Flex display={["none", "none", "flex"]} gap={8}>
        <Button variant="link" colorScheme="blue">Home</Button>
        <Button variant="link" colorScheme="blue">Mint</Button>
        <Button variant="link" colorScheme="blue">Sale</Button>
      </Flex>
      <Flex display={["none", "none", "flex"]} w={40} justifyContent="end">
        <Button>메타마로그인</Button>
      </Flex>
      <Flex display={["flex", "flex", "none"]}>
        <Menu>
          <MenuButton colorScheme="blue" as={Button} rightIcon={<ChevronDownIcon />}>
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem>로그인</MenuItem>
            <MenuItem>Home</MenuItem>
            <MenuItem>Mint</MenuItem>
            <MenuItem>Sale</MenuItem>
            <MenuItem>로그아웃</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Header;