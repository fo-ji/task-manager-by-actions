'use client';

import { updateTask } from '@/app/actions';
import type { Task } from '@prisma/client';
import { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

type UpdateTaskFormProps = {
  task: Task;
};

const initialState = {
  errors: {},
  message: null,
};

export const UpdateTaskForm = ({ task }: UpdateTaskFormProps) => {
  const [state, formAction] = useFormState(updateTask, initialState);
  const { pending } = useFormStatus();
  const ref = useRef<HTMLFormElement>(null);

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
        <input type="hidden" name="id" value={task.id} />
        <input
          className="checkbox-field"
          type="checkbox"
          id="task"
          name="completed"
          defaultChecked={state?.values?.completed || task.completed}
        />
        {state?.errors?.completed &&
          state.errors.completed.map((error, idx) => (
            <div
              key={idx}
              className="text-system-error text-sm"
              id="completed-error"
              aria-live="polite"
            >
              {error}
            </div>
          ))}
        <input
          className="text-field"
          type="text"
          id="task"
          name="title"
          defaultValue={state?.values?.title || task.title}
          required
        />
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
        <button
          className="py-1 px-2 rounded bg-white hover:bg-basic-dark"
          type="submit"
          aria-disabled={pending}
        >
          Update
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
