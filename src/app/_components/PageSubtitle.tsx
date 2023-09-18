import { Text, VStack } from '@chakra-ui/react'

type Props = {
  title?: string
}

export default function PageSubtitle(props: Props) {
  return (
    <VStack
      alignItems={'flex-start'}
      marginTop={5}
      marginBottom={5}
      marginLeft={12}
    >
      <Text fontSize={'20px'} fontWeight={'700'}>
        {props.title}
      </Text>
    </VStack>
  )
}
