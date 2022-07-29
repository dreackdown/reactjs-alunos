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
  w,
  size,
  focusBorderColor
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
      w={w}
      mb={mb}
      size={size}
      focusBorderColor={focusBorderColor}
    >
      {children}
    </Input>
  )
}
