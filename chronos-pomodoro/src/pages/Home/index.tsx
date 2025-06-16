import { MainTemplate } from '../../templates/MainTemplate';
import { Container } from '../../componentes/Container';
import { CountDown } from '../../componentes/CountDown';
import { MainForm } from '../../componentes/MainForm';

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
