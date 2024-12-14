import { IngredientProps } from '@/app/types/recipe'
import React from 'react'

export default function Ingredient({
  amount,
  measurement,
  name
}: IngredientProps) {
  return (
    <>
      <li>
        {amount} {measurement} {name}
      </li>
    </>
  )
}
