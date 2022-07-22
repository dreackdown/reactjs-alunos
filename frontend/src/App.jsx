import { ChakraProvider } from '@chakra-ui/react'
import { Login } from './components/Login/Login'

export const App = () => {
  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  )
}
