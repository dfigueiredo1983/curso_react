// import styles from './styles.module.css';

import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';

import { PlayCircleIcon } from 'lucide-react';
import { HomeProps } from '../../pages/Home';

export function MainForm({ state, setState }: HomeProps) {
  function handleClick() {
    setState(prevState => {
      return {
        ...prevState,
        formattedSecondsRemaining: '23:34',
        config: {
          ...prevState.config,
          workTime: 34,
        },
      };
    });
  }
  // setState(prevState => {
  //   ...prevState,
  //   // config: {
  //   //   ...prevState.config,
  //   //   workTime: 34,
  //   // }

  return (
    <form className='form' action=''>
      <div>
        <button type='button' onClick={handleClick}>
          Clicar MainForm
        </button>
      </div>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
        />
      </div>
      <div className='formRow'>
        <p>O próximo intervalo é de {state.config.workTime} min</p>
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
