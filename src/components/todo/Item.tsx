import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/core'

import Todo from 'models/todo'

type PropsType = {
  todo: Todo
  isLast?: boolean
}

export function TodoItem({ todo, isLast = false }: PropsType) {
  return (
    <Box
      py="0.5rem"
      px="1rem"
      my="1rem"
      borderBottom={isLast ? 'none' : '1px solid white'}
    >
      <Heading size="md">{todo.name ?? 'Untitled'}</Heading>
      <Text noOfLines={3}>{todo.description ?? 'No description'}</Text>
    </Box>
  )
}
