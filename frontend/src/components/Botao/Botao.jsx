import { Button } from '@chakra-ui/react'

export const Botao = ({
  children,
  colorScheme,
  size,
  mt,
  w,
  type,
  variant,
  aoClicar
}) => {
  return (
    <Button
      type={type}
      w={w}
      mt={mt}
      size={size}
      onClick={aoClicar}
      colorScheme={colorScheme}
      variant={variant}
    >
      {children}
    </Button>
  )
}
