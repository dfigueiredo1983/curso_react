import React, { createContext, useContext, useState } from 'react';
import { TaskStateModel } from '../../models/TaskStateModel';

const initialState: TaskStateModel = {
  tasks: [], // histórico, MainForm
  secondsRemaining: 0, // Home, CountDown, Histórico, MainForm, Button
  formattedSecondsRemaining: '10:00', // Título, CountDown
  activeTask: null, // CountDown, Histórico, MainForm, BUtton
  currentCycle: 0, // Home
  config: {
    workTime: 25, // MainForm
    shortBreakTime: 5, // MainFOrm
    longBreakTime: 15, // Mainform
  },
};

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue = {
  state: initialState,
  setState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialState);

  return (
    <TaskContext.Provider
      // value={{ ...initialContextValue, qualquerCoisa: true }}
      // value={initialContextValue}
      value={{ state, setState }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  return useContext(TaskContext);
}
