import { useAuth } from '../../Hooks/auth.jsx'
import { Text, CloseButton, Flex, Grid, GridItem } from '@chakra-ui/react'
import { FiClipboard } from 'react-icons/fi'
import { Botao } from '../Botao/Botao'
import { Link, useHistory } from 'react-router-dom'

export const Header = () => {
  const email = localStorage.getItem('email')
  const history = useHistory()
  const { signout } = useAuth()

  async function logout() {
    try {
      await signout()
      history.push('/')
    } catch (error) {
      alert('Erro ao deslogar')
    }
  }

  return (
    <Flex as="header" w="100%" align="center">
      <Grid w="100%" templateColumns="repeat(4, 1fr)">
        <GridItem
          gridColumn="1"
          justifySelf="initial"
          display="flex"
          w="80%"
          alignItems="center"
          justifyContent="space-between"
        >
          <FiClipboard size="50px" />
          <Text as="span" fontSize="20px">
            Bem-Vindo, <Text as="strong">{email}</Text>!
          </Text>
        </GridItem>
        <GridItem
          gridColumn="4"
          justifySelf="initial"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Link to="aluno/novo/0" style={{ textDecoration: 'none' }}>
            <Botao w="250px" colorScheme="teal" size="lg" textDecoration="none">
              Novo Aluno
            </Botao>
          </Link>
          <CloseButton size="lg" onClick={logout} />
        </GridItem>
      </Grid>
    </Flex>
  )
}
