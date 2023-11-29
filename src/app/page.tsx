import { CreateTaskForm, TasksList } from '@/features/tasks';
// import prisma from '@/lib/prisma';

export default async function Home() {
  // const tasks = await prisma.task.findMany({
  //   where: { userId: 'clpdfqawj000014ocbrzn4yho' },
  //   orderBy: { createdAt: 'asc' },
  // });
  const res = await fetch('http://host.docker.internal:3000/api/tasks', {
    headers: {
      'Content-Type': 'application/json',
    },
    // cache: 'no-store',
  });
  const tasks = await res.json();

  return (
    <section className="w-full p-6">
      <h1 className="text-center">Tasks</h1>
      <section className="p-4 mb-4 bg-basic rounded">
        <h2 className="border-b border-black">Create</h2>
        <CreateTaskForm />
      </section>
      <section className="p-4 border border-basic-dark rounded">
        <h2 className="border-b border-black">List</h2>
        {tasks && <TasksList tasks={tasks} />}
      </section>
    </section>
  );
}
