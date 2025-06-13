import './styles/global.css';
import './styles/themes.css';

import { Container } from './componentes/Container/';
import { Logo } from './componentes/Logo';
import { Menu } from './componentes/Menu';
import { CountDown } from './componentes/CountDown';

export function App() {
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
            <label htmlFor='meuImput'>task</label>
            <input id='meuInput' type='text' />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum</p>
          </div>

          <div className='formRow'>
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0</p>
          </div>

          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
