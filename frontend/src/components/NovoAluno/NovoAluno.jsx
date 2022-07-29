import { Flex, Heading } from '@chakra-ui/react'
import { FiUserPlus, FiCornerDownLeft } from 'react-icons/fi'
import { Link, useParams, useHistory } from 'react-router-dom'
import { api } from '../../Services/api'
import { Botao } from '../Botao/Botao'
import { Campo } from '../Campo/Campo'
import { useEffect, useState } from 'react'

export const NovoAluno = () => {
  const [id, setId] = useState('')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [idade, setIdade] = useState('')

  const { alunoId } = useParams()
  const history = useHistory()

  useEffect(() => {
    if (alunoId === '0') {
      return
    } else {
      loadAluno()
    }
  }, [alunoId])

  async function loadAluno() {
    try {
      const response = await api.get(`/alunos/${alunoId}`)
      setId(response.data.id)
      setNome(response.data.nome)
      setEmail(response.data.email)
      setIdade(response.data.idade)
    } catch (error) {
      alert(error)
      history.push('/alunos')
    }
  }

  async function saveOrUpdate(event) {
    event.preventDefault()
    const data = {
      nome,
      email,
      idade
    }
    try {
      if (alunoId === '0') {
        await api.post('/alunos', data)
      } else {
        data.id = id
        await api.put(`/alunos/${id}`, data)
      }
    } catch (error) {}
    history.push('/alunos')
  }

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
        bg="blackAlpha.500"
        boxShadow="0 0 100px rgba(0,0,0,0.1)"
        borderRadius="8px"
        justify="space-between"
        align="center"
      >
        <Flex direction="column" alignItems="center" w="auto" gap="40px">
          <FiUserPlus color="black" size="105" />
          <Heading as="h3" color="black" size="lg">
            {alunoId === '0' ? 'Incluir Novo Aluno' : 'Atualizar Aluno'}
          </Heading>
          <Link to="/alunos">
            <FiCornerDownLeft color="black" size="25" />
            Retornar
          </Link>
        </Flex>
        <Flex direction="column" gap="10px" w="50%">
          <form onSubmit={saveOrUpdate}>
            <Flex direction="column" gap="10px">
              <Campo
                placeholder="Nome"
                variant="filled"
                valor={nome}
                aoAlterado={valor => setNome(valor)}
              />
              <Campo
                placeholder="Email"
                variant="filled"
                valor={email}
                aoAlterado={valor => setEmail(valor)}
              />
              <Campo
                placeholder="Idade"
                variant="filled"
                valor={idade}
                aoAlterado={valor => setIdade(valor)}
              />
              <Botao w={'full'} colorScheme="blackAlpha" type="submit">
                {alunoId === '0' ? 'Incluir' : 'Atualizar'}
              </Botao>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </Flex>
  )
}
