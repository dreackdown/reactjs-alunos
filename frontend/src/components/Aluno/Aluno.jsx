import { Flex, Text } from '@chakra-ui/react'
import { Botao } from '../Botao/Botao'
import { FiEdit, FiUserX } from 'react-icons/fi'

export const Aluno = ({ nome, email, idade }) => {
  return (
    <Flex
      justify="space-around"
      w="45%"
      alignItems="center"
      mt="20px"
      bg="teal.500"
      borderRadius={10}
      p="10px"
      color={'black'}
    >
      <Flex direction="column">
        <Flex gap="5px">
          <Text as="b">Nome:</Text>
          <Text>{nome}</Text>
        </Flex>
        <Flex gap="5px">
          <Text as="b">Email:</Text>
          <Text>{email}</Text>
        </Flex>
        <Flex gap="5px">
          <Text as="b">Idade:</Text>
          <Text>{idade}</Text>
        </Flex>
      </Flex>
      <Flex direction="column" gap="10px">
        <Botao>
          <FiEdit size={25} />
        </Botao>
        <Botao>
          <FiUserX size={25} />
        </Botao>
      </Flex>
    </Flex>
  )
}
