import { z } from 'zod';

export const createTaskSchema = z.object({
  title: z.string(),
});

export const deleteTaskSchema = z.object({
  id: z.string(),
});

export const updateTaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  completed: z.boolean().optional(),
});
