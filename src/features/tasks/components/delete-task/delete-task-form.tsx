'use client';

import { deleteTask } from '@/app/actions';
import { useFormState, useFormStatus } from 'react-dom';

const initialState = {
  message: '',
};

export const DeleteTaskForm = ({ id }: { id: string }) => {
  const [state, formAction] = useFormState(deleteTask, initialState);
  const { pending } = useFormStatus();

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        aria-disabled={pending}
        className={
          pending ? 'cursor-not-allowed opacity-50' : 'hover:underline'
        }
      >
        Delete
      </button>
      <p aria-live="polite" role="status">
        {state?.message}
      </p>
    </form>
  );
};
