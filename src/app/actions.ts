'use server';

import { z } from 'zod';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import {
  createTaskSchema,
  deleteTaskSchema,
  updateTaskSchema,
} from '@/lib/zod';
import { CreateTaskState, UpdateTaskState } from '@/features/tasks/types';
import { redirect } from 'next/navigation';

// TODO: 全体的に改修

export async function createTask(
  prevState: CreateTaskState,
  formData: FormData
): Promise<CreateTaskState> {
  console.log({ prevState });

  try {
    const parsed = createTaskSchema.safeParse({
      title: formData.get('title'),
    });

    if (!parsed.success) {
      return {
        errors: parsed.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create Task',
      };
    }

    await prisma.task.create({
      data: {
        ...parsed.data,
        completed: false,
        user: {
          connect: {
            id: 'clpdfqawj000014ocbrzn4yho',
          },
        },
      },
    });
    revalidatePath('/');
    return {
      message: '',
    };
  } catch (e) {
    // if (e instanceof z.ZodError) {
    //   console.log('ZodError: ', e.issues);
    // }
    return {
      message: 'Database Error: Failed to Create Task',
    };
  }
}

export async function deleteTask(prevState: any, formData: FormData) {
  try {
    const parsed = deleteTaskSchema.parse({
      id: formData.get('id'),
    });

    await prisma.task.delete({
      where: { id: parsed.id },
    });
    return revalidatePath('/');
  } catch (e) {
    if (e instanceof z.ZodError) {
      console.log('ZodError: ', e.issues);
    }
    return { message: 'Failed to delete' };
  }
}

export async function updateTask(
  prevState: UpdateTaskState,
  formData: FormData
): Promise<UpdateTaskState> {
  try {
    const parsed = updateTaskSchema.safeParse({
      id: formData.get('id'),
      title: formData.get('title'),
      completed: formData.get('completed') === 'on',
    });

    if (!parsed.success) {
      return {
        errors: parsed.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Update Task',
      };
    }

    const { id, ...data } = parsed.data;
    await prisma.task.update({
      where: { id },
      data,
    });
    revalidatePath('/');
    return {
      message: '',
    };
  } catch (e) {
    // if (e instanceof z.ZodError) {
    //   console.log('ZodError: ', e.issues);
    // }
    return {
      message: 'Database Error: Failed to Update Task',
    };
  }
}
