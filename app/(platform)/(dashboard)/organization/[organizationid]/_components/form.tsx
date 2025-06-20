'use client';

import createBoard, { State } from '@/actions/create-board';
import { Button } from '@/components/ui/button';
import { useActionState } from 'react';

export const Form = () => {
  const initialState: State = { message: null, error: {} };
  const [state, dispatch] = useActionState(createBoard, initialState);
  // The useActionState hook is used to manage the state of the form submission
  // it replaces useFormState and allows for better handling of server actions in Next.js.

  return (
    <form action={dispatch} className='flex gap-2'>
      <div>
        <input
          id='title'
          name='title'
          required
          placeholder='Enter a board title'
          className='border border-gray-300 rounded-md p-2 w-full'
        />
        {state?.error?.title ? (
          <div>
            {state.error.title.map((error: string, index: number) => (
              <p key={index} className='text-red-500 text-sm'>
                {error}
              </p>
            ))}
          </div>
        ) : null}
      </div>
      <Button
        type='submit'
        className='bg-blue-500 text-white hover:bg-blue-600'
      >
        Submit
      </Button>
    </form>
  );
};
