import React from 'react'
import { useNavigate } from 'react-router-dom'
import { VStack, Image, Text, Button } from '@chakra-ui/core'

import { DefaultLayout } from 'components/layouts/Default'
import note from 'assets/noted.svg'

export function Home() {
  const navigate = useNavigate()

  return (
    <DefaultLayout>
      <VStack spacing="1em" h="100vh" justify="center">
        <Image src={note} alt="Note" w="300px" />
        <Text mb="1em">note app</Text>
        <Button
          w="100px"
          size="sm"
          colorScheme="green"
          onClick={() => navigate('login')}
        >
          Login
        </Button>
        <Button
          w="100px"
          size="sm"
          colorScheme="green"
          onClick={() => navigate('register')}
        >
          Register
        </Button>
      </VStack>
    </DefaultLayout>
  )
}
