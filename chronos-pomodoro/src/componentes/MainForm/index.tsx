import { Cycles } from '../Cycles';
import { PlayCircleIcon } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';
import { DefaultButton } from '../DefaultButton';
import { useRef } from 'react';

export function MainForm() {
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Deu certo', taskNameInput.current?.value);
  }

  return (
    // controlar o evento de submit do formulário
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
          ref={taskNameInput}
        />
      </div>
      <div className='formRow'>
        <p>O próximo intervalo é de 25 min</p>
      </div>
      <div className='formRow'>
        <Cycles />
      </div>
      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
