import { FiClipboard } from 'react-icons/fi'
import { Text, Link, CloseButton, Flex, Grid, GridItem } from '@chakra-ui/react'
import { Botao } from '../Botao/Botao'

export const Header = () => {
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
            Bem-Vindo, <Text as="strong">Hugo Faria</Text>!
          </Text>
        </GridItem>
        <GridItem
          gridColumn="4"
          justifySelf="initial"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Link to="/aluno/novo" style={{ textDecoration: 'none' }}>
            <Botao w="250px" colorScheme="teal" size="lg" textDecoration="none">
              Novo Aluno
            </Botao>
          </Link>
          <CloseButton />
        </GridItem>
      </Grid>
    </Flex>
  )
}
