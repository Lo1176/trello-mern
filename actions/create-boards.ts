import db from '@/lib/db';

export default async function createBoard(formData: FormData) {
  'use server';
  const title = formData.get('title') as string;
  await db.board.create({
    data: {
      title,
    },
  });
}
