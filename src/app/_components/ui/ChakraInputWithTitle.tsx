import { Input, Text } from '@chakra-ui/react'
import { type } from 'os'

type Props = {
  title?: string
  modeId: string
  placeholder?: string
  onChange?: Function
}

export default function ChakraInputWithTitle(props: Props) {
  return (
    <>
      <Text>{props.title}</Text>
      <Input placeholder="Basic usage" />
    </>
  )
}
