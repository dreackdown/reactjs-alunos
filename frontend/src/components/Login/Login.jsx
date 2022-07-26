import {
  Flex,
  Heading,
  Stack,
  Button,
  useColorMode,
  IconButton
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { EmailInput } from '../EmailInput/EmailInput.jsx'
import { Imagem } from '../Imagem/Imagem.jsx'
import { Botao } from '../Botao/Botao'
import { PasswordInput } from '../PasswordInput/PasswordInput.jsx'
import { useAuth } from '../../Hooks/auth.jsx'

export const Login = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { signin } = useAuth()

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <IconButton onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </IconButton>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Cadastro de Alunos</Heading>
          <EmailInput />
          <PasswordInput />
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}
            ></Stack>
            <Link to="/alunos">
              <Button
                w={'full'}
                onClick={() =>
                  signin({
                    email: 'mrhugogamer@gmail.com',
                    password: 'Numsey#2022'
                  })
                }
              >
                Logar
              </Button>
            </Link>
            <Botao mt="20px" colorScheme="teal" size="lg" onClick={signin}>
              Log in
            </Botao>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Imagem />
      </Flex>
    </Stack>
  )
}
