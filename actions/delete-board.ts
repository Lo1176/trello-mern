'use server';

import db from '@/lib/db';
import { revalidatePath } from 'next/cache';

const { organizationId } = process.env;

export default async function deleteBoard(id: string) {
  await db.board.delete({
    where: {
      id,
    },
  });
  revalidatePath(`/organization/${organizationId}`);
}
