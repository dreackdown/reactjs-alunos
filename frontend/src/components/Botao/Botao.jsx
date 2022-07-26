import { Button } from '@chakra-ui/react'

export const Botao = ({
  children,
  colorScheme,
  size,
  mt,
  w,
  type,
  variant
}) => {
  return (
    <Button
      type={type}
      w={w}
      mt={mt}
      size={size}
      colorScheme={colorScheme}
      variant={variant}
    >
      {children}
    </Button>
  )
}
