import {
  Flex,
  Heading,
  Stack,
  useColorMode,
  IconButton
} from '@chakra-ui/react'

import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { EmailInput } from '../EmailInput/EmailInput.jsx'
import { Imagem } from '../Imagem/Imagem.jsx'
import { Botao } from '../Botao/Botao'
import { PasswordInput } from '../PasswordInput/PasswordInput.jsx'
import { useAuth } from '../../Hooks/auth.jsx'

export const Login = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const { colorMode, toggleColorMode } = useColorMode()
  const { signin } = useAuth()
  const history = useHistory()

  async function login(e) {
    e.preventDefault()
    try {
      await signin({
        email,
        password
      })
      history.push('/alunos')
    } catch (error) {
      alert('Erro ao logar')
    }
  }

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <IconButton onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </IconButton>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Cadastro de Alunos</Heading>
          <form onSubmit={login}>
            <EmailInput valor={email} aoAlterado={valor => setEmail(valor)} />
            <PasswordInput
              valor={password}
              aoAlterado={valor => setPassword(valor)}
            />
            <Stack spacing={6}>
              <Botao mt="20px" colorScheme="teal" size="lg" type="submit">
                Log in
              </Botao>
            </Stack>
          </form>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Imagem />
      </Flex>
    </Stack>
  )
}
