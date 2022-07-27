import { Flex, Heading } from '@chakra-ui/react'
import { api } from '../../Services/api'
import { Formulario } from '../Formulario/Formulario'
import { Header } from '../Header/Header'
import { useQuery } from 'react-query'
import { Aluno } from '../Aluno/Aluno'

export const Alunos = () => {
  async function fetchAlunos() {
    return api.get('/alunos').then(res => res.data)
  }

  const { data, isLoading } = useQuery('alunos', fetchAlunos)

  if (isLoading) {
    return <div>Carregando...</div>
  }

  return (
    <Flex w="100%" px="15px" mt="20px" direction="column">
      <Header />
      <Formulario />
      <Heading mt="20px" mb="20px">
        Relação de Alunos
      </Heading>
      <Flex justify="space-around">
        {data.map(aluno => (
          <Aluno
            key={aluno.id}
            nome={aluno.nome}
            email={aluno.email}
            idade={aluno.idade}
          />
        ))}
      </Flex>
    </Flex>
  )
}
