import { Cycles } from '../Cycles';
import { PlayCircleIcon } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';
import { DefaultButton } from '../DefaultButton';
import { useState } from 'react';

export function MainForm() {
  const [taskName, setTaskName] = useState('');

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Deu certo', taskName);
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
          value={taskName}
          // onChange={e => {console.log('Event: ', e.target.value);}}
          onChange={e => setTaskName(e.target.value)}
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
