import { MainTemplate } from '../../templates/MainTemplate';
import { Container } from '../../componentes/Container';
import { CountDown } from '../../componentes/CountDown';
import { MainForm } from '../../componentes/MainForm';
import { TaskStateModel } from '../../models/TaskStateModel';
import React from 'react';

export type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Home(props: HomeProps) {
  // const { state, setState } = props;

  // function handleClik() {
  //   setState(prevState => {
  //     return {
  //       ...prevState,
  //       currentCycle: 5,
  //     };
  //   });
  // }

  return (
    <MainTemplate>
      <Container>
        {/* <button onClick={handleClik}>Clicar</button> */}
        <CountDown {...props} />
      </Container>

      <Container>
        <MainForm {...props} />
      </Container>
    </MainTemplate>
  );
}
