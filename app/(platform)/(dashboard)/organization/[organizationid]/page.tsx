import createBoard from '@/actions/create-board';
import { Button } from '@/components/ui/button';
import db from '@/lib/db';
import { Board } from './_components/board';

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();

  return (
    <div>
      <div>
        <form action={createBoard} className='flex gap-2'>
          <input
            id='title'
            name='title'
            required
            placeholder='Enter a board title'
            className='border border-gray-300 rounded-md p-2 w-full'
          />
          <Button
            type='submit'
            className='bg-blue-500 text-white hover:bg-blue-600'
          >
            Submit
          </Button>
        </form>
      </div>

      {boards &&
        boards.length > 0 &&
        boards.map((board) => (
          <Board key={board.id} title={board.title} id={board.id} />
        ))}
    </div>
  );
};
export default OrganizationIdPage;
