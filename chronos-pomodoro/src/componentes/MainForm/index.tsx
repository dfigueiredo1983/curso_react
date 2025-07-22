import { Cycles } from '../Cycles';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';
import { DefaultButton } from '../DefaultButton';
import { useRef } from 'react';
import { TaskModel } from '../../models/TaskModels';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  // ciclos
  const nextCycle = getNextCycle(state.currentCycle);

  // type
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // console.log('Deu certo', taskNameInput.current?.value);

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interrupDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining, // conferir depois
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining), // conferir depois
        tasks: [...prevState.tasks, newTask],
        config: {
          ...prevState.config,
        },
      };
    });
  }

  function handleInterruptTask() {
    setState(prevState => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0, // conferir depois
        formattedSecondsRemaining: '00:00', // conferir depois
        // tasks: [...prevState.tasks, adicionar_nova_coisa],
        // Alterar usando map
        tasks: prevState.tasks.map(task => {
          // if (prevState.activeTask && prevState.activeTask.id === task.id) {
          if (prevState.activeTask!.id === task.id) {
            return {
              ...task,
              interrupDate: Date.now(),
            };
          }
          return task;
        }),
      };
    });
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>
      <div className='formRow'>
        <p>O próximo intervalo é de 25 min</p>
      </div>

      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}

      <div className='formRow'>
        {!state.activeTask && (
          <DefaultButton
            key='nova_tarefa'
            aria-label='Iniciar nova tarefa'
            title='Iniciar nova tarefa'
            type='submit'
            icon={<PlayCircleIcon />}
          />
        )}

        {!!state.activeTask && (
          <DefaultButton
            key='interromper_tarefa'
            aria-label='Interromper tarefa atual'
            title='Interromper tarefa atual'
            type='button'
            color='red'
            icon={<StopCircleIcon />}
            onClick={handleInterruptTask}
          />
        )}
      </div>

      {/* <div className='formRow'>
        {!state.activeTask ? (
          <DefaultButton
            key='nova_tarefa'
            aria-label='Iniciar nova tarefa'
            title='Iniciar nova tarefa'
            type='submit'
            icon={<PlayCircleIcon />}
          />
        ) : (
          <DefaultButton
            key='interromper_tarefa'
            aria-label='Interromper tarefa atual'
            title='Interromper tarefa atual'
            type='button'
            color='red'
            icon={<StopCircleIcon />}
            onClick={handleInterruptTask}
          />
        )}
      </div> */}
    </form>
  );
}
