import { Text, VStack } from '@chakra-ui/react'

type Props = {
  title?: string
  description?: string
}

export default function PageHeader(props: Props) {
  return (
    <>
      <VStack
        alignItems={'flex-start'}
        marginTop={5}
        marginBottom={5}
        marginLeft={12}
      >
        <Text fontSize={'40px'} fontWeight={'700'} marginBottom={-3}>
          {props.title}
        </Text>
        <Text fontSize={'24px'} fontWeight={'600'}>
          {props.description}
        </Text>
      </VStack>
    </>
  )
}
