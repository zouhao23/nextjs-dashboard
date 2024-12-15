'use client'

import TodoItem from '@/app/ui/todo-list/todo-item'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

export default function Page() {
  const [todoItemProps, setTodoItemProps] = useState([
    {
      id: '1',
      text: 'todo 1',
      complete: false
    },
    {
      id: '2',
      text: 'todo 2',
      complete: true
    }
  ])
  function toggleComplete(id: string) {
    console.log('toggle complete')
    todoItemProps.map((item) => {
      if (item.id === id) {
        console.log('found item', item, !item.complete)
      } else {
        console.log('did not find item')
      }
    })
    setTodoItemProps(
      todoItemProps.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : item
      )
    )
  }

  function textChange(newVal: string, id: string) {
    console.log('text change', newVal)
    setTodoItemProps(
      todoItemProps.map((item) =>
        item.id === id ? { ...item, text: newVal } : item
      )
    )
  }

  function deleteItem(id: string) {
    console.log('delete item', id)
    setTodoItemProps(todoItemProps.filter((item) => item.id !== id))
  }

  return (
    <div>
      <div>
        <Button onClick={() => console.log(todoItemProps)}>Log State</Button>
      </div>
      {todoItemProps.map((item, key) => (
        <TodoItem
          key={key}
          {...item}
          toggleComplete={toggleComplete}
          textChange={textChange}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  )
}
