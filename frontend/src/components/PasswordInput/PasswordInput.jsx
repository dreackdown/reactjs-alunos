import { Input, FormControl, Button } from '@chakra-ui/react'
import { useState } from 'react'

export const PasswordInput = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <FormControl>
      <Input
        pr="4.5rem"
        type={show ? 'text' : 'password'}
        size="lg"
        placeholder="*******"
        variant="filled"
        mb={3}
      />
      <Button h="1.75rem" size="sm" onClick={handleClick}>
        {show ? 'Hide' : 'Show'}
      </Button>
    </FormControl>
  )
}
