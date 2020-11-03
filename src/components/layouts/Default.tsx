import React, { ReactNode } from 'react'
import { Box } from '@chakra-ui/core'

type PropsType = {
  children: ReactNode
}

export function DefaultLayout({ children }: PropsType) {
  return (
    <Box
      mx="auto"
      h="100vh"
      w={{ base: '90%', md: '75%' }}
      maxW={{ base: '375px', md: '768px' }}
    >
      {children}
    </Box>
  )
}
