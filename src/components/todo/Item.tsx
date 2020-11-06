import React from 'react'
import { Box, Heading, Text, useColorMode } from '@chakra-ui/core'

import Todo from 'models/todo'

type PropsType = {
  todo: Todo
  isLast?: boolean
}

export function TodoItem({ todo, isLast = false }: PropsType) {
  const { colorMode } = useColorMode()

  return (
    <Box
      py="1.5rem"
      px="1rem"
      borderBottom={
        isLast
          ? 'none'
          : `1px solid ${colorMode === 'light' ? 'black' : 'white'}`
      }
    >
      <Heading size="md">{todo.name ?? 'Untitled'}</Heading>
      <Text noOfLines={3}>{todo.description ?? 'No description'}</Text>
    </Box>
  )
}
