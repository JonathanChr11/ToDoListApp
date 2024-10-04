import {API_URL} from '@env';
import {TaskAPIProps} from '../utils';

export const getTask = async (projectId: number | undefined) => {
  try {
    const response = await fetch(`${API_URL}/projects/${projectId}`);
    return response;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

export const addTask = async ({projectId, taskData}: TaskAPIProps) => {
  try {
    const response = await fetch(`${API_URL}/projects/${projectId}`);

    if (!response.ok) {
      throw new Error('Failed to fetch project');
    }

    const project = await response.json();
    project.tasks.push(taskData);

    const updateResponse = await fetch(`${API_URL}/projects/${projectId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({tasks: project.tasks}),
    });

    if (!updateResponse.ok) {
      throw new Error('Failed to add task');
    }

    return updateResponse;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

export const updateTask = async ({
  projectId,
  taskId,
  taskStatus,
}: TaskAPIProps) => {
  try {
    const response = await fetch(`${API_URL}/projects/${projectId}`);

    if (!response.ok) {
      throw new Error('Failed to fetch project');
    }

    const project = await response.json();

    const updatedTasks = project.tasks.map(
      (task: {id: number; status: string}) =>
        task.id === taskId ? {...task, status: taskStatus} : task,
    );

    const updateResponse = await fetch(`${API_URL}/projects/${projectId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({tasks: updatedTasks}),
    });

    if (!updateResponse.ok) {
      throw new Error('Failed to update task');
    }

    return updateResponse;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};
