import { MainTemplate } from '../../templates/MainTemplate';
import { Container } from '../../componentes/Container';
import { Heading } from '../../componentes/Heading';
import { DefaultInput } from '../../componentes/DefaultInput';
import { DefaultButton } from '../../componentes/DefaultButton';
import { SaveIcon } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { showMessage } from '../../adapters/showMessage';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

export function Settings() {
  const { state, dispatch } = useTaskContext();

  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  // [] - array de dependências vazio, então roda apenas na montagem e
  // desmontagem do componente
  useEffect(() => {
    document.title = 'Settings - Chronos Pomodoro';
  }, []);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showMessage.dismiss();

    const formErrors = [];

    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);

    // console.log(workTime, shortBreakTime, longBreakTime);
    // console.log(`Valor de workTime ${workTime}`);

    // if (isNaN(workTime)) {
    //   formErrors.push('Favor inserir apenas números no campo de Foco');
    //   // showMessage.error('Favor inserir um valor válido para Foco!');
    //   // return;
    // }

    // if (isNaN(shortBreakTime)) {
    //   formErrors.push(
    //     'Favor inserir apenas números no campo de Descanso curto',
    //   );
    //   // showMessage.error('Favor inserir um valor válido para Descanso curto!');
    //   // return;
    // }

    // if (isNaN(longBreakTime)) {
    //   formErrors.push(
    //     'Favor inserir apenas números no campo de Descanso longo',
    //   );
    //   // showMessage.error('Favor inserir um valor válido para Descanso longo!');
    //   // return;
    // }

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push('Favor inserir apenas números!');
      // showMessage.error('Favor inserir um valor válido para Foco!');
      // return;
    }

    if (workTime < 1 || workTime > 99) {
      formErrors.push('Digite valores entre 1 e 99 para foco!');
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push('Digite valores entre 1 e 30 para descanso curto!');
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
      formErrors.push('Digite valores entre 1 e 60 para descanso longo!');
    }

    if (formErrors.length > 0) {
      formErrors.forEach(msg => {
        showMessage.error(msg);
      });
      return;
    }

    // if (formErrors.length > 0) {
    //   console.log('ForErrors: ', formErrors);
    //   // for (const index in formErrors) {
    //   //   console.log(formErrors[index]);
    //   //   showMessage.error(formErrors[index]);
    //   // }
    //   formErrors.forEach(msg => {
    //     showMessage.error(msg);
    //   });
    //   return;
    // }

    // console.log('SALVAR no state', Date.now());
    const formatterBR = new Intl.DateTimeFormat('pt-BR');
    const date = new Date();

    console.log('SALVAR no state', formatterBR.format(date));
    console.log('SALVAR no state', date.toTimeString());

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    });
    showMessage.success('Configurações salvas com sucesso!');
    // console.log('ENVIADO...', Date.now());
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>

      <Container>
        <p style={{ textAlign: 'center' }}>
          Modifique as configurações para tempo de foco, descanso curto e
          descanso longo
        </p>
      </Container>

      <Container>
        <form onSubmit={handleSaveSettings} action='' className='form'>
          <div className='formRow'>
            <DefaultInput
              id='workTime'
              labelText='Foco'
              ref={workTimeInput}
              defaultValue={state.config.workTime}
              type='number'
              // extras
              // min='1'
              // max='99'
              // step='1'
              // maxLength={2}
            />
          </div>
          <div className='formRow'>
            <DefaultInput
              id='shortBreakTime'
              labelText='Descanso curto'
              ref={shortBreakTimeInput}
              defaultValue={state.config.shortBreakTime}
              type='number'
            />
          </div>
          <div className='formRow'>
            <DefaultInput
              id='longBreakTime'
              labelText='Descanso longo'
              ref={longBreakTimeInput}
              defaultValue={state.config.longBreakTime}
              type='number'
            />
          </div>
          <div className='formRow'>
            <DefaultButton
              icon={<SaveIcon />}
              aria-label='Salvar configurações'
              title='Salvar configurações'
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
