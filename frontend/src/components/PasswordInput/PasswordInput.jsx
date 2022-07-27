import { Input, FormControl, Button } from '@chakra-ui/react'
import { useState } from 'react'

export const PasswordInput = props => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const aoDigitado = e => {
    props.aoAlterado(e.target.value)
  }

  return (
    <>
      <Input
        value={props.valor}
        onChange={aoDigitado}
        pr="4.5rem"
        type={show ? 'text' : 'password'}
        size="lg"
        placeholder="*******"
        variant="filled"
        mb={4}
      />
      <Button h="1.75rem" size="sm" onClick={handleClick}>
        {show ? 'Hide' : 'Show'}
      </Button>
    </>
  )
}
