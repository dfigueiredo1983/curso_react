import { useEffect, useReducer, useRef } from 'react';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { initialTaskState } from './initialTaskState';
import { TimerWorkerManager } from '../../workers/TimerWorkerManager';
import { TaskActionTypes } from './taskActions';
import { loadBeep } from '../../utils/loadBip';
import { TaskStateModel } from '../../models/TaskStateModel';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState, () => {
    const storageState = localStorage.getItem('state');

    if (storageState === null) return initialTaskState;

    const parsedStorageState = JSON.parse(storageState) as TaskStateModel;

    return {
      ...parsedStorageState,
      activeTask: null,
      secondsRemaining: 0,
      formattedSecondsRemaining: '00:00',
    };
  });
  // let playBeep = loadBeep();
  // useRef<() => void | null> - Tipo de retorno
  // const playBeepRef = useRef<() => void | null>(null);
  // inicia com o valor null em (null)
  // useRef mantém o valor da variável mesmo após a renderização do componente
  const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);

  const worker = TimerWorkerManager.getInstance();
  worker.onmessage(e => {
    const countDownSeconds = e.data;
    // console.log('Worker: ', countDownSeconds);

    if (countDownSeconds <= 0) {
      if (playBeepRef.current) {
        console.log('Tocando áudio...');
        playBeepRef.current();
      }

      dispatch({
        type: TaskActionTypes.COMPLETE_TASK,
      });
      // console.log('Worker COMPLETED');
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  // atualiza quanto todo o componente é alterado, basta ver o que tem
  // dentro de [worker, state]
  // o useEffect fica monitorando quando elas são alteradas
  useEffect(() => {
    // o estado da aplicação mudou então salvar no localStorage
    localStorage.setItem('state', JSON.stringify(state));

    if (!state.activeTask) {
      console.log('Worker terminado por falta de activeTask');
      worker.terminate();
    }

    document.title = `${state.formattedSecondsRemaining} - Chronos Pomodoro`;

    worker.postMessage(state);
  }, [worker, state]);

  useEffect(() => {
    // console.log('ActiveTask mudou', state.activeTask);
    if (state.activeTask && playBeepRef.current === null) {
      console.log('Carregando áudio...');
      playBeepRef.current = loadBeep();
    } else {
      console.log('Encerrando o áudio...');
      playBeepRef.current = null;
    }
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
