import React, { useState, useEffect } from 'react'
import { Skeleton, Flex, Button } from '@chakra-ui/core'

import { listTodos } from 'graphql/queries'
import callGraphQL from 'utils/graphql'
import Todo, { mapListTodosQuery } from 'models/todo'
import { ListTodosQuery } from 'API'

import { TodoItem } from './Item'

export function TodoList() {
  const [isLoaded, setLoaded] = useState<boolean>(false)
  const [todos, setTodos] = useState<Todo[]>([])

  async function getData() {
    try {
      setLoaded(false)
      const todoData = await callGraphQL<ListTodosQuery>(listTodos)
      const todos = mapListTodosQuery(todoData)

      setTodos(todos)
    } catch (error) {
      console.error('Error fetching todos', error)
    } finally {
      setLoaded(true)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Flex my="0.5rem">
        <Button variant="ghost" colorScheme="blue" onClick={() => getData()}>
          Refresh
        </Button>
      </Flex>
      {!isLoaded && <Skeleton width="100%" height="70px" />}
      {isLoaded &&
        todos.map((todo, idx) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            isLast={idx === todos.length - 1}
          />
        ))}
    </div>
  )
}
