import { Button, ResponsiveValue, Text, ThemingProps } from '@chakra-ui/react'
import { PlusCircle } from '@phosphor-icons/react'
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

const PrimaryButton = (props: Props) => {
  return (
    <Button
      isLoading={props.isLoading}
      borderRadius="100px"
      colorScheme="yellow"
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

export default PrimaryButton
