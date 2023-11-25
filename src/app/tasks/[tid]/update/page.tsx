type UpdateTaskPageProps = {
  params: { tid: string };
};

// TODO: fetch get task

export default function UpdateTaskPage({ params }: UpdateTaskPageProps) {
  return (
    <div>
      <h1>UpdateTaskPage</h1>
      <div>{params.tid}</div>
    </div>
  );
}
