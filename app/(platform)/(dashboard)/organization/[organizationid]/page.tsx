import { db } from '@/lib/db';

const OrganizationIdPage = () => {
  // const user = await currentUser();
  // const { userId } = useAuth();
  // console.log('🚀 ~ OrganizationPage ~ userId:', userId?.sessionId);
  async function create(formData: FormData) {
    'use server';
    const title = formData.get('title') as string;
    await db.board.create({
      data: {
        title,
      },
    });
  }

  return (
    <div>
      <form action={create} className='flex flex-col gap-4'>
        <input
          id='title'
          name='title'
          required
          placeholder='Enter a board title'
          className='border border-gray-300 rounded-md p-2 w-full'
        />
      </form>
    </div>
  );
};
export default OrganizationIdPage;
