import {API_URL} from '@env';

export const getProject = async () => {
  try {
    const response = await fetch(`${API_URL}/projects`);
    return response;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

export const addProject = async (data: {
  background: string[];
  title: string;
  tasks: never[];
}) => {
  let bodyData = data;

  try {
    const response = await fetch(`${API_URL}/projects`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(bodyData),
    });
    return response;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

export const deleteProject = async (projectId: number) => {
  try {
    const response = await fetch(`${API_URL}/projects/${projectId}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    });
    return response;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};
