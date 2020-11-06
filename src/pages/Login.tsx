import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { VStack, Heading } from '@chakra-ui/core'

import { AuthContext } from 'context/Auth'
import { LoginForm } from 'components/form/Login'
import { DefaultLayout } from 'components/layouts/Default'

export function Login() {
  const navigate = useNavigate()
  const auth = useContext(AuthContext)

  useEffect(() => {
    if (auth.state === 'signedIn') navigate('/dashboard')
  }, [auth, navigate])

  return (
    <DefaultLayout>
      <VStack
        mx="auto"
        maxW="360px"
        h="100%"
        spacing="1.2em"
        justify="center"
      >
        <Heading size="md">Welcome</Heading>
        <LoginForm />
      </VStack>
    </DefaultLayout>
  )
}
