'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

const isInvalidText = (text) => {
  return !text || text.trim() === ''
}

export const shareMeal = async (prevState, formData) => {

  const meal = {
    title: formData.get('title'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
    summary: formData.get('summary'),
    image: formData.get('image'),
    instructions: formData.get('instructions')
  }

  if (isInvalidText(meal.title)
    || isInvalidText(meal.summary)
    || isInvalidText(meal.instructions)
    || isInvalidText(meal.creator)
    || isInvalidText(meal.creator_email)
    || !meal.creator_email.includes('@')
    || !meal.image || meal.image.size === 0
  ) {
    return {
      message: "Invalid input.",

    };

  }
  await saveMeal(meal);
  redirect('/meals');
}