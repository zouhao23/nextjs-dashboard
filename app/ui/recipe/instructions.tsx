import { InstructionsProps } from '@/app/types/recipe'
import React from 'react'

export default function Instructions({ title, steps }: InstructionsProps) {
  return (
    <>
      <section className="instructions border-2 border-blue-500">
        <h2>{title}</h2>
        {steps.map((step, i) => (
          <p key={i}>{step}</p>
        ))}
      </section>
    </>
  )
}
