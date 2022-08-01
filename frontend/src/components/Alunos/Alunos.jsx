import { useState } from 'react'
import { useAuth } from '../../Hooks/auth.jsx'
import { Flex, Heading, Text, CloseButton } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { FiEdit, FiUserX } from 'react-icons/fi'
import { FiClipboard } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import { api } from '../../Services/api'
import { Botao } from '../Botao/Botao'
import { Campo } from '../Campo/Campo'

export const Alunos = () => {
  const email = localStorage.getItem('email')
  const history = useHistory()
  const { signout } = useAuth()
  const [searchInput, setSearchInput] = useState('')
  const [filtro, setFiltro] = useState([])

  async function fetchAlunos() {
    return api.get('/alunos').then(res => res.data)
  }

  const { data, isLoading } = useQuery('alunos', fetchAlunos)

  if (isLoading) {
    return <div>Carregando...</div>
  }

  const searchAlunos = searchValue => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
      const dadosFiltrados = data.filter(aluno => {
        return Object.values(aluno)
          .join('')
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      })
      setFiltro(dadosFiltrados)
    } else {
      setFiltro(data)
    }
  }

  async function editAluno(id) {
    try {
      history.push(`aluno/novo/${id}`)
    } catch (error) {
      alert('Não foi possível editar o Aluno')
    }
  }

  // async function deleteAluno(id) {
  //   try {
  //     if (window.confirm(`Deseja realmente excluir o aluno?`)) {
  //       await api.delete(`/alunos/${id}`)
  //       setAlunos(alunos.filter(aluno => aluno._id !== id))
  //     }
  //   } catch (error) {
  //     alert('Não foi possível deletar o Aluno')
  //   }
  // }

  async function logout() {
    try {
      await signout()
      history.push('/')
    } catch (error) {
      alert('Erro ao deslogar')
    }
  }

  return (
    <Flex direction="column" w="100vw" alignItems="center" bg="whiteAlpha.600">
      <Flex
        as="header"
        width="95%"
        align="center"
        height="150px"
        justify="space-between"
      >
        <Flex justify="start" alignItems="center" gap="20px">
          <FiClipboard size="75px" color="black" />
          <Text as="span" fontSize="25px" color="black">
            Bem-Vindo, <Text as="strong">{email}</Text>!
          </Text>
        </Flex>
        <Flex justify="end" alignItems="center" gap="20px">
          <Link to="aluno/novo/0" style={{ textDecoration: 'none' }}>
            <Botao
              w="350px"
              h="70px"
              colorScheme="blackAlpha"
              size="lg"
              textDecoration="none"
            >
              Novo Aluno
            </Botao>
          </Link>
          <CloseButton size="lg" onClick={logout} />
        </Flex>
      </Flex>
      <Campo
        w="95%"
        variant="filled"
        placeholder="Nome"
        size="lg"
        aoAlterado={searchAlunos}
      />
      <Flex w="95%">
        <Heading my="30px">Relação de Alunos</Heading>
      </Flex>
      <Flex w="90%" px="15px" mt="20px" direction="column">
        {searchInput.length > 1 ? (
          <Flex flexWrap="wrap" gap={5}>
            {filtro.map(aluno => (
              <Flex
                justify="space-around"
                alignItems="center"
                bg="blackAlpha.500"
                w="700px"
                borderRadius={10}
                p="10px"
                color="black"
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
                    <FiEdit color="black" size={25} />
                  </Botao>
                  <Botao>
                    <FiUserX color="black" size={25} />
                  </Botao>
                </Flex>
              </Flex>
            ))}
          </Flex>
        ) : (
          <Flex flexWrap="wrap" justify="center" gap={5}>
            {data.map(aluno => (
              <Flex
                justify="space-around"
                alignItems="center"
                bg="blackAlpha.500"
                w="800px"
                h="150px"
                borderRadius={10}
                p="10px"
                color="black"
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
                    <FiEdit color="black" size={25} />
                  </Botao>
                  <Botao>
                    <FiUserX color="black" size={25} />
                  </Botao>
                </Flex>
              </Flex>
            ))}
          </Flex>
        )}
      </Flex>
    </Flex>
  )
}
