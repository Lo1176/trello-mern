import deleteBoard from '@/actions/delete-board';
import { Button } from '@/components/ui/button';

interface BoardProps {
  title: string;
  id: string;
}

export const Board = ({ title, id }: BoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <form
      action={deleteBoardWithId}
      className='flex items-center gap-2 border-b border-gray-200 py-2'
    >
      <p>Board title: {title}</p>
      <Button type='submit' variant='destructive' size='sm'>
        Delete
      </Button>
    </form>
  );
};
