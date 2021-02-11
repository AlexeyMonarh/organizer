import React from 'react'
import Item from '../Item/Item'

export default function ListItems({todos}) {
  return (
    <ul>
      {todos.map(item => <Item key={item.id} {...item} />)}
    </ul>
  )
}