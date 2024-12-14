import React from 'react'
import IngredientList from './ingredient-list'
import Instructions from './instructions'
import { RecipeProps } from '@/app/types/recipe'

export default function Recipe({
  name,
  ingredients,
  instructions
}: RecipeProps) {
  return (
    <>
      <section>
        <h1>{name}</h1>
        <IngredientList list={ingredients} />
        <Instructions title="Cooking Instrunctions" steps={instructions} />
      </section>
    </>
  )
}
