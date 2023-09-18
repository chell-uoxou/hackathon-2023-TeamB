import { Button, ResponsiveValue, Text, ThemingProps } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { JSXElementConstructor, MouseEventHandler, ReactElement } from 'react'

type Props = {
  isLoading?: boolean
  size?: ResponsiveValue<(string & {}) | 'sm' | 'md' | 'lg' | 'xs'>
  icon?: ReactElement<any, string | JSXElementConstructor<any>>
  label: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  paddingLR?: number
}

const SecondaryButton = (props: Props) => {
  return (
    <Button
      isLoading={props.isLoading}
      borderRadius="70px"
      bg="gray.200"
      colorScheme="white"
      color="black"
      margin={4}
      size={props.size}
      leftIcon={props.icon}
      onClick={props.onClick}
      paddingLeft={props.paddingLR}
      paddingRight={props.paddingLR}
    >
      <Text fontSize={'16px'} fontWeight="bold">
        {props.label}
      </Text>
    </Button>
  )
}

export default SecondaryButton
