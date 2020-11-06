import React, { FormEvent } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import {
  VStack,
  Input,
  Button,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/core'

export type RegisterFormType = {
  email: string
  password: string
  passwordConfirmation: string
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

export function RegisterForm() {
  const navigate = useNavigate()
  const { register, handleSubmit, errors, watch } = useForm({
    resolver: yupResolver(schema),
  })

  async function onSubmit(e: FormEvent) {
    e.preventDefault()

    handleSubmit(async ({ email, password }: RegisterFormType) => {
      try {
        const { user, userConfirmed } = await Auth.signUp({
          username: email,
          password,
          attributes: {
            email,
          },
        })

        if (!userConfirmed) {
          navigate(`confirm?email=${email}`)
        }

        console.log(user)
        console.log('===========')
        console.log(userConfirmed)
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
      <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input name="email" ref={register} />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.password}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input type="password" name="password" ref={register} />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.passwordConfirmation}>
        <FormLabel htmlFor="passwordConfirmation">Confirm Password</FormLabel>
        <Input
          type="password"
          name="passwordConfirmation"
          ref={register({
            validate: value =>
              value === watch('password') || "Password don't match",
          })}
        />
        <FormErrorMessage>
          {errors.passwordConfirmation && errors.passwordConfirmation.message}
        </FormErrorMessage>
      </FormControl>

      <Button type="submit" size="sm" colorScheme="green" w="100%">
        Submit
      </Button>

      <button
        type="button"
        onClick={() => navigate(`confirm?email=aden0430@outlook.com`)}
      >
        test
      </button>
    </VStack>
  )
}
