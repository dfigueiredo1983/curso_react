import { TaskStateModel } from '../../models/TaskStateModel';

export const initialTaskState: TaskStateModel = {
  tasks: [], // histórico, MainForm
  secondsRemaining: 0, // Home, CountDown, Histórico, MainForm, Button
  formattedSecondsRemaining: '00:00', // Título, CountDown
  activeTask: null, // CountDown, Histórico, MainForm, BUtton
  currentCycle: 0, // Home
  config: {
    workTime: 1, // MainForm
    shortBreakTime: 1, // MainFOrm
    longBreakTime: 1, // Mainform
    // workTime: 25, // MainForm
    // shortBreakTime: 5, // MainFOrm
    // longBreakTime: 15, // Mainform
  },
};
