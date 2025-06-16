import './styles/global.css';
import './styles/themes.css';

import { Container } from './componentes/Container/';
import { Logo } from './componentes/Logo';
import { Menu } from './componentes/Menu';
import { CountDown } from './componentes/CountDown';
import { DefaultInput } from './componentes/DefaultInput';
import { Cycles } from './componentes/Cycles';
import { DefaultButton } from './componentes/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './componentes/Footer';

export function App() {
  const numero = 0;

  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              labelText={numero.toString()}
              id='meuInput'
              type='text'
              placeholder='Digite algo'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
