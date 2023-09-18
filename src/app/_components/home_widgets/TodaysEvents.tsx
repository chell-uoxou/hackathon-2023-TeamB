import { Avatar, AvatarGroup, Box, Card, HStack, Text } from '@chakra-ui/react'

export type avatarData = {
  name: string
  avatarUrl: string
}

type Props = {
  avatars: avatarData[]
  eventTitle: string
}

export default function TodaysEvents(props: Props) {
  return (
    <Card width={'100%'} padding={3} boxShadow={'xs'} bg={'gray.50'}>
      <HStack>
        <Box w={'200px'}>
          <AvatarGroup size="sm" max={3}>
            {props.avatars.map((e: avatarData) => {
              return <Avatar name={e.name} src={e.avatarUrl} />
            })}
          </AvatarGroup>
        </Box>
        <Text fontSize={'16px'} fontWeight={''}>
          {props.eventTitle}
        </Text>
      </HStack>
    </Card>
  )
}
