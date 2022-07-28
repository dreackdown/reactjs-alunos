import { Flex, Heading, Text } from '@chakra-ui/react'
import { api } from '../../Services/api'
import { Formulario } from '../Formulario/Formulario'
import { Header } from '../Header/Header'
import { useQuery } from 'react-query'
import { Botao } from '../Botao/Botao'
import { FiEdit, FiUserX } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'

export const Alunos = () => {
  const history = useHistory()

  async function fetchAlunos() {
    return api.get('/alunos').then(res => res.data)
  }

  async function editAluno(id) {
    try {
      history.push(`aluno/novo/${id}`)
    } catch (error) {
      alert('Não foi possível editar o Aluno')
    }
  }

  const { data, isLoading } = useQuery('alunos', fetchAlunos)

  if (isLoading) {
    return <div>Carregando...</div>
  }

  return (
    <Flex w="100%" px="15px" mt="20px" direction="column" h="800px">
      <Header />
      <Formulario />
      <Heading mt="20px" mb="20px">
        Relação de Alunos
      </Heading>
      <Flex flexWrap="wrap" gap={5}>
        {data.map(aluno => (
          <Flex
            justify="space-around"
            alignItems="center"
            bg="teal.500"
            w="725px"
            borderRadius={10}
            p="10px"
            color={'black'}
            key={aluno.id}
          >
            <Flex direction="column">
              <Flex gap="5px">
                <Text as="b">Nome:</Text>
                <Text>{aluno.nome}</Text>
              </Flex>
              <Flex gap="5px">
                <Text as="b">Email:</Text>
                <Text>{aluno.email}</Text>
              </Flex>
              <Flex gap="5px">
                <Text as="b">Idade:</Text>
                <Text>{aluno.idade}</Text>
              </Flex>
            </Flex>
            <Flex direction="column" gap="10px">
              <Botao aoClicar={() => editAluno(aluno.id)}>
                <FiEdit size={25} />
              </Botao>
              <Botao>
                <FiUserX size={25} />
              </Botao>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}
