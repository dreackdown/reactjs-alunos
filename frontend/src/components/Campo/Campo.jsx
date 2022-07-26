import { Input } from '@chakra-ui/react'

export const Campo = ({ children, placeholder, type, variant }) => {
  return (
    <Input type={type} placeholder={placeholder} variant={variant}>
      {children}
    </Input>
  )
}
