import { Button, Text } from '@chakra-ui/react'
import { PlusCircle } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'

const NewEntryButton = () => {
  const router = useRouter()

  return (
    <Button
      borderRadius="100px"
      colorScheme="yellow"
      margin={4}
      size="lg"
      leftIcon={<PlusCircle size={22} />}
      onClick={() => {
        router.push('/entry/new')
      }}
    >
      <Text fontSize={'18px'} fontWeight="700" transform="translateY(-1px)">
        登録
      </Text>
    </Button>
  )
}

export default NewEntryButton
