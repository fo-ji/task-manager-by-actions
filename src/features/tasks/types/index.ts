export type CreateTaskState = {
  errors?: {
    title?: string[];
  };
  values?: {
    title?: string;
  };
  message: string | null;
};

export type UpdateTaskState = {
  errors?: {
    title?: string[];
  };
  values?: {
    title?: string;
  };
  message: string | null;
};
