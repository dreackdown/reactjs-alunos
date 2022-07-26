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
      <Flex justify="space-around" w="50%" alignItems="center">
        <Flex direction="column">
          <Flex gap="5px">
            <Text as="b">Nome:</Text>
            <Text>Hugo Faria</Text>
          </Flex>
          <Flex gap="5px">
            <Text as="b">Email:</Text>
            <Text>hugofaria157@live.com</Text>
          </Flex>
          <Flex gap="5px">
            <Text as="b">Idade:</Text>
            <Text>24</Text>
          </Flex>
        </Flex>
        <Flex direction="column" gap="10px">
          <Botao>
            <FiEdit size={25} color="#17202a" />
          </Botao>
          <Botao>
            <FiUserX size={25} color="#17202a" />
          </Botao>
        </Flex>
      </Flex>
    </Flex>
  )
}
