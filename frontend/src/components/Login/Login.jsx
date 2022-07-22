import { Flex, Heading } from '@chakra-ui/react'
import { EmailInput } from '../EmailInput/EmailInput.jsx'
import { LoginButton } from '../LoginButton/LoginButton.jsx'
import { PasswordInput } from '../PasswordInput/PasswordInput.jsx'
import { ToggleThemeButton } from '../ToggleThemeButton/ToggleThemeButton.jsx'

export const Login = () => {
  return (
    <>
      <Flex align="center" justify="center" height="100vh">
        <Flex direction="column" background="green." p={12} rounded={6}>
          <Heading mb={6}>Log in</Heading>
          <ToggleThemeButton />
          <EmailInput />
          <PasswordInput />
          <LoginButton />
        </Flex>
      </Flex>
    </>
  )
}
