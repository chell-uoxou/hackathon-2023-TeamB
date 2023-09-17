import { Button, Image, Text } from '@chakra-ui/react'

export default function MyAvatar() {
  return (
    <Button
      leftIcon={
        <Image
          boxSize="2rem"
          borderRadius="full"
          src="https://avatars.githubusercontent.com/u/6916170?v=4"
          alt="avatarUrl"
          mr="12px"
        />
      }
      borderRadius="100px"
      colorScheme="white"
      bg={'white'}
      color="black"
      margin={4}
      size="lg"
    >
      <Text fontSize={'16px'} fontWeight="bold">
        瀬谷 龍
      </Text>
    </Button>
  )
}
