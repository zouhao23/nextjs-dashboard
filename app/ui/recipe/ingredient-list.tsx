import React from 'react'
import Ingredient from './ingredient'
import { IngredientListProps } from '@/app/types/recipe'

export default function IngredientList({ list }: IngredientListProps) {
  return (
    <>
      <ul className="ingredients border-2 border-gray-200">
        {list.map((ingredient, i) => (
          <Ingredient key={i} {...ingredient} />
        ))}
      </ul>
    </>
  )
}
