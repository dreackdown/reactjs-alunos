import {
  Flex,
  Heading,
  UnorderedList,
  GridItem,
  ListItem,
  Text
} from '@chakra-ui/react'

import { FiEdit, FiUserX } from 'react-icons/fi'
import { Botao } from '../Botao/Botao'
import { Formulario } from '../Formulario/Formulario'
import { Header } from '../Header/Header'
import { Grid } from '@chakra-ui/react'

export const Alunos = () => {
  return (
    <Flex w="100%" px="15px" mt="20px" direction="column">
      <Header />
      <Formulario />
      <Heading mt="20px" mb="20px">
        Relação de Alunos
      </Heading>
      <UnorderedList bg="#ffffff">
        <ListItem style={{ listStyle: 'none' }}>
          <Text as="b">Nome:</Text>Hugo Faria<br></br>
          <Text as="b">Email:</Text>hugofaria157@live.com<br></br>
          <Text as="b">Idade:</Text>24<br></br>
          <Botao>
            <FiEdit size={25} color="#17202a" />
          </Botao>
          <Botao>
            <FiUserX size={25} color="#17202a" />
          </Botao>
        </ListItem>
      </UnorderedList>
    </Flex>
  )
}
