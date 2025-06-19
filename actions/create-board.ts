import db from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const createBoardSchema = z.object({
  title: z.string().min(1, 'Title is required'),
});

const { organizationId } = process.env;

export default async function createBoard(formData: FormData) {
  'use server';

  const { title } = createBoardSchema.parse({
    title: formData.get('title'),
  });

  await db.board.create({
    data: {
      title,
    },
  });

  // Revalidate the path to update the UI after creating a board instead of using a useEffect
  // This will ensure the page is refreshed with the latest data
  revalidatePath(`/organization/${organizationId}`);
}
