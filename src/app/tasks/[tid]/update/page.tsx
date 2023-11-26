import { UpdateTaskForm } from '@/features/tasks/components/update-task';
import prisma from '@/lib/prisma';

type UpdateTaskPageProps = {
  params: { tid: string };
};

export default async function UpdateTaskPage({ params }: UpdateTaskPageProps) {
  const task = await prisma.task.findUnique({
    where: { id: params.tid },
  });

  return (
    <div>
      <h1>Update</h1>
      {task && <UpdateTaskForm task={task} />}
    </div>
  );
}
