import db from '@/lib/db';
import { Board } from './_components/board';
import { Form } from './_components/form';

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();

  return (
    <div>
      <div>
        <Form />
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
