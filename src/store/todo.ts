import { atom } from 'recoil'

import Todo from 'models/todo'

export const todoStore = atom<Todo[]>({
  key: 'todoStore',
  default: [],
})
