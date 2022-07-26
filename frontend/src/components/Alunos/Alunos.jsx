import { Flex, Heading, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { api } from '../../Services/api'
import { FiEdit, FiUserX } from 'react-icons/fi'
import { Botao } from '../Botao/Botao'
import { Formulario } from '../Formulario/Formulario'
import { Header } from '../Header/Header'
import { useQuery } from 'react-query'
import { Aluno } from '../Aluno/Aluno'

export const Alunos = () => {
  const [alunos, setAlunos] = useState([])
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
      {data.map(aluno => (
        <Aluno
          key={aluno.id}
          nome={aluno.nome}
          email={aluno.email}
          idade={aluno.idade}
        />
      ))}
    </Flex>
  )
}
