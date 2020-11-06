import React, { FormEvent } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { Auth } from 'aws-amplify'
import {
  useToast,
  VStack,
  Input,
  Button,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/core'

export type LoginFormType = {
  username: string
  password: string
}

const schema = yup.object().shape({
  username: yup.string().email().required(),
  password: yup.string().required(),
})

export function LoginForm() {
  const toast = useToast()
  const navigate = useNavigate()
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  })

  function toRegister() {
    navigate('/register')
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()

    handleSubmit(async ({ username, password }: LoginFormType) => {
      try {
        const user = await Auth.signIn(username, password)
        toast({
          title: 'Login success.',
          description: 'Welcome.',
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        navigate('/dashboard')
        console.log(user)
      } catch (error) {
        console.log('Error signing in', error)
      }
    })(e)
  }

  return (
    <VStack
      as="form"
      onSubmit={onSubmit}
      spacing="1.25rem"
      align="flex-start"
    >
      <FormControl isInvalid={errors.username}>
        <FormLabel htmlFor="username">Email</FormLabel>
        <Input name="username" ref={register} />
        <FormErrorMessage>
          {errors.username && errors.username.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.password}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input type="password" name="password" ref={register} />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>

      <Button type="submit" size="sm" colorScheme="green" w="100%">
        Login
      </Button>
      <Button
        type="button"
        size="sm"
        variant="outline"
        colorScheme="green"
        w="100%"
        onClick={toRegister}
      >
        Register
      </Button>
    </VStack>
  )
}
