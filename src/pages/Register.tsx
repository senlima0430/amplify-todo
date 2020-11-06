import React from 'react'
import { VStack, Heading } from '@chakra-ui/core'

import { RegisterForm } from 'components/form/Register'
import { DefaultLayout } from 'components/layouts/Default'

export function Register() {
  return (
    <DefaultLayout>
      <VStack
        mx="auto"
        maxW="360px"
        h="100%"
        spacing="1.2em"
        justify="center"
      >
        <Heading size="md">Come to take a note</Heading>
        <RegisterForm />
      </VStack>
    </DefaultLayout>
  )
}
