'use client';

import { updateTask } from '@/app/actions';
import { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

const initialState = {
  errors: {},
  message: null,
};

export const UpdateTaskForm = () => {
  const [state, formAction] = useFormState(updateTask, initialState);
  const { pending } = useFormStatus();
  const ref = useRef<HTMLFormElement>(null);

  console.log({ state });

  useEffect(() => {
    if (!pending && !state.errors) {
      ref.current?.reset();
    }
  }, [state, pending, ref]);

  return (
    <form ref={ref} action={formAction}>
      {state.message && (
        <p className="text-system-error" aria-live="polite">
          {state.message}
        </p>
      )}
      <label htmlFor="task">Title</label>
      <div className="flex gap-2">
        <input
          className="text-field"
          type="text"
          id="task"
          name="title"
          defaultValue={state?.values?.title || ''}
          required
        />
        <button
          className="py-1 px-2 rounded bg-white hover:bg-basic-dark"
          type="submit"
          aria-disabled={pending}
        >
          Add
        </button>
      </div>
      {state?.errors?.title &&
        state.errors.title.map((error, idx) => (
          <div
            key={idx}
            className="text-system-error text-sm"
            id="title-error"
            aria-live="polite"
          >
            {error}
          </div>
        ))}
    </form>
  );
};
