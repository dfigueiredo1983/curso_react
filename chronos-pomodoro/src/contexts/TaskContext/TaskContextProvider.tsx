import { useReducer, useState, useEffect } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TaskActionTypes } from './taskActions';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);

  // const(estado_inicial, dispatch) = useReducer(função_reducer, estado_inicial)
  const [myState, dispatch] = useReducer(taskReducer, initialTaskState);

  useEffect(() => {
    console.log(state);
    dispatch({ type: TaskActionTypes.RESET_STATE });
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}
