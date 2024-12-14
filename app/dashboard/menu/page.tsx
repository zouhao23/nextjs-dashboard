import React from 'react'
import data from '@/app/data/recipes.json'
import Recipe from '@/app/ui/recipe/recipe'

export default function Page() {

  const formatIngredients = (ingredients: { name: string; amount: number; measurement: string }[]) => {
    return ingredients.map(ingredient => ({
      ...ingredient,
      amount: ingredient.amount.toString()
    }))
  }

  return (
    <div>
       {
        data.map((recipe, index) => (
          <Recipe
            key={index}
            name={recipe.name}
            ingredients={formatIngredients(recipe.ingredients)}
            instructions={recipe.steps || []} // 添加默认值
          />
        ))
       }
    </div>
  )
}
