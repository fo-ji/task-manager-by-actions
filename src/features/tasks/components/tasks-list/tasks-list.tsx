import type { Task } from '@prisma/client';
import { DeleteTaskForm } from '../..';
import Link from 'next/link';

type TasksListProps = {
  tasks: Task[];
};
export const TasksList = ({ tasks }: TasksListProps) => {
  return (
    <div className="pt-2">
      <ul className="divide-y divide-basic-dark">
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center p-2">
            <p>{task.title}</p>
            <div className="flex gap-6">
              <Link
                className="hover:underline"
                href={`/tasks/${task.id}/update`}
                scroll={false}
              >
                Edit
              </Link>
              <DeleteTaskForm id={task.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
