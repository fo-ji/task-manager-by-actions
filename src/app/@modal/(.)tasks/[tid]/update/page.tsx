import { Modal } from '@/components/modal';
import { UpdateTaskForm } from '@/features/tasks/components/update-task';
import prisma from '@/lib/prisma';

type UpdateTaskModalProps = {
  params: { tid: string };
};

export default async function UpdateTaskModal({
  params,
}: UpdateTaskModalProps) {
  const task = await prisma.task.findUnique({
    where: { id: params.tid },
  });

  return (
    <Modal>
      <h1>Update</h1>
      {task && <UpdateTaskForm task={task} />}
    </Modal>
  );
}
