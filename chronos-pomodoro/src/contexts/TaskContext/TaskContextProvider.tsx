import { useReducer, useState } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);

  type ActionType = {
    type: string;
    payload?: number;
  };

  const [myState, dispatch] = useReducer(
    (state, action: ActionType) => {
      switch (action.type) {
        case 'INCREMENT': {
          if (!action.payload) return state;
          return {
            // Agora eu retorno um objeto
            ...state,
            secondsRemaing: state.secondsRemaing + action.payload,
          };
        }

        case 'DECREMENT': {
          if (!action.payload) return state;
          return {
            // Agora eu retorno um objeto
            ...state,
            secondsRemaing: state.secondsRemaing - action.payload,
          };
        }

        case 'RESET': {
          return {
            // Agora eu retorno um objeto
            ...state,
            secondsRemaing: 0,
          };
        }
      }

      return state;
    },
    {
      secondsRemaing: 0,
    },
  );

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {/* {children} */}
      <h1>Testando</h1>
      <h3>O número é: {JSON.stringify(myState)}</h3>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 10 })}>
        Incrementar + 10
      </button>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 20 })}>
        Incrementar + 20
      </button>

      <button onClick={() => dispatch({ type: 'DECREMENT', payload: 10 })}>
        Decrementar - 10
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT', payload: 20 })}>
        Decrementar - 20
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </TaskContext.Provider>
  );
}
