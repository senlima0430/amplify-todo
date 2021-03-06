import { GraphQLResult } from '@aws-amplify/api'

import { ListTodosQuery } from 'API'

interface Todo {
  id?: string
  name?: string
  description?: string
}

function mapListTodosQuery(
  listTodosQuery: GraphQLResult<ListTodosQuery>
): Todo[] {
  return (
    listTodosQuery.data?.listTodos?.items?.map(
      todo =>
        ({
          id: todo?.id,
          name: todo?.name,
          description: todo?.description,
        } as Todo)
    ) || []
  )
}

export default Todo

export { mapListTodosQuery }
