import { Input, Button } from '@chakra-ui/react'
import { useState } from 'react'

export const PasswordInput = ({ valor, aoAlterado }) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const aoDigitado = e => {
    aoAlterado(e.target.value)
  }

  return (
    <>
      <Input
        placeholder="*******"
        variant="filled"
        onChange={aoDigitado}
        value={valor}
        type={show ? 'text' : 'password'}
        size="lg"
        pr="4.5rem"
        mb={4}
      />
      <Button h="1.75rem" size="sm" onClick={handleClick}>
        {show ? 'Hide' : 'Show'}
      </Button>
    </>
  )
}
