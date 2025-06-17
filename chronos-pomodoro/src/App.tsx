import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext';

import './styles/global.css';
import './styles/themes.css';

export function App() {
  return (
    <TaskContextProvider>
      <Home />;
    </TaskContextProvider>
  );
}
