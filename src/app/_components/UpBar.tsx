'use client'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Container,
  Center,
} from '@chakra-ui/react'
import { AppLogo } from './ui/AppLogo'

interface Props {
  children: React.ReactNode
}

const Links = ['Dashboard', 'Projects', 'Team']

const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}
    >
      {children}
    </Box>
  )
}

export default function UpBar() {
  return (
    <>
      <Box
        bg={useColorModeValue('gray.100', 'gray.900')}
        px={4}
        position={'absolute'}
        height={16}
        width={'100%'}
      >
        <Center height={'100%'}>
          <AppLogo />
        </Center>
      </Box>
    </>
  )
}
