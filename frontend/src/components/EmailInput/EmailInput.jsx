import { Input, FormControl } from '@chakra-ui/react'

export const EmailInput = props => {
  const aoDigitado = e => {
    props.aoAlterado(e.target.value)
  }
  return (
    <Input
      value={props.valor}
      onChange={aoDigitado}
      placeholder="user@email.com"
      type="email"
      size="lg"
      variant="filled"
      mb={4}
    />
  )
}
