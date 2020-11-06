import React, { FormEvent } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
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

export type ConfirmFormType = {
  code: string
}

const schema = yup.object().shape({
  code: yup.string().length(6).required(),
})

type PropsType = {
  email: string
}

export function ConfirmForm({ email }: PropsType) {
  const toast = useToast()
  const navigate = useNavigate()
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  })

  async function onSubmit(e: FormEvent) {
    e.preventDefault()

    handleSubmit(async ({ code }: ConfirmFormType) => {
      try {
        await Auth.confirmSignUp(email, code)
        toast({
          title: 'Register confirmed.',
          description: 'Email verified.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        navigate('../login')
      } catch (error) {
        console.log('Error signing in', error)
      }
    })(e)
  }

  return (
    <VStack as="form" onSubmit={onSubmit} spacing="1rem" align="flex-start">
      <FormControl isInvalid={errors.code}>
        <FormLabel htmlFor="code">Code</FormLabel>
        <Input name="code" ref={register} />
        <FormErrorMessage>
          {errors.code && errors.code.message}
        </FormErrorMessage>
      </FormControl>

      <Button type="submit" size="sm" colorScheme="green" w="100%">
        Submit
      </Button>
    </VStack>
  )
}
