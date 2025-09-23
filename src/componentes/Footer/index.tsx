import { RouterLink } from '../RouterLink';

import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href='/about-pomodoro'>
        Entenda como funciona a ténica pomodoro
      </RouterLink>
      <RouterLink href='/'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💛{' '}
      </RouterLink>
    </footer>
  );
}
