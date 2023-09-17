import {
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from '@chakra-ui/react'

import { CaretDown } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

type communityData = {
  displayName: string
  avatarUrl: string
}

export default function CommunitySelector() {
  const [currentCommunityName, setCurrentCommunityName] = useState('')
  const [communityList, setCommunityList] = useState<communityData[]>([])

  useEffect(() => {
    const dummyCommunityList = [
      {
        displayName: 'kyotobase',
        avatarUrl:
          'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/99/UP0151-CUSA09971_00-AV00000000000004/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720',
      },
      {
        displayName: 'ぽけもんbase',
        avatarUrl:
          'https://takaratomymall.jp/img/goods/5/4904810225218_40487636bbbe41daa6fae71c0126cfab.jpg',
      },
      {
        displayName: 'ドラゴンの祠',
        avatarUrl:
          'https://2.bp.blogspot.com/-pIXpH3eh24Y/Vy2v0tRXGQI/AAAAAAAA6bo/m6Ih1-x8RyEkYNmqSUC9zshzVrMDzF9dQCLcB/s400/doukutsu.png',
      },
    ]
    setCurrentCommunityName('kyotobase')
    setCommunityList((list) => [...list, ...dummyCommunityList])
  }, [])

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<CaretDown />}
        margin={4}
        marginBottom={0}
      >
        {currentCommunityName}
      </MenuButton>
      <MenuList>
        {communityList.map((community) => {
          return (
            <MenuItem minH="48px">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src={community.avatarUrl}
                alt={community.displayName}
                mr="12px"
              />
              <span>{community.displayName}</span>
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}
