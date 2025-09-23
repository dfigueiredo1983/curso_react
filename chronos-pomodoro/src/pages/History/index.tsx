import { MainTemplate } from '../../templates/MainTemplate';
import { Container } from '../../componentes/Container';
import { Heading } from '../../componentes/Heading';
import { DefaultButton } from '../../componentes/DefaultButton';
import { TrashIcon } from 'lucide-react';

import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { sortTasks, SortTasksOptions } from '../../utils/sortTasks';
import { useEffect, useState } from 'react';
import { showMessage } from '../../adapters/showMessage';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

export function History() {
  const { state, dispatch } = useTaskContext();
  const [confirmClearHistory, setConfirmClearHistory] = useState(false);
  const hasTasks = state.tasks.length > 0;

  const [sortTasksOptions, setSortTaskOptions] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        field: 'startDate',
        direction: 'desc',
      };
    },
  );

  // [] - array de dependências vazio, então roda apenas na montagem e
  // desmontagem do componente
  useEffect(() => {
    document.title = 'Histórico - Chronos Pomodoro';
  });

  useEffect(() => {
    setSortTaskOptions(prevState => ({
      ...prevState,
      tasks: sortTasks({
        tasks: state.tasks,
        direction: prevState.direction,
        field: prevState.field,
      }),
    }));
  }, [state.tasks]);

  useEffect(() => {
    if (!confirmClearHistory) return;

    console.log('Apagar histórico');
    setConfirmClearHistory(false);

    dispatch({ type: TaskActionTypes.RESET_STATE });
  }, [confirmClearHistory, dispatch]);

  // Exeuta sempre que o componente for renderizado, pois tem
  // o array de dependências vazio
  useEffect(() => {
    // executado sempre que o componente é destruído
    return () => {
      console.log('Componente HISTORY destruído');
      showMessage.dismiss();
    };
  }, []);

  // function handleSortTasks(props: Omit<SortTasksOptions, 'tasks' | 'direction'>) {
  // function handleSortTasks({ field }: Omit<SortTasksOptions, 'tasks' | 'direction'>) {
  function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
    const newDirection = sortTasksOptions.direction === 'desc' ? 'asc' : 'desc';

    setSortTaskOptions({
      tasks: sortTasks({
        tasks: sortTasksOptions.tasks,
        field,
        direction: newDirection,
      }),

      direction: newDirection,
      field,
    });
  }

  function handleResetHistory() {
    showMessage.dismiss();

    showMessage.confirm(
      'Tem certeza que deseja apagar o histórico?',
      // confirmation => console.log(confirmation),
      confirmation => {
        setConfirmClearHistory(confirmation);
        // if (confirmation) {
        //   dispatch({ type: TaskActionTypes.RESET_STATE });
        // }
      },
    );

    // if (!confirm('Tem certeza que deseja apagar o histórico?')) return;
    // dispatch({
    //   type: TaskActionTypes.RESET_STATE,
    // });
    // window.location.reload();
    // localStorage.removeItem('state');
  }

  // const sortedTasks = [...state.tasks].sort((a, b) => {
  //   return b.startDate - a.startDate;
  // });
  // const sortedTasks = sortTasks({ tasks: state.tasks });

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span> History</span>
          {hasTasks && (
            <span className={styles.buttonContainer}>
              <DefaultButton
                icon={<TrashIcon />}
                color='red'
                aria-label='Apagar todo o histórico'
                title='Apagar histórico'
                onClick={handleResetHistory}
              />
            </span>
          )}
        </Heading>
      </Container>

      <Container>
        {hasTasks && (
          <div className={styles.responsiveTable}>
            {/* table - Tabela */}
            <table>
              {/* thead - Cabeçalho da tabela */}
              <thead>
                {/* tr - linha */}
                <tr>
                  {/* th - cabeçalho do head */}
                  <th
                    onClick={() => handleSortTasks({ field: 'name' })}
                    className={styles.thSort}
                  >
                    Tarefa ↕
                  </th>
                  <th
                    onClick={() => handleSortTasks({ field: 'duration' })}
                    className={styles.thSort}
                  >
                    Duração ↕
                  </th>
                  <th
                    onClick={() => handleSortTasks({ field: 'startDate' })}
                    className={styles.thSort}
                  >
                    Data ↕
                  </th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              {/* tbody - corpo da tabela */}

              {/* tr - linha*/}
              {/* td - coluna */}
              <tbody>
                {/* {Array.from({ length: 20 }).map((_, index) => {
                return (
                  <tr key={index}>
                    <td>Estudar</td>
                    <td>25 min</td>
                    <td>20/04/2025 08:00</td>
                    <td>Completa</td>
                    <td>Foco</td>
                  </tr>
                );
              })} */}
                {/* {state.tasks.map(task => { */}
                {/* {sortedTasks.map(task => { */}
                {sortTasksOptions.tasks.map(task => {
                  const taskTypeDictionary = {
                    workTime: 'Foco',
                    shortBreakTime: 'Descanso curto',
                    longBreakTime: 'Descanso longo',
                  };

                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.duration}min</td>
                      {/* <td>{new Date(task.startDate).toISOString()}</td> */}
                      <td>{formatDate(task.startDate)}</td>
                      <td>{getTaskStatus(task, state.activeTask)}</td>
                      {/* <td>{task.type}</td> */}
                      <td>{taskTypeDictionary[task.type]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {!hasTasks && (
          <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
            Ainda não existe tarefa
          </p>
        )}
      </Container>
    </MainTemplate>
  );
}
