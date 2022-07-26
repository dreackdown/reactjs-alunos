import { Flex, Text, Container, Input } from '@chakra-ui/react'
import { FiUserPlus, FiCornerDownLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Botao } from '../Botao/Botao'
import { Campo } from '../Campo/Campo'

export const NovoAluno = () => {
  return (
    <Flex
      h="100vh"
      w="100%"
      maxWidth="1120px"
      my="0"
      mx="auto"
      align="center"
      justify="space-between"
    >
      <Flex
        w="100%"
        p="94px"
        bg="teal.500"
        boxShadow="0 0 100px rgba(0,0,0,0.1)"
        borderRadius="8px"
        justify="space-between"
        align="center"
      >
        <Flex direction="column" alignItems="center" w="50%" gap="40px">
          <FiUserPlus size="105" />
          <Text>Texto</Text>
          <Link to="/alunos">
            <FiCornerDownLeft size="25" />
            Retornar
          </Link>
        </Flex>
        <Flex w="50%" justifyContent="center">
          <form>
            <Flex direction="column" gap="10px">
              <Campo placeholder="Nome" variant="filled" />
              <Campo placeholder="Email" variant="filled" />
              <Campo placeholder="Idade" variant="filled" />
              <Botao w={'full'} type="submit">
                Criar
              </Botao>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </Flex>
  )
}
