import { Botao } from '../Botao/Botao'
import { SearchInput } from '../SearchInput/SearchInput'

export const Formulario = props => {
  return (
    <form>
      <SearchInput />
      <Botao w="100%" mt="20px" colorScheme={'teal'} size="lg">
        Filtrar aluno por nome (parcial)
      </Botao>
    </form>
  )
}
