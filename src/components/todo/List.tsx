import React, { useState, useEffect } from 'react'
import { Skeleton, Flex, Button } from '@chakra-ui/core'
import { useRecoilState } from 'recoil'

import { todoStore } from 'store/todo'
import { listTodos } from 'graphql/queries'
import callGraphQL from 'utils/graphql'
import { mapListTodosQuery } from 'models/todo'
import { ListTodosQuery } from 'API'

import { TodoItem } from './Item'

export function TodoList() {
  const [isLoaded, setLoaded] = useState<boolean>(false)
  const [todos, setTodos] = useRecoilState(todoStore)

  useEffect(() => {
    ;(async () => {
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
    })()
  }, [setTodos])

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
