interface RecipeProps {
  name: string
  ingredients: Array<IngredientProps>
  instructions: string[]
}

interface InstructionsProps {
  title: string
  steps: Array<string>
}

interface IngredientProps {
  amount: string
  measurement: string
  name: string
}

interface IngredientListProps {
  list: Array<IngredientProps>
}

export type { RecipeProps, InstructionsProps, IngredientProps, IngredientListProps }
