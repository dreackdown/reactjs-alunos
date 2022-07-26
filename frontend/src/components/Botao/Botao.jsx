import { Button } from '@chakra-ui/react'

export const Botao = ({
  children,
  colorScheme,
  size,
  mt,
  w,
  h,
  type,
  variant,
  aoClicar,
  style
}) => {
  return (
    <Button
      type={type}
      h={h}
      w={w}
      mt={mt}
      size={size}
      onClick={aoClicar}
      colorScheme={colorScheme}
      variant={variant}
      style={style}
    >
      {children}
    </Button>
  )
}
