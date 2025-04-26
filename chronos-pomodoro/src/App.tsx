import './styles/global.css';
import { Heading } from './componentes/Heading';

export function App() {
  return (
    <>
      <Heading attr={123} attr2='String'>
        Olá mundo 1 Daniel do Carmo
      </Heading>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum cumque
        incidunt accusamus commodi quasi sit, doloribus in fugiat, repellat
      </p>
    </>
  );
}
