import './styles/global.css';
import './styles/themes.css';

import { Container } from './componentes/Container/';
import { Heading } from './componentes/Heading';

export function App() {
  return (
    <>
      <Container>
        <Heading>LOGO</Heading>
      </Container>
      <Container>
        <Heading>MENU</Heading>
      </Container>
      <Container>
        <Heading>FORMULÁRIO</Heading>
      </Container>
      <Container>
        <Heading>TEXTO</Heading>
      </Container>
      <Container>
        <Heading>FOOTER</Heading>
      </Container>
    </>
  );
}
