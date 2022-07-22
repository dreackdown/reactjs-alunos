import { Button, useColorMode } from '@chakra-ui/react'

export const ToggleThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button size="lg" onClick={toggleColorMode}>
      Toggle Theme {colorMode === 'light' ? 'Dark' : 'Light'}
    </Button>
  )
}
