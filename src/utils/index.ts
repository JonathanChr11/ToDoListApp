export type status = 'Completed' | 'On Progress';

export type StackParamList = {
  Splash: undefined;
  Home: undefined;
  NewProject: undefined;
  NewTask: {projectId: number} | undefined;
  ProjectDetails: {projectId: number};
};

export interface ProjectDataProps {
  id: number;
  background: string[];
  title: string;
  tasks: TaskDataProps[];
}

export interface TaskDataProps {
  id: number;
  date: Date;
  title: string;
  description: string;
  status: string;
}

export interface TaskAPIProps {
  projectId: number | undefined;
  taskId?: number;
  taskData?: TaskDataProps;
  taskStatus?: status;
}
