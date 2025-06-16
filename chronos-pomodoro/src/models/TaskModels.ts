import { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null;
  interrupDate: number | null;
  // type: 'wordTime' | 'shortBreakTime' | 'longBreakTime';
  type: keyof TaskStateModel['config'];
};
