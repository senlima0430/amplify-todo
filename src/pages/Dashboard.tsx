import React from 'react'
import { Box, useColorMode } from '@chakra-ui/core'

import { DefaultLayout } from 'components/layouts/Default'
import { TodoAdd } from 'components/todo/Add'
import { TodoList } from 'components/todo/List'

export function Dashboard() {
  const { colorMode } = useColorMode()

  return (
    <DefaultLayout>
      <Box
        pos="absolute"
        top="5vh"
        left="50%"
        w="100%"
        transform="translateX(-50%)"
        zIndex="2"
        background={colorMode === 'light' ? 'white' : 'gray.800'}
      >
        <TodoAdd />
      </Box>
      <Box w="100%" pt="calc(5vh + 40px)" maxH="500px">
        <TodoList />
      </Box>
    </DefaultLayout>
  )
}
