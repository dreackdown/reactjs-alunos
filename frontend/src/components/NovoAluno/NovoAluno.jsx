import { Flex, Heading } from '@chakra-ui/react'
import { FiUserPlus, FiCornerDownLeft } from 'react-icons/fi'
import { Link, useParams } from 'react-router-dom'
import { Botao } from '../Botao/Botao'
import { Campo } from '../Campo/Campo'

export const NovoAluno = () => {
  const { alunoId } = useParams()

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
        p="75px"
        bg="teal.500"
        boxShadow="0 0 100px rgba(0,0,0,0.1)"
        borderRadius="8px"
        justify="space-between"
        align="center"
      >
        <Flex direction="column" alignItems="center" w="auto" gap="40px">
          <FiUserPlus size="105" />
          <Heading as="h3" size="lg">
            {alunoId === '0' ? 'Incluir Novo Aluno' : 'Atualizar Aluno'}
          </Heading>
          <Link to="/alunos">
            <FiCornerDownLeft size="25" />
            Retornar
          </Link>
        </Flex>
        <Flex direction="column" gap="10px" w="55%">
          <Campo placeholder="Nome" variant="filled" />
          <Campo placeholder="Email" variant="filled" />
          <Campo placeholder="Idade" variant="filled" />
          <Botao w={'full'} type="submit">
            {alunoId === '0' ? 'Incluir' : 'Atualizar'}
          </Botao>
        </Flex>
      </Flex>
    </Flex>
  )
}
