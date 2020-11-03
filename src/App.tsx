import React from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react'

import { DefaultLayout } from 'components/layouts/Default'
import { TodoList } from 'components/todo/List'
import { TodoAdd } from 'components/todo/Add'

function App() {
  return (
    <DefaultLayout>
      <TodoAdd />
      <TodoList />
    </DefaultLayout>
  )
}

export default withAuthenticator(App)
