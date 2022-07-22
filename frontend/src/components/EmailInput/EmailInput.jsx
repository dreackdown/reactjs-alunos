import { Input, FormControl } from '@chakra-ui/react'

export const EmailInput = () => {
  return (
    <FormControl mt="20px">
      <Input
        placeholder="user@email.com"
        type="email"
        size="lg"
        variant="filled"
        mb={3}
      />
    </FormControl>
  )
}
