import { TaskModel } from './TaskModels';

// Estado -> Home -> Componente

export type TaskStateModel = {
  tasks: TaskModel[]; // histórico, MainForm
  secondsRemaining: number; // Home, CountDown, Histórico, MainForm, Button
  formattedSecondsRemaining: string; // Título, CountDown
  activeTask: TaskModel | null; // CountDown, Histórico, MainForm, BUtton
  currentCycle: number; // Home
  config: {
    workTime: number; // MainForm
    shortBreakTime: number; // MainFOrm
    longBreakTime: number; // Mainform
  };
};
