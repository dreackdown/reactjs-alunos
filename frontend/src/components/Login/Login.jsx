import { Flex, Heading, Stack } from '@chakra-ui/react'

import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Imagem } from '../Imagem/Imagem.jsx'
import { Botao } from '../Botao/Botao'
import { PasswordInput } from '../PasswordInput/PasswordInput.jsx'
import { useAuth } from '../../Hooks/auth.jsx'
import { Campo } from '../Campo/Campo.jsx'

export const Login = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

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
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Cadastro de Alunos</Heading>
          <form onSubmit={login}>
            <Campo
              valor={email}
              aoAlterado={valor => setEmail(valor)}
              placeholder="user@email.com"
              type="email"
              size="lg"
              variant="filled"
              mb={4}
            />
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
