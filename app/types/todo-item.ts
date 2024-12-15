interface TodoItemProps {
  id: string
  text: string
  complete: boolean
  toggleComplete: (id: string) => void
  textChange: (text: string, id: string) => void
  deleteItem: (id: string) => void
}

export type { TodoItemProps }
