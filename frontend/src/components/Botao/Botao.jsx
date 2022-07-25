import { Button } from '@chakra-ui/react'

export const Botao = ({ children, colorScheme, size, mt, w }) => {
  return (
    <Button w={w} mt={mt} size={size} colorScheme={colorScheme}>
      {children}
    </Button>
  )
}
