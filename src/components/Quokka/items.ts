import { Props } from './renderItem'

type User = {
  email: string
  id: number
}

const users: User[] = [
  { email: 'one', id: 1 },
  { email: 'two', id: 2 },
]

export const items: Props[] = [
  { label: 'users', value: users },
  { label: 'ok', value: ['on', 'two'].map(i => i.toUpperCase()) },
]
