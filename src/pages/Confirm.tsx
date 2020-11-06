import React from 'react'
import { VStack, Heading } from '@chakra-ui/core'
import { useLocation } from 'react-router-dom'

import { DefaultLayout } from 'components/layouts/Default'
import { ConfirmForm } from 'components/form/Confirm'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export function Confirm() {
  let query = useQuery()

  return (
    <DefaultLayout>
      <VStack
        mx="auto"
        maxW="360px"
        h="100%"
        spacing="1.2em"
        justify="center"
      >
        <Heading size="md">Verified {query.get('email')}</Heading>
        <ConfirmForm email={query.get('email')} />
      </VStack>
    </DefaultLayout>
  )
}
