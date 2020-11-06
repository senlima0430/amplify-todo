import React, { ReactNode } from 'react'
import { Box } from '@chakra-ui/core'

import { ColorModeButton } from 'components/common/ColorModeButton'

type PropsType = {
  children: ReactNode
}

export function DefaultLayout({ children }: PropsType) {
  return (
    <>
      <Box pos="absolute" top="1em" right="1em">
        <ColorModeButton />
      </Box>
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
