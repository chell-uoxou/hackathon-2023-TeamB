import {
  Button,
  Card,
  CardBody,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react'

import { type } from 'os'
import { ReactElement } from 'react'

type Props = {
  icon?: ReactElement
  modeId: string
  title?: string
  description?: string
}

export default function ModeSelectionItem(props: Props) {
  return (
    <Card
      flexGrow={1}
      backgroundColor={'gray.50'}
      boxShadow={'xs'}
      rounded={'xl'}
    >
      <CardBody>
        <VStack justifyContent={'center'}>
          {props.icon}
          <Text fontSize={'32px'} fontWeight={'bold'}>
            {props.title}
          </Text>
          <Text fontSize={'14px'} fontWeight={'bold'}>
            {props.description}
          </Text>
        </VStack>
      </CardBody>
    </Card>
  )
}
