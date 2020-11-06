import React, { ReactNode, useContext } from 'react'
import { VStack, Box } from '@chakra-ui/core'

import { AuthContext } from 'context/Auth'
import { LogoutButton } from 'components/common/LogoutButton'
import { ColorModeButton } from 'components/common/ColorModeButton'

type PropsType = {
  children: ReactNode
}

export function DefaultLayout({ children }: PropsType) {
  const auth = useContext(AuthContext)

  return (
    <>
      <VStack pos="absolute" top="1em" right="1em" spacing="10px">
        <ColorModeButton />
        {auth.state === 'signedIn' && <LogoutButton />}
      </VStack>
      <Box
        mx="auto"
        h="100vh"
        w={{ base: '90%', md: '75%' }}
        maxW={{ base: '375px', md: '768px' }}
        pos="relative"
      >
        {children}
      </Box>
    </>
  )
}
