import { Input } from '@chakra-ui/react'

export const Campo = ({
  children,
  placeholder,
  type,
  variant,
  valor,
  aoAlterado,
  pr,
  mb,
  size
}) => {
  const aoDigitado = e => {
    aoAlterado(e.target.value)
  }

  return (
    <Input
      type={type}
      placeholder={placeholder}
      variant={variant}
      onChange={aoDigitado}
      value={valor}
      pr={pr}
      mb={mb}
      size={size}
    >
      {children}
    </Input>
  )
}
