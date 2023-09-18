import { Input, Text, VStack } from '@chakra-ui/react'
import { ChangeEventHandler } from 'react'

type Props = {
  title?: string
  modeId: string
  placeholder?: string
  onChange?: ChangeEventHandler
}

export default function ChakraInputWithTitle(props: Props) {
  return (
    <VStack
      alignItems={'flex-start'}
      width={'90%'}
      marginTop={4}
      marginBottom={0}
    >
      <Text fontSize={'20px'} fontWeight={'700'}>
        {props.title}
      </Text>
      <Input placeholder={props.placeholder} onChange={props.onChange} />
    </VStack>
  )
}
