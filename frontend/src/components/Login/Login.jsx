import { Flex, Heading, Checkbox, Link, Stack, Button } from '@chakra-ui/react'
import { EmailInput } from '../EmailInput/EmailInput.jsx'
import { Imagem } from '../Imagem/Imagem.jsx'
import { Botao } from '../Botao/Botao'
import { PasswordInput } from '../PasswordInput/PasswordInput.jsx'
import { ToggleThemeButton } from '../ToggleThemeButton/ToggleThemeButton.jsx'
import { useAuth } from '../../Hooks/auth.jsx'

export const Login = () => {
  const { signin } = useAuth()
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
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
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.500'}>Forgot password?</Link>
            </Stack>
            <Button
              onClick={() =>
                signin({
                  email: 'mrhugogamer@gmail.com',
                  password: 'Numsey#2022'
                })
              }
            >
              Logar
            </Button>
            <Botao mt="20px" colorScheme="teal" size="lg" onClick={signin}>
              Log in
            </Botao>
            <ToggleThemeButton />
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Imagem />
      </Flex>
    </Stack>
  )
}
