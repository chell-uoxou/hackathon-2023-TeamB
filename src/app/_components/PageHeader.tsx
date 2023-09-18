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
        marginTop={10}
        marginBottom={8}
        marginLeft={12}
      >
        {props.title && (
          <Text fontSize={'40px'} fontWeight={'700'} marginBottom={0}>
            {props.title}
          </Text>
        )}

        {props.description && (
          <Text fontSize={'20px'} fontWeight={'400'}>
            {props.description}
          </Text>
        )}
      </VStack>
    </>
  )
}
