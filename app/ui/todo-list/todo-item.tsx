'use client'

import React from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { TodoItemProps } from '@/app/types/todo-item'

export default function TodoItem({
  id,
  complete,
  text,
  toggleComplete,
  textChange,
  deleteItem
}: TodoItemProps) {
  return (
    <div>
      <Checkbox checked={complete} onCheckedChange={() => toggleComplete(id)} />
      <Input value={text} onChange={(e) => textChange(e.target.value, id)} />
      <Button onClick={() => deleteItem(id)}>X</Button>
    </div>
  )
}
