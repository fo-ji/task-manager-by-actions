import { Modal } from '@/components/modal';

type UpdateTaskModalProps = {
  params: { tid: string };
};

// TODO: fetch get task

export default function UpdateTaskModal({ params }: UpdateTaskModalProps) {
  return (
    <Modal>
      {/* <UpdateEventForm eventId={params.eid} /> */}
      <div>{params.tid}</div>
    </Modal>
  );
}
