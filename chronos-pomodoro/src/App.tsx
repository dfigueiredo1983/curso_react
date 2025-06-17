import { useState } from 'react';
import { Home } from './pages/Home';

import './styles/global.css';
import './styles/themes.css';
import { TaskStateModel } from './models/TaskStateModel';

// export type TaskStateModel = {
//   tasks: TaskModel[]; // histórico, MainForm
//   secondsRemaining: number; // Home, CountDown, Histórico, MainForm, Button
//   formattedSecondsRemaining: string; // Título, CountDown
//   activeTask: TaskModel | null; // CountDown, Histórico, MainForm, BUtton
//   currentCycle: number; // Home
//   config: {
//     workTime: number; // MainForm
//     shortBreakTime: number; // MainFOrm
//     longBreakTime: number; // Mainform
//   };
// };

// initialState é um objeto do tipo TaskStateModel
const initialState: TaskStateModel = {
  tasks: [], // histórico, MainForm
  secondsRemaining: 0, // Home, CountDown, Histórico, MainForm, Button
  formattedSecondsRemaining: '00:00', // Título, CountDown
  activeTask: null, // CountDown, Histórico, MainForm, BUtton
  currentCycle: 0, // Home
  config: {
    workTime: 25, // MainForm
    shortBreakTime: 5, // MainFOrm
    longBreakTime: 15, // Mainform
  },
};

export function App() {
  const [state, setState] = useState(initialState);

  console.log('APP: ', state);

  return <Home state={state} setState={setState} />;
}
