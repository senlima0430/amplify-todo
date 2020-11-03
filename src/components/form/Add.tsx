import React, { FormEvent } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  VStack,
  Input,
  Button,
  Textarea,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/core'

import callGraphQL from 'utils/graphql'
import { createTodo } from 'graphql/mutations'
import {
  CreateTodoInput,
  CreateTodoMutation,
  CreateTodoMutationVariables,
} from 'API'

const schema = yup.object().shape({
  name: yup.string().required().max(50),
  description: yup.string().required(),
})

export function AddForm() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  })

  async function onSubmit(e: FormEvent) {
    e.preventDefault()

    handleSubmit((data: CreateTodoInput) => {
      try {
        callGraphQL<CreateTodoMutation>(createTodo, {
          input: data,
        } as CreateTodoMutationVariables)
      } catch (error) {
        console.error('Error creating todo', error)
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
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="name">Title</FormLabel>
        <Input
          name="name"
          placeholder="what you want to do..."
          ref={register}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.description}>
        <FormLabel htmlFor="description">Description</FormLabel>
        <Textarea
          name="description"
          placeholder="anything about that..."
          ref={register}
        />
        <FormErrorMessage>
          {errors.description && errors.description.message}
        </FormErrorMessage>
      </FormControl>

      <Button type="submit" size="sm" colorScheme="green">
        Add
      </Button>
    </VStack>
  )
}
