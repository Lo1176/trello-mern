'use server';

import db from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export type State = {
  message: string | null;
  error?: {
    title?: string[];
  };
};

const createBoardSchema = z.object({
  title: z.string().min(3, 'A minimum of 3 letters is required'),
});

const { organizationId } = process.env;

export default async function createBoard(
  prevState: State,
  formData: FormData
) {
  const validatedFiled = createBoardSchema.safeParse({
    title: formData.get('title'),
  });

  if (!validatedFiled.success) {
    return {
      ...prevState,
      error: validatedFiled.error.flatten().fieldErrors,
      message: 'missing fields. Please try again! 😃',
    };
  }

  const { title } = validatedFiled.data;

  try {
    await db.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    console.error('Error creating board:', error);
    return {
      ...prevState,
      message: 'Failed to create board. Please try again later.',
      error: {
        title: ['Failed to create board. Please try again later.'],
      },
    };
  }

  // Revalidate the path to update the UI after creating a board instead of using a useEffect
  // This will ensure the page is refreshed with the latest data
  revalidatePath(`/organization/${organizationId}`);
  redirect(`/organization/${organizationId}`);
  return {
    message: 'Board created successfully!',
    error: {},
  };
}
